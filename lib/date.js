"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBefore = void 0;
const isBefore = (a, b) => a.getTime() < b.getTime();
exports.isBefore = isBefore;
