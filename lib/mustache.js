"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessage = void 0;
const mustache_1 = require("mustache");
const fs_1 = require("fs");
const util_1 = require("util");
const readFilePromise = util_1.promisify(fs_1.readFile);
const getMessage = async (path, view) => mustache_1.render(await readFilePromise(path, "utf8"), view);
exports.getMessage = getMessage;
