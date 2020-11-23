"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroup = exports.getEvent = exports.getEvents = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const baseUrl = "https://api.doorkeeper.jp";
const options = {
    method: "get",
    headers: { Authorization: `Bearer ${process.env.DOORKEEPER_TOKEN}` },
};
const request = async (api) => (await node_fetch_1.default(`${baseUrl}${api}`, options)).json();
const getEvents = (group = "") => {
    if (group === "")
        return request("/events");
    return request(`/groups/${group}/events`);
};
exports.getEvents = getEvents;
const getEvent = (id) => request(`/events/${id}`);
exports.getEvent = getEvent;
const getGroup = (group) => request(`/groups/${group}`);
exports.getGroup = getGroup;
