"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = exports.getDate = exports.getISODate = exports.isISODate = exports.isMeetup = exports.isWorkshop = exports.join = exports.split = void 0;
const date_fns_1 = require("date-fns");
const split = (title) => title.split(":").map((chunk) => chunk.trim());
exports.split = split;
const join = (title) => title.join(": ");
exports.join = join;
const isWorkshop = (title) => {
    const [event = ""] = exports.split(title);
    return (exports.isISODate(exports.normalize(title)) && /oss gate workshop/.test(event.toLowerCase()));
};
exports.isWorkshop = isWorkshop;
const isMeetup = (title) => {
    const [event = ""] = exports.split(title);
    return (exports.isISODate(exports.normalize(title)) && /oss gate meetup/.test(event.toLowerCase()));
};
exports.isMeetup = isMeetup;
const isISODate = (title) => {
    const [, , date = ""] = exports.split(title);
    return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date);
};
exports.isISODate = isISODate;
const getISODate = (title) => {
    const [, , date = "0"] = exports.split(title);
    const [year = "0", month = "0", day = "0"] = date.split("-");
    return [
        year.padStart(4, "0"),
        month.padStart(2, "0"),
        day.padStart(2, "0"),
    ].join("-");
};
exports.getISODate = getISODate;
const getDate = (title) => {
    return date_fns_1.parseISO(exports.getISODate(title));
};
exports.getDate = getDate;
const normalize = (title) => {
    const [prefix = "", place = "", , ...suffix] = exports.split(title);
    if (exports.isISODate(title))
        return title;
    return exports.join([prefix, place, exports.getISODate(title), ...suffix]);
};
exports.normalize = normalize;
