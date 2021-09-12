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
    const octokit = (0, github_1.getOctokit)((0, core_1.getInput)("GITHUB_TOKEN", { required: true }));
    const q = `repo:${owner}/${repo} state:open`;
    const issues = await octokit.rest.search.issuesAndPullRequests({ q });
    const events = await (0, doorkeeper_1.getEvents)((0, core_1.getInput)("DOORKEEPER_GROUP"));
    await Promise.all(issues.data.items.map(async (result) => {
        const { title, number } = result;
        if (!((0, title_1.isWorkshop)(title) || (0, title_1.isMeetup)(title)))
            return;
        if ((0, date_fns_1.isBefore)((0, date_fns_1.startOfToday)(), (0, title_1.getDate)(title)))
            return;
        const issue = {
            owner,
            repo,
            issue_number: number,
        };
        const message = await (0, mustache_1.getMessage)(`${__dirname}/message.mustache`, {
            isWorkshop: (0, title_1.isWorkshop)(title),
            hasEvents: events.length > 0,
            events,
        });
        await octokit.rest.issues.update({
            ...issue,
            state: "closed",
            title: (0, title_1.normalize)(title),
        });
        await octokit.rest.issues.createComment({ ...issue, body: message });
    }));
};
main().catch((error) => {
    console.log(error);
    (0, core_1.setFailed)(error.message);
});
