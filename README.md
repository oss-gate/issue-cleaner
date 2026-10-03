# OSS Gate Issue Cleaner

> [!IMPORTANT]
> This repository is no longer maintained. The workshop repository now closes work log issues with its own workflow instead; see [oss-gate/workshop@db0c132](https://github.com/oss-gate/workshop/commit/db0c1329fc04ea1c98055974b135780f957139d5).

A GitHub Actions for cleaning issues of OSS Gate Workshop repository

## Usage

Write a workflow file as follows at `.github/workflow/issue.yaml` in your repository.

### Clean all event issues by manual trigger

```yaml
on: [workflow_dispatch]

jobs:
  clean:
    runs-on: ubuntu-latest

    steps:
      - uses: oss-gate/issue-cleaner@v3
        with:
          DOORKEEPER_GROUP: oss-gate
          CONNPASS_KEYWORD: oss gate
        env:
          DOORKEEPER_TOKEN: ${{ secrets.DOORKEEPER_TOKEN }}
```

### Clean one person event issues when PR opened

```yaml
on:
  push:
    paths:
      - "tutorial/retrospectives/**/*.yaml"

jobs:
  clean:
    runs-on: ubuntu-latest

    steps:
      - uses: oss-gate/issue-cleaner@v3
        with:
          DOORKEEPER_GROUP: oss-gate
          CONNPASS_KEYWORD: oss gate
          author: ${{ github.event.sender.login }}
        env:
          DOORKEEPER_TOKEN: ${{ secrets.DOORKEEPER_TOKEN }}
```

## Release flow

Using [technote-space/release-github-actions](https://github.com/technote-space/release-github-actions).

## Contributing

If you have suggestions for how oss-gate-issue-cleaner could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 OSS Gate
