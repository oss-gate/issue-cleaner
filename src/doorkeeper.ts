import fetch from "node-fetch";

const baseUrl = "https://api.doorkeeper.jp";
const options = {
  method: "get",
  headers: { Authorization: `Bearer ${process.env.DOORKEEPER_TOKEN}` },
} as const;
const request = async (api: string) =>
  (await fetch(`${baseUrl}${api}`, options)).json();

export const getEvents = (group = "") => {
  if (group === "") return request("/events");
  return request(`/groups/${group}/events`);
};

export const getEvent = (id: string) => request(`/events/${id}`);

export const getGroup = (group: string) => request(`/groups/${group}`);
