import { isWorkshop, isMeetup, getDate, normalize } from "./title";
import { getMessage } from "./mustache";
import { getEvents } from "./doorkeeper";
import { isBefore, startOfToday } from "date-fns";
import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

const main = async () => {
  const { owner, repo } = context.repo;
  const octokit = getOctokit(getInput("GITHUB_TOKEN", { required: true }));
  const q = `repo:${owner}/${repo} state:open`;
  const issues = await octokit.rest.search.issuesAndPullRequests({ q });
  const events = await getEvents(getInput("DOORKEEPER_GROUP"));

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
        hasEvents: events.length > 0,
        events,
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
