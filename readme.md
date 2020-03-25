![npm_version](https://img.shields.io/npm/v/inithusky.svg)

## initHusky

配置 hushy 和 lint-staged 太繁琐？安装 initHusky 一键帮你搞定。

## Feature

+ 可选自动安装 commitlint git hook，向远端 Git 仓库提交代码时，自动进行 commitlint 检测
+ 可选自动安装 eslint git hook，向远端 Git 仓库提交代码时，自动对增量 Javascript 代码进行 Eslint 检测
+ 可选自动安装 stylelint git hook，向远端 Git 仓库提交代码时，自动对增量 Css 代码进行 stylelint 检测

## Installation

首先，全局安装 inithusky 指令：

```
npm install -g inithusky
```

接着，便可以在任意项目的根目录下创建 Git 钩子。

## Use

进入任意项目根目录，执行 `inithusky`

```
$ inithusky
```

选择你要安装的钩子，提供三种钩子：

1. commitlint（调用 husky 的 commit-msg 钩子） 
2. eslint（调用 husky 的 pre-commit 钩子）
3. stylelint（调用 husky 的 pre-commit 钩子）

```
$ inithusky
欢迎使用自动化 Git 钩子安装程序
? 是否需要安装 commitlint Git 钩子? Yes
? 是否需要安装 Eslint Git 钩子?(对 Javascript 代码进行风格规范检测) Yes
? 是否需要安装 Stylelint Git 钩子?(对 CSS 代码进行风格规范检测) Yes
```

确定你想安装的钩子之后，

1. 将会自动修改项目根目录下的 `package.json`，添加相关依赖，添加 husky 与 lint-staged 相关配置
2. 针对 commitlint 钩子，在根目录下新增配置文件 `commitlint.config.js`
3. 针对 eslint 钩子，在根目录下新增配置文件 `.eslintrc.js` 配置文件
4. 针对 stylelint 钩子，在根目录下新增配置文件 `.stylelint.js` 配置文件
5. 根据所选钩子，自动生成 `.huskyrc.js` 配置文件，存放 husky 相关配置
6. 根据所选钩子，自动生成 `lint-staged.config.js` 配置文件，存放 lint-staged 相关配置
7. 自动安装依赖

依赖安装完毕，就可以愉快的使用了。

## 注意

1. 在项目根目录执行该命令，且确保根目录下已经有了 `package.json` 文件
2. Git hooks 生效依赖于前置命令 `.git` 文件夹，确保使用该命令时，已经在根目录进行了 `git init` 初始化
3. commitlint 具体规则请看 [commitlint](https://github.com/conventional-changelog/commitlint)
4. eslint 默认采用了 eslint-airbnb 的规范，需要修改 eslint 规范可自行修改根目录下的 `.eslintrc.js` 文件
5. eslint 规范检测默认针对 `/src/*.js` 文件，需要修改生效范围，自行修改 `package.json` 下的 lint-stage 配置
6. stylelint 默认采用了 stylelint-config-standard 的规范，且兼容 SASS ，需要修改 stylelint 规范可自行修改根目录下的 `.stylelint.js` 文件
7. stylelint 规范检测默认针对 `/css/*.css` 文件，需要修改生效范围，自行修改 `package.json` 下的 lint-stage 配置
8. 只要选择了任何一个钩子的安装，将会自动生成 husky 的配置文件 `.huskyrc.js`，且如果 `package.json` 下原本存在 husky 相关配置，将会被覆盖删除，对于一些旧项目需要注意
9. 选择了安装 eslint 及 stylelint，除了自动生成 husky 的配置文件 `.huskyrc.js`，还好额外生成 lint-staged 的配置文件 `lint-staged.config.js`，且如果 `package.json` 下原本存在 lint-staged 相关配置，将会被覆盖删除，对于一些旧项目需要注意


## License

MIT