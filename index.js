const ParseTitle = require('./lib/parse-title')
const Doorkeeper = require('./lib/doorkeeper')
const Mustache = require('mustache')
const fs = require('fs')
const util = require('util')
const isAfter = require('date-fns/is_after')
const format = require('date-fns/format')
const startOfToday = require('date-fns/start_of_today')
const core = require('@actions/core')
const github = require('@actions/github')

const generateMessage = async (view) => {
  const readFile = util.promisify(fs.readFile)
  const templatePath = `${__dirname}/template/message.mustache`
  const message = await readFile(templatePath, 'utf8')

  return Mustache.render(message, view)
}

try {
  const owner = core.getInput('owner')
  const repo = core.getInput('repo')
  const q = `repo:${owner}/${repo} state:open`

  const issues = await github.search.issues({ q })

  const doorkeeper = new Doorkeeper()
  const events = await doorkeeper.events(owner)
  const hasEvents = typeof events === 'object'

  await Promise.all(issues.data.items.map(async result => {
    const { title } = result
    const { title: parsedTitle, date, isWorkshop, isEventIssue, isIrregularDate } = new ParseTitle(title)

    const message = await generateMessage({ isWorkshop, hasEvents, events })

    if (!isAfter(startOfToday(), date) || !isEventIssue) return

    const issue = (object) => {
      const { number } = result
      return Object.assign({ owner, repo, number }, object)
    }
    let updateIssue = { state: 'closed' }
    if (isIrregularDate) {
      parsedTitle[2] = format(date, 'YYYY-MM-DD')
      updateIssue = { ...updateIssue, title: parsedTitle.join(': ') }
    }

    await github.issues.createComment(issue({ body: message }))
    await github.issues.update(issue(updateIssue))
  }))
} catch (error) {
  core.setFailed(error.message)
}
