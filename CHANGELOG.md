## 3.1.2 (2021-12-11)


### Bug Fixes

* FetchError invalid response json body ([10b6ba9](https://github.com/oss-gate/issue-cleaner/commit/10b6ba98bf9dcfc2d4e723c3b291e9cb0d571cc7))

## 3.3.1 (2021-09-18)

* feat: not show events when option not given ([2eda899](https://github.com/oss-gate/issue-cleaner/commit/2eda8994822c97ae9e459b68b93d1a2bde865bc7))
* feat: drop date-fns & use epoch time ([e0718b7](https://github.com/oss-gate/issue-cleaner/commit/e0718b7a2856fc940c07978d87d1eea59531e306))
* feat: adjust date check take 2 ([9ebf6ec](https://github.com/oss-gate/issue-cleaner/commit/9ebf6ec761d78911fd6149277d8cc1d51bc75fcb))
* Revert "feat: adjust-date-check" ([d98354f](https://github.com/oss-gate/issue-cleaner/commit/d98354f80cf2de4773698174a9ce900c79bf5c6f))
* feat: adjust-connpass-event-count ([cf73371](https://github.com/oss-gate/issue-cleaner/commit/cf73371e557ea62c1e83e6f5662aaffd0f2713b3))
* feat: adjust-date-check ([cf73371](https://github.com/oss-gate/issue-cleaner/commit/cf73371e557ea62c1e83e6f5662aaffd0f2713b3))
* fix: invalid connpass api url ([cf73371](https://github.com/oss-gate/issue-cleaner/commit/cf73371e557ea62c1e83e6f5662aaffd0f2713b3))
* fix: cannot use node-fetch in commonjs ([942c771](https://github.com/oss-gate/issue-cleaner/commit/942c7717eefbacd16625bff4dd39a615957565b2))
* refactor: yarn format ([942c771](https://github.com/oss-gate/issue-cleaner/commit/942c7717eefbacd16625bff4dd39a615957565b2))
* fix: test failure ([564e684](https://github.com/oss-gate/issue-cleaner/commit/564e6849c063b11fce91b88afe1f1dcaf0d85def))
* feat: add conpass api support ([64547b4](https://github.com/oss-gate/issue-cleaner/commit/64547b4261994de526f1a26d7928b8e3191dbe0f))
* fix: test data ([2245b0f](https://github.com/oss-gate/issue-cleaner/commit/2245b0fd4674540234d9c4b9ff79a9be13be3f74))
* feat: update message ([e12b5f0](https://github.com/oss-gate/issue-cleaner/commit/e12b5f01f497e05850e74b54fe931304ea52514b))
* feat: add option of filter by author ([acabd69](https://github.com/oss-gate/issue-cleaner/commit/acabd6918c46aca8d93c63ca198129d0d4dc56ac))


## 2.2.1 (2021-09-13)


* Revert "chore: update node engine" ([5720c12](https://github.com/oss-gate/issue-cleaner/commit/5720c121fcb79ab793bdccd51218d96b344c517c))
* refactor: use built-in date constructer to get date obj ([c751e9a](https://github.com/oss-gate/issue-cleaner/commit/c751e9a9aa10cbc2080802d16c47cc5b4815d1e5))
* docs: README ([c751e9a](https://github.com/oss-gate/issue-cleaner/commit/c751e9a9aa10cbc2080802d16c47cc5b4815d1e5))
* fix: type error ([0375e90](https://github.com/oss-gate/issue-cleaner/commit/0375e900cb51dff5f1cdd2d1701e5615dc7e677e))


## 2.1.16 (2020-11-24)


* Migrate to TypeScript (#26) ([249cd8f](https://github.com/oss-gate/issue-cleaner/commit/249cd8ff3c169929cea935e4343040299f46ced3))


## 2.0.12 (2020-11-21)


* Fix action failure (#24) ([99635af](https://github.com/oss-gate/issue-cleaner/commit/99635af535d33281eb88c73b068a5f34e7cbc4f4))


## 2.0.8 (2020-10-31)


* Fix syntax error (missing async function) ([fdfbbba](https://github.com/oss-gate/issue-cleaner/commit/fdfbbba2a855b3d9d6e41e88600b1df4f68dfc65))
* Remove .nowignore ([a3b7d0c](https://github.com/oss-gate/issue-cleaner/commit/a3b7d0ca612390ac671649c53e153f42b79f69ef))
* Add .github/workflows with release-github-actions ([22b989b](https://github.com/oss-gate/issue-cleaner/commit/22b989bb15a9d415a5a1c7535b346d535cf92aa3))
* Add action.yml ([3616282](https://github.com/oss-gate/issue-cleaner/commit/36162824a262d7dc46e44e43ee8a04fbcfd572c7))
* Adjust README.md ([03f296b](https://github.com/oss-gate/issue-cleaner/commit/03f296b5b3badb7ac68338cb7ffbb06a064286c5))
* Use @actions/{github,core} instead of probot, etc. with update packages ([94b5ff4](https://github.com/oss-gate/issue-cleaner/commit/94b5ff4f1ca914df72c7ea6649d42c47622f3593))
* Change author as "OSS Gate" ([1d28c64](https://github.com/oss-gate/issue-cleaner/commit/1d28c6476363804ded25b5aaa48b162181e87118))



## 1.1.0 (2020-10-31)


* Fix separator ([9c3d53d](https://github.com/oss-gate/issue-cleaner/commit/9c3d53d04f7723860faab2936f3b4a13164d53c9))
* Add title rename function with ParseTitle.isIrregularTitle ([a8692e2](https://github.com/oss-gate/issue-cleaner/commit/a8692e2f6d05aada4f61bc20e2086f024e9c295d))
* Ease a condition of date format in ParseTitle.isEventIssue ([7942eae](https://github.com/oss-gate/issue-cleaner/commit/7942eae1f13513bb66ba011baa0f0a0311ee054a))
* Add .nowignore ([9448944](https://github.com/oss-gate/issue-cleaner/commit/944894445d3f7f762e6ab09711a175ebb9de251a))
* Add scaling configuration ([9512d39](https://github.com/oss-gate/issue-cleaner/commit/9512d39831c4e218c9dae08d3cdcd19d22431eca))


## 1.0.0 (2019-01-22)


* Use zeit now(v1) to deploy ([5f432d8](https://github.com/oss-gate/issue-cleaner/commit/5f432d842dbbd85e9eb3c45dfd56cd3c15269dee))
* Add doorkeeper API client #1 ([bccb0c8](https://github.com/oss-gate/issue-cleaner/commit/bccb0c8ce77346c7847aa7553cd320e3f5774c5f))
* Adjust message ([6f3a4c6](https://github.com/oss-gate/issue-cleaner/commit/6f3a4c6cff1921d510ed6bbadf243ed49fcd19a6))
* Update .gitignore ([4fa55a7](https://github.com/oss-gate/issue-cleaner/commit/4fa55a726e4eb35a66b7cb387d75717f21226c9f))
* Add condition 'isWorkshop' for message ([c707067](https://github.com/oss-gate/issue-cleaner/commit/c70706785f3ba5d1655231bee56b3cc5baedc001))
* Remove duplicate assignment ([e1ef152](https://github.com/oss-gate/issue-cleaner/commit/e1ef152669525e17f56093229055fda918385709))
* Add message template ([bd22e33](https://github.com/oss-gate/issue-cleaner/commit/bd22e33289f9666a85ca9fe71ce50dc99541e1cf))
* Clean parse-title.test.js ([4307a44](https://github.com/oss-gate/issue-cleaner/commit/4307a440ebe0633e4d3820c94079f19c474bb836))
* Add rawDate format validation ([93320f7](https://github.com/oss-gate/issue-cleaner/commit/93320f75e8dd6af91b0f7de5304e443b09835270))
* Add test ([068882b](https://github.com/oss-gate/issue-cleaner/commit/068882bdbc630e274dc6b666bfbe3d85e8474546))
* Follow letter-case mismatch ([25feb3e](https://github.com/oss-gate/issue-cleaner/commit/25feb3e5aca9774a12a7fa8fec3e69c38f4ed410))
* Adjust date handling ([31b92b0](https://github.com/oss-gate/issue-cleaner/commit/31b92b0f2c5bcd37b94c90175aecc4d12a32b8dc))
* Adjust files ([0b3d6d3](https://github.com/oss-gate/issue-cleaner/commit/0b3d6d3292965649acfd3383737b87c7f0f33c78))
* Add Probot core behavior ([bed14c8](https://github.com/oss-gate/issue-cleaner/commit/bed14c85a1911bde933d8b111d8a6cd34efe2283))
* Add issue title parser ([d6f2d08](https://github.com/oss-gate/issue-cleaner/commit/d6f2d08b0669b0b94829e85302caa86e33a12bc1))
* Start making a Probot app

