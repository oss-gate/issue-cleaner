const parse = require('date-fns/parse')

module.exports = class ParseTitle {
  constructor (title) {
    this.title = title.split(':').map(string => {
      return string.replace(/^ +/, '').replace(/ +$/, '')
    })

    const [base, place, rawDate] = this.title
    Object.assign(this, { base, place, rawDate })
  }

  get date () {
    return parse(this.rawDate)
  }

  get isEventIssue () {
    return this.title.length >= 3 && /OSS Gate (Workshop|Meetup)/.test(this.base)
  }
}
