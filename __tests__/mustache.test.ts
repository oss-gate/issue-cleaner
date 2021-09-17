import type { DoorkeeperEvent } from "../src/doorkeeper";
import type { ConnpassEvents } from "../src/connpass";
import { getMessage } from "../src/mustache";

const path = `${__dirname}/../src/message.mustache`;

const result = `おつかれさまでした！

ワークショップの終了にともないissueを閉じますが、このまま作業メモとして使っても構いません :ok_hand:

[ワークショップの感想](https://oss-gate.github.io/workshop/report.html)を集めています！

ブログなどに書かれた際は、[このページ](https://github.com/oss-gate/oss-gate.github.io/blob/master/workshop/report.md)へリンクの追加をお願いします :pray:

今後もイベントの開催を予定しています。

  - [a](test1)
  - [b](test2)
  - [c](test3)
  - [d](test4)
  - [e](test5)

またの参加をお待ちしています！
`;
const resultWithoutEvents = `おつかれさまでした！

ワークショップの終了にともないissueを閉じますが、このまま作業メモとして使っても構いません :ok_hand:

[ワークショップの感想](https://oss-gate.github.io/workshop/report.html)を集めています！

ブログなどに書かれた際は、[このページ](https://github.com/oss-gate/oss-gate.github.io/blob/master/workshop/report.md)へリンクの追加をお願いします :pray:

またの参加をお待ちしています！
`;
const resultNonWorkshop = `おつかれさまでした！

今後もイベントの開催を予定しています。

  - [a](test1)
  - [b](test2)
  - [c](test3)
  - [d](test4)
  - [e](test5)

またの参加をお待ちしています！
`;

describe("Message with anouncement of events", () => {
  let view: {
    isWorkshop: boolean;
    hasEvents: boolean;
    doorkeeperEvents: {
      event: Pick<DoorkeeperEvent, "title" | "public_url">;
    }[];
    connpassEvents: Pick<
      ConnpassEvents["events"][number],
      "title" | "event_url"
    >[];
  };

  beforeEach(() => {
    view = {
      isWorkshop: true,
      hasEvents: true,
      doorkeeperEvents: [
        {
          event: {
            title: "a",
            public_url: "test1",
          },
        },
        {
          event: {
            title: "b",
            public_url: "test2",
          },
        },
        {
          event: {
            title: "c",
            public_url: "test3",
          },
        },
      ],
      connpassEvents: [
        {
          title: "d",
          event_url: "test4",
        },
        {
          title: "e",
          event_url: "test5",
        },
      ],
    };
  });

  test("Parsing an Issue Date", async () => {
    const message = await getMessage(path, view);

    expect(message).toBe(result);
  });

  test("Message Without anouncement of events", async () => {
    view.hasEvents = false;
    const message = await getMessage(path, view);

    expect(message).toBe(resultWithoutEvents);
  });

  test("Message for non workshop", async () => {
    view.isWorkshop = false;
    const message = await getMessage(path, view);

    expect(message).toBe(resultNonWorkshop);
  });
});
