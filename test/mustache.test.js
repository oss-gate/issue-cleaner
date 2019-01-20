const Mustache = require('mustache')
const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const templatePath = `${__dirname}/../template/message.mustache`

const view = {
  hasEvents: true,
  events: [
    {
      event: {
        title: 'a',
        public_url: 'test1'
      }
    },
    {
      event: {
        title: 'b',
        public_url: 'test2'
      }
    },
    {
      event: {
        title: 'c',
        public_url: 'test3'
      }
    }
  ]
}
const result = `おつかれさまでした！

続きがしたい人へ
---

issueはクローズしますが、その後も作業を続けていただいて大丈夫です！

是非このissueを活用なさってください。

今後のイベントの案内
---

現在以下のイベントの開催を予定しています。

  - [a](test1)
  - [b](test2)
  - [c](test3)

参加をお待ちしてます！
`
const resultWithoutEvents = `おつかれさまでした！

続きがしたい人へ
---

issueはクローズしますが、その後も作業を続けていただいて大丈夫です！

是非このissueを活用なさってください。
`

describe('Message with anouncement of events', () => {
  test('Parsing an Issue Date', async () => {
    const message = await readFile(templatePath, 'utf8')
    expect(Mustache.render(message, view)).toBe(result)
  })

  test('Message Without anouncement of events', async () => {
    const message = await readFile(templatePath, 'utf8')
    view.hasEvents = false

    expect(Mustache.render(message, view)).toBe(resultWithoutEvents)
  })
})
