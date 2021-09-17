import fetch from "node-fetch";

const baseUrl = "https://connpass.com/api/v1";
const options = {
  method: "get",
} as const;
const request = async <T>(api: string) =>
  (await fetch(`${baseUrl}${api}`, options)).json() as Promise<T>;

export type ConnpassEvents = {
  results_returned: number;
  results_available: number;
  results_start: number;
  events: {
    event_id: number;
    title: string;
    catch: string;
    description: string;
    event_url: string;
    hash_tag: string;
    started_at: string;
    ended_at: string;
    limit: number;
    event_type: string;
    series: {
      id: number;
      title: string;
      url: string;
    };
    address: string;
    place: string;
    lat: number;
    lon: number;
    owner_id: number;
    owner_nickname: number;
    accepted: number;
    waiting: number;
    updated_at: string;
  }[];
};

export type ConnpassOptions = Partial<{
  event_id: number;
  keyword: string;
  keyword_or: string;
  ym: number;
  ymd: number;
  nickname: string;
  owner_nickname: string;
  series_id: number;
  start: number;
  order: number;
  count: number;
  format: string;
}>;

export const getEvents = (options: ConnpassOptions) => {
  return request<ConnpassEvents>(
    `/event?${encodeURI(
      Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    )}`
  );
};
