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

## 当前主页改造方向

- 当前视觉方向定为 `publication-first academic editorial`：保留暖纸张、档案感、手绘头像和轻 editorial 气质，但把论文、CV、学术链接和研究项目放到更核心位置。
- 不走 heavy motion / Awwwards / 视觉作品集路线；可以借用更好的节奏、卡片和轻微交互，但不要牺牲学术主页的快速扫读和可信度。
- 首页优先补强学术入口：CV 下载、Email，以及后续可加入的 Google Scholar、ORCID 和 2-3 篇代表作。
- `Publications` 是核心页面；代表作应逐步补 DOI 或期刊链接、publication status、关键词和一句贡献说明。
- `Research` 应从宽泛主题升级为 research agenda：研究领域、当前项目、方法和关键词。
- `CV` 页采用 PDF 预览窗口 + 打开/下载入口，PDF 是完整学术简历的事实来源，不在网页中重复维护一份完整简历。
- `Contact` 不作为主导航页；联系信息放在首页和页脚，除非以后有 office hours、合作说明或表单等实质内容。
- `Conferences` 保留参加过会议列表、未来会议和个人统计；地图放在最后作为补充，不应压过会议列表本身。
- 视觉收紧优先级：移动端导航、背景网格透明度、论文条目样式、中英文字体与排版一致性、夜间模式可读性。

## 验证

- 每次 commit 前优先运行快速检查：`bash scripts/check.sh`。它覆盖 i18n key 完整性、HTML/JS 翻译引用一致性、本地文件引用和 `git diff --check`。
- 多轮视觉修改可以先集中迭代，不必每一版都跑 Playwright。
- UI 可见改动在阶段性定稿、准备 commit 或发布前，再用浏览器或 Playwright 检查桌面和移动端没有明显错位、横向溢出，图片能正常加载。
- 发布后检查 GitHub Pages 状态和线上地址：`https://linshenghe.github.io/`。
