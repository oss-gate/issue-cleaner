## [3.1.3](https://github.com/oss-gate/issue-cleaner/compare/v1.1.0...v3.1.3) (2023-03-06)

* Bump version with dependabot updates

## 3.1.2 (2021-12-11)


### Bug Fixes

* FetchError invalid response json body ([10b6ba9](https://github.com/oss-gate/issue-cleaner/commit/10b6ba98bf9dcfc2d4e723c3b291e9cb0d571cc7))

## 3.1.1 (2021-09-18)

* feat: not show events when option not given ([2257b62](https://github.com/oss-gate/issue-cleaner/commit/2257b623a23791b5ca2fb6df0009f1397eccb2af))
* feat: drop date-fns & use epoch time ([b4ada80](https://github.com/oss-gate/issue-cleaner/commit/b4ada800f0b318b01694e7db3b352e8a6a1b919e))
* feat: adjust date check take 2 ([c3c1694](https://github.com/oss-gate/issue-cleaner/commit/c3c169448e57484e70253ade6d199770d684daf3))
* Revert "feat: adjust-date-check" ([f96eb7c](https://github.com/oss-gate/issue-cleaner/commit/f96eb7c6b9c8beb5ad6d3115672e20d4975970c5))
* feat: adjust-connpass-event-count ([09c4af2](https://github.com/oss-gate/issue-cleaner/commit/09c4af2e25bae2627278bcd3f2cec1235580e791))
* feat: adjust-date-check ([7a19ecb](https://github.com/oss-gate/issue-cleaner/commit/7a19ecbb6000b05c6a88528e0b3b998b9aad706a))
* fix: invalid connpass api url ([c07ae63](https://github.com/oss-gate/issue-cleaner/commit/c07ae63dc387239fe031d8bea68021527abbf31b))
* fix: cannot use node-fetch in commonjs ([5dad307](https://github.com/oss-gate/issue-cleaner/commit/5dad3078ff227f10c10a675f401428a85d76eaba))
* refactor: yarn format ([3022ce6](https://github.com/oss-gate/issue-cleaner/commit/3022ce6628d3818535ad983321e8d0c525ae07f8))
* fix: test failure ([a7ffaa3](https://github.com/oss-gate/issue-cleaner/commit/a7ffaa3686b78486b1fe6daaed5379b17ad7a6cd))
* feat: add conpass api support ([0dc84bf](https://github.com/oss-gate/issue-cleaner/commit/0dc84bfa922d00d5d7648d23dd7b3f79719a0266))
* fix: test data ([ed0ff50](https://github.com/oss-gate/issue-cleaner/commit/ed0ff50de25c441b18c65d0edb4668f690939174))
* feat: update message ([2245b0f](https://github.com/oss-gate/issue-cleaner/commit/2245b0fd4674540234d9c4b9ff79a9be13be3f74))
* feat: add option of filter by author ([10c7b23](https://github.com/oss-gate/issue-cleaner/commit/10c7b23a742fbac17509ab8fdf1140ea60afd4e5))


## 2.2.1 (2021-09-13)


* Revert "chore: update node engine" ([b4c32af](https://github.com/oss-gate/issue-cleaner/commit/b4c32af6ee6d9b35a938ffcd17d024f4c0e39d32))
* refactor: use built-in date constructer to get date obj ([0ef873e](https://github.com/oss-gate/issue-cleaner/commit/0ef873e613890966e1340c37343ec38120f71ff1))
* fix: type error ([3d93829](https://github.com/oss-gate/issue-cleaner/commit/3d9382961a83704db7aed1b7867103568508efce))


## 2.1.16 (2020-11-24)


* Migrate to TypeScript (#26) ([776d4f9](https://github.com/oss-gate/issue-cleaner/commit/776d4f9087aa8354294094116e6aef827d95ae85))


## 2.0.12 (2020-11-21)


* Fix action failure (#24) ([249cd8f](https://github.com/oss-gate/issue-cleaner/commit/249cd8ff3c169929cea935e4343040299f46ced3))


## 2.0.8 (2020-10-31)


* Fix syntax error (missing async function) ([2d5cd19](https://github.com/oss-gate/issue-cleaner/commit/2d5cd19821f76894e6cdd61f275664f2c7f012a2))
* Remove .nowignore ([fdfbbba](https://github.com/oss-gate/issue-cleaner/commit/fdfbbba2a855b3d9d6e41e88600b1df4f68dfc65))
* Add .github/workflows with release-github-actions ([a3b7d0c](https://github.com/oss-gate/issue-cleaner/commit/a3b7d0ca612390ac671649c53e153f42b79f69ef))
* Add action.yml ([22b989b](https://github.com/oss-gate/issue-cleaner/commit/22b989bb15a9d415a5a1c7535b346d535cf92aa3))
* Adjust README.md ([3616282](https://github.com/oss-gate/issue-cleaner/commit/36162824a262d7dc46e44e43ee8a04fbcfd572c7))
* Use @actions/{github,core} instead of probot, etc. with update packages ([03f296b](https://github.com/oss-gate/issue-cleaner/commit/03f296b5b3badb7ac68338cb7ffbb06a064286c5))
* Change author as "OSS Gate" ([94b5ff4](https://github.com/oss-gate/issue-cleaner/commit/94b5ff4f1ca914df72c7ea6649d42c47622f3593))



## 1.1.0 (2020-10-31)


* Fix separator ([1b0cbfc](https://github.com/oss-gate/issue-cleaner/commit/1b0cbfcfd416d0f9655b3176c415f1f7a602f562))
* Add title rename function with ParseTitle.isIrregularTitle ([2738a69](https://github.com/oss-gate/issue-cleaner/commit/2738a69b6ab8ceb652ca503acd59cbf9df755fca))
* Ease a condition of date format in ParseTitle.isEventIssue ([f6d3dc5](https://github.com/oss-gate/issue-cleaner/commit/f6d3dc572aa6301ba830bec891f073bde9c7f019))
* Add .nowignore ([7942eae](https://github.com/oss-gate/issue-cleaner/commit/7942eae1f13513bb66ba011baa0f0a0311ee054a))
* Add scaling configuration ([ab50e95](https://github.com/oss-gate/issue-cleaner/commit/ab50e95c3910c6297c978811640f904b71f6d84f))


## 1.0.0 (2019-01-22)


* Use zeit now(v1) to deploy ([9512d39](https://github.com/oss-gate/issue-cleaner/commit/9512d39831c4e218c9dae08d3cdcd19d22431eca))
* Remove dotenv.config() ([5f432d8](https://github.com/oss-gate/issue-cleaner/commit/5f432d842dbbd85e9eb3c45dfd56cd3c15269dee))
* Remove hardcoding ([c70d03e](https://github.com/oss-gate/issue-cleaner/commit/c70d03e876191160f6df92bf66008615fae2d881))
* Add doorkeeper API client #1 ([8cada32](https://github.com/oss-gate/issue-cleaner/commit/8cada3200a27602eac150dbd26b474dfb10c6c57))
* Adjust message ([bccb0c8](https://github.com/oss-gate/issue-cleaner/commit/bccb0c8ce77346c7847aa7553cd320e3f5774c5f))
* Update .gitignore ([6f3a4c6](https://github.com/oss-gate/issue-cleaner/commit/6f3a4c6cff1921d510ed6bbadf243ed49fcd19a6))
* Add condition 'isWorkshop' for message ([4fa55a7](https://github.com/oss-gate/issue-cleaner/commit/4fa55a726e4eb35a66b7cb387d75717f21226c9f))
* Remove duplicate assignment ([c707067](https://github.com/oss-gate/issue-cleaner/commit/c70706785f3ba5d1655231bee56b3cc5baedc001))
* Add message template ([e1ef152](https://github.com/oss-gate/issue-cleaner/commit/e1ef152669525e17f56093229055fda918385709))
* Clean parse-title.test.js ([bd22e33](https://github.com/oss-gate/issue-cleaner/commit/bd22e33289f9666a85ca9fe71ce50dc99541e1cf))
* Add rawDate format validation ([4307a44](https://github.com/oss-gate/issue-cleaner/commit/4307a440ebe0633e4d3820c94079f19c474bb836))
* Add test ([93320f7](https://github.com/oss-gate/issue-cleaner/commit/93320f75e8dd6af91b0f7de5304e443b09835270))
* Follow letter-case mismatch ([068882b](https://github.com/oss-gate/issue-cleaner/commit/068882bdbc630e274dc6b666bfbe3d85e8474546))
* Adjust date handling ([25feb3e](https://github.com/oss-gate/issue-cleaner/commit/25feb3e5aca9774a12a7fa8fec3e69c38f4ed410))
* Adjust files ([31b92b0](https://github.com/oss-gate/issue-cleaner/commit/31b92b0f2c5bcd37b94c90175aecc4d12a32b8dc))
* Add Probot core behavior ([0b3d6d3](https://github.com/oss-gate/issue-cleaner/commit/0b3d6d3292965649acfd3383737b87c7f0f33c78))
* Add issue title parser ([bed14c8](https://github.com/oss-gate/issue-cleaner/commit/bed14c85a1911bde933d8b111d8a6cd34efe2283))
* Start making a Probot app ([d6f2d08](https://github.com/oss-gate/issue-cleaner/commit/d6f2d08b0669b0b94829e85302caa86e33a12bc1))

