"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvents = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const baseUrl = "https://connpass.com/api/v1";
const options = {
    method: "get",
};
const request = async (api) => (await (0, node_fetch_1.default)(`${baseUrl}${api}`, options)).json();
const getEvents = (options) => {
    return request(`/events?${encodeURI(Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join("&"))}`);
};
exports.getEvents = getEvents;
