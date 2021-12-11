import fetch from "node-fetch";

const baseUrl = "https://api.doorkeeper.jp";
const options = {
  method: "get",
  headers: { Authorization: `Bearer ${process.env.DOORKEEPER_TOKEN}` },
} as const;
const request = async <T>(api: string) => {
  const response = await fetch(`${baseUrl}${api}`, options);
  return (await response.json()) as Promise<T>;
};

export type DoorkeeperEvent = {
  title: string;
  id: number;
  starts_at: string;
  ends_at: string;
  venue_name: string;
  address: string;
  lat: string;
  long: string;
  ticket_limit: number;
  published_at: string;
  group: number;
  description: string;
  public_url: string;
  participants: number;
  waitlisted: number;
};

export type DoorkeeperGroup = {
  id: number;
  name: string;
  country_code: string;
  logo: string;
  description: string;
  public_url: string;
  members_count: number;
};

export const getEvents = (group = "") => {
  if (group === "") return request<{ event: DoorkeeperEvent }[]>("/events");
  return request<{ event: DoorkeeperEvent }[]>(`/groups/${group}/events`);
};

export const getEvent = (id: string) =>
  request<{ event: DoorkeeperEvent }>(`/events/${id}`);

export const getGroup = (group: string) =>
  request<{ group: DoorkeeperGroup }>(`/groups/${group}`);
