import { split, isWorkshop, isMeetup, isISODate, getDate } from "../src/title";
import { isBefore } from "../src/date";

const workshop =
  "OSS Gate Workshop         :Tokyo : 2018-12-31: knokmki612 :OSS Gate Issue Cleaner: Work log";
const meetup = "OSS Gate Meetup :Tokyo : 2018-06-12";
const dirtyDate = "OSS Gate Meetup :Tokyo : 2018-6-12";
const other = "aaaaaaaa";

describe("Issue Title", () => {
  test("Parsing an Issue Title", () => {
    expect(split(workshop)).toMatchObject([
      "OSS Gate Workshop",
      "Tokyo",
      "2018-12-31",
      "knokmki612",
      "OSS Gate Issue Cleaner",
      "Work log",
    ]);
  });

  test("Parsing an Issue Date", () => {
    const [, , date] = split(workshop);

    expect(date === getDate(workshop).toISOString().substring(0, 10)).toBe(
      true
    );
  });

  test("Parsing other title", () => {
    const [prefix] = split(other);

    expect(prefix).toBe("aaaaaaaa");
  });

  test("Title follows a format of the workshop event", () => {
    expect(isWorkshop(workshop)).toBe(true);
  });

  test("Title follows a format of the meetup event", () => {
    expect(isMeetup(meetup)).toBe(true);
  });

  test("Title follows a format of a event includes irreguler date", () => {
    expect(isMeetup(dirtyDate)).toBe(true);
  });

  test("Title doesn't follow any format", () => {
    expect(isWorkshop(other) || isMeetup(other)).toBe(false);
  });

  test("Title doesn't follow correct date string", () => {
    const invalidMeetup = "OSS Gate Meetup :Tokyo : 2018-06-12&13";

    expect(isMeetup(invalidMeetup)).toBe(false);
  });

  test("Detect the dirty date", () => {
    expect(isISODate(dirtyDate)).toBe(false);
  });

  test("Not process in before day", () => {
    expect(!isBefore(new Date(Date.UTC(2018, 11, 30)), getDate(workshop))).toBe(
      false
    );
  });

  test("process in a same day", () => {
    expect(
      !isBefore(new Date(Date.UTC(2018, 11, 31, 1)), getDate(workshop))
    ).toBe(true);
  });

  test("Process in after day", () => {
    expect(!isBefore(new Date(Date.UTC(2019, 0, 1)), getDate(workshop))).toBe(
      true
    );
  });
});
