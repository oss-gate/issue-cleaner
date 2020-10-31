const Mustache = require('mustache')
const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const templatePath = `${__dirname}/../template/message.mustache`

const result = `おつかれさまでした！

後日引き続きワークショップがある場合
---

後日のワークショップで再開する際に、issueタイトルの日付を更新してreopenしてください！

ワークショップ終了後に続きがしたい場合
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

後日引き続きワークショップがある場合
---

後日のワークショップで再開する際に、issueタイトルの日付を更新してreopenしてください！

ワークショップ終了後に続きがしたい場合
---

issueはクローズしますが、その後も作業を続けていただいて大丈夫です！

是非このissueを活用なさってください。
`
const resultNonWorkshop = `おつかれさまでした！

今後のイベントの案内
---

現在以下のイベントの開催を予定しています。

  - [a](test1)
  - [b](test2)
  - [c](test3)

参加をお待ちしてます！
`

describe('Message with anouncement of events', () => {
  let view

  beforeEach(() => {
    view = {
      isWorkshop: true,
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
  })

  test('Parsing an Issue Date', async () => {
    const message = await readFile(templatePath, 'utf8')
    expect(Mustache.render(message, view)).toBe(result)
  })

  test('Message Without anouncement of events', async () => {
    const message = await readFile(templatePath, 'utf8')
    view.hasEvents = false

    expect(Mustache.render(message, view)).toBe(resultWithoutEvents)
  })

  test('Message for non workshop', async () => {
    const message = await readFile(templatePath, 'utf8')
    view.isWorkshop = false

    expect(Mustache.render(message, view)).toBe(resultNonWorkshop)
  })
})
