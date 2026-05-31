# AGENTS.md

## 项目规则

- 这是 `linshenghe.github.io` 的 GitHub Pages 个人主页项目。
- 用中文沟通，改文件前先说明要改什么。
- 网站内容、样式或资产文件改完后，默认执行验证并本地 commit；只有用户明确要求发布时才 push 到远端 `main`。
- commit 前先检查 `git diff` / `git status`，确认只包含当前任务相关改动。
- 需要 push 时再执行远端同步；push 前复查 `git status`，push 后检查 GitHub Pages 状态和线上地址。
- 不要公开手机号、家庭住址、身份证件、政治面貌、出生日期、私密邮箱或其他不适合放到公开主页的信息。
- 图片、PDF、CSS、JS 等站点资产放在 `assets/` 下；目前图片放在 `assets/images/`。
- 页面仍是轻量静态站点，除非确有必要，不引入框架、构建系统或外部依赖。

## 验证

- HTML/CSS 改动后，至少运行 `git diff --check`。
- UI 可见改动后，用浏览器或 Playwright 检查桌面和移动端没有明显错位、横向溢出，图片能正常加载。
- 发布后检查 GitHub Pages 状态和线上地址：`https://linshenghe.github.io/`。
