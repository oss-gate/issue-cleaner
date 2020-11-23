import { getMessage } from "../src/mustache";

const path = `${__dirname}/../src/message.mustache`;

const result = `おつかれさまでした！

ワークショップの終了にともないissuesを閉じましたが、その後も作業を続けていただいて大丈夫です！

是非このissueを活用なさってください。

今後もイベントの開催を予定しています。

  - [a](test1)
  - [b](test2)
  - [c](test3)

参加をお待ちしています！
`;
const resultWithoutEvents = `おつかれさまでした！

ワークショップの終了にともないissuesを閉じましたが、その後も作業を続けていただいて大丈夫です！

是非このissueを活用なさってください。
`;
const resultNonWorkshop = `おつかれさまでした！

今後もイベントの開催を予定しています。

  - [a](test1)
  - [b](test2)
  - [c](test3)

参加をお待ちしています！
`;

describe("Message with anouncement of events", () => {
  let view: {
    isWorkshop: boolean;
    hasEvents: boolean;
    events: { event: { title: string; public_url: string } }[];
  };

  beforeEach(() => {
    view = {
      isWorkshop: true,
      hasEvents: true,
      events: [
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
