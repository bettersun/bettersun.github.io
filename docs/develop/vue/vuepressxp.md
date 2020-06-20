
## VuePress GitPages 部署问题

### Travis 提示 gh-token is invalid

```js
gh-token is invalid. Details: GET https://api.github.com/user: 401 - Bad credentials // See: https://developer.github.com/v3
```

解决方法：

1. 在Travis的仓库Settings里删除原有的GITHUB_TOKEN变量
2. 在GitHub生成新的TOKEN，生成后记得复制。
3. 在Travis的仓库Settings里添加新的GITHUB_TOKEN变量，用在GitHub里生成的新TOKEN的值。

```js
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: master
  target_branch: master
```