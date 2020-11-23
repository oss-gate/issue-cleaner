"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title_1 = require("./title");
const mustache_1 = require("./mustache");
const doorkeeper_1 = require("./doorkeeper");
const date_fns_1 = require("date-fns");
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
const main = async () => {
    const { owner, repo } = github_1.context.repo;
    const octokit = github_1.getOctokit(core_1.getInput("GITHUB_TOKEN", { required: true }));
    const q = `repo:${owner}/${repo} state:open`;
    const issues = await octokit.search.issuesAndPullRequests({ q });
    const events = await doorkeeper_1.getEvents(core_1.getInput("DOORKEEPER_GROUP"));
    await Promise.all(issues.data.items.map(async (result) => {
        const { title, number } = result;
        if (!(title_1.isWorkshop(title) || title_1.isMeetup(title)))
            return;
        if (date_fns_1.isBefore(date_fns_1.startOfToday(), title_1.getDate(title)))
            return;
        const issue = {
            owner,
            repo,
            issue_number: number,
        };
        const message = await mustache_1.getMessage(`${__dirname}/message.mustache`, {
            isWorkshop: title_1.isWorkshop(title),
            hasEvents: events.length > 0,
            events,
        });
        await octokit.issues.update({
            ...issue,
            state: "closed",
            title: title_1.normalize(title),
        });
        await octokit.issues.createComment({ ...issue, body: message });
    }));
};
main().catch((error) => {
    console.log(error);
    core_1.setFailed(error.message);
});
