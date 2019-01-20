const ParseTitle = require('./lib/parse-title')
const Mustache = require('mustache')
const fs = require('fs')
const util = require('util')
const isAfter = require('date-fns/is_after')
const startOfToday = require('date-fns/start_of_today')
const createScheduler = require('probot-scheduler')

const generateMessage = async () => {
  const readFile = util.promisify(fs.readFile)
  const templatePath = `${__dirname}/template/message.mustache`
  const message = await readFile(templatePath, 'utf8')
  const view = { hasEvents: false }

  return Mustache.render(message, view)
}

module.exports = app => {
  createScheduler(app, { interval: 12 * 60 * 60 * 1000 })

  app.on('schedule.repository', async context => {
    const { owner, repo } = context.repo()
    const q = `repo:${owner}/${repo} state:open`

    const message = await generateMessage()
    const issues = await context.github.search.issues({ q })

    await Promise.all(issues.data.items.map(async result => {
      result = context.repo(result)

      const { title } = result
      const { date, isEventIssue } = new ParseTitle(title)

      if (!isAfter(startOfToday(), date) || !isEventIssue) return

      const issue = (object) => {
        const { owner, repo, number } = result
        return Object.assign({ owner, repo, number }, object)
      }

      await context.github.issues.createComment(issue({ body: message }))
      await context.github.issues.update(issue({ state: 'closed' }))
    }))
  })
}
