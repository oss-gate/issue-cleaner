import { isWorkshop, isMeetup, getDate, normalize } from "./title";
import { getMessage } from "./mustache";
import { getEvents as getDoorkeeperEvents } from "./doorkeeper";
import { getEvents as getConnpassEvents } from "./connpass";
import clsx from "clsx";
import { isBefore, startOfToday } from "date-fns";
import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

const main = async () => {
  const { owner, repo } = context.repo;
  const octokit = getOctokit(getInput("GITHUB_TOKEN", { required: true }));
  const author = getInput("author");
  const q = clsx(
    `repo:${owner}/${repo}`,
    "type:issue",
    "state:open",
    author && `author:${author}`
  );
  const issues = await octokit.rest.search.issuesAndPullRequests({ q });
  const doorkeeperEvents = await getDoorkeeperEvents(
    getInput("DOORKEEPER_GROUP")
  );
  const connpassEvents = await getConnpassEvents({
    keyword: getInput("CONNPASS_KEYWORD"),
  });

  await Promise.all(
    issues.data.items.map(async (result) => {
      const { title, number } = result;

      if (!(isWorkshop(title) || isMeetup(title))) return;
      if (isBefore(startOfToday(), getDate(title))) return;

      const issue = {
        owner,
        repo,
        issue_number: number,
      } as const;
      const message = await getMessage(`${__dirname}/message.mustache`, {
        isWorkshop: isWorkshop(title),
        hasEvents:
          doorkeeperEvents.length > 0 || connpassEvents.events.length > 0,
        doorkeeperEvents,
        connpassEvents: connpassEvents.events,
      });

      await octokit.rest.issues.update({
        ...issue,
        state: "closed",
        title: normalize(title),
      });
      await octokit.rest.issues.createComment({ ...issue, body: message });
    })
  );
};

main().catch((error) => {
  console.log(error);
  setFailed(error.message);
});
