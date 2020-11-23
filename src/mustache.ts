import { render } from "mustache";
import { readFile } from "fs";
import { promisify } from "util";

const readFilePromise = promisify(readFile);

export const getMessage = async (path: string, view: unknown) =>
  render(await readFilePromise(path, "utf8"), view);
