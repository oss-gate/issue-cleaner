import { parseISO } from "date-fns";

export const split = (title: string): string[] =>
  title.split(":").map((chunk: string) => chunk.trim());

export const join = (title: string[]): string => title.join(": ");

export const isWorkshop = (title: string): boolean => {
  const [event = ""] = split(title);
  return (
    isISODate(normalize(title)) && /oss gate workshop/.test(event.toLowerCase())
  );
};

export const isMeetup = (title: string): boolean => {
  const [event = ""] = split(title);
  return (
    isISODate(normalize(title)) && /oss gate meetup/.test(event.toLowerCase())
  );
};

export const isISODate = (title: string): boolean => {
  const [, , date = ""] = split(title);
  return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date);
};

export const getISODate = (title: string): string => {
  const [, , date = "0"] = split(title);
  const [year = "0", month = "0", day = "0"] = date.split("-");
  return [
    year.padStart(4, "0"),
    month.padStart(2, "0"),
    day.padStart(2, "0"),
  ].join("-");
};

export const getDate = (title: string): Date => {
  return parseISO(getISODate(title));
};

export const normalize = (title: string): string => {
  const [prefix = "", place = "", , ...suffix] = split(title);
  if (isISODate(title)) return title;
  return join([prefix, place, getISODate(title), ...suffix]);
};
