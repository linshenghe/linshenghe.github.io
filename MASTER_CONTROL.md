# Master Control

## 项目信息

- **项目**：linshenghe.github.io — 个人学术主页
- **仓库**：git@github-linshenghe-homepage:linshenghe/linshenghe.github.io.git
- **默认分支**：main

## 活动日志

### [CC] Conferences 瘦身：砍统计卡片、简化 upcoming、past 折叠、地图降级

- **Time**: 2026-06-22 19:25
- **Session ID**: 3adb9f3c-3bfa-442e-9cbc-f02ae4ddc715
- **Branch**: slim-conferences
- **Commit**: 4a87b70
- **Files touched**: index.html, assets/css/styles.css, assets/js/site.js

#### Summary

- Nav 名改为 Activities，URL hash 不变；砍掉 6 个统计卡片；4 个 heading 合并为 2 个，删除所有解释文字
- Upcoming 卡片只保留会议名+日期+城市，去掉 milestones、countdown、来源链接
- Past 列表默认显示 5 条，原生 JS "Show all" 折叠/展开；地图保留在页面底部无独立 heading
- 总计 -278 行 / +112 行，净减 166 行；旧 plan 标记完成，新第二轮优化计划已写入

#### For Codex

- Conferences → Activities 决策已定。后续 Step 2-4（Publications 分组、epigraph 移位、CSS 清理）尚未开始，下一步优先做 Step 2。

## 当前状态

Conferences 瘦身完成（slim-conferences 分支），待继续 Step 2（Publications 分组）。站点已推进到 publication-first academic editorial 方向，保留轻量静态站点形态，不引入框架或构建系统。

## 历史记录

### 角色与更新规则

- 本文件是主控线程的控制面板，用来汇总当前目标、已知决策、执行线程回传、阻塞和下一步。
- 决策优先级：用户直接指令 > 根目录 `AGENTS.md` > `README.md` > 其他计划或草稿文档。
- 每次收到执行线程的有效回传后，都要同步更新本文件；更新后检查本次改动，再提交。需要推送时，只推与该次回传相关的提交。
- 如果回传内容和现有规则冲突，先在本文件标出冲突，不默认折中处理。

### 已知决策

- 站点继续作为 GitHub Pages 轻量静态主页维护。
- 首页已经完成一轮 `publication-first academic editorial` 重设计，并已合并部署到线上。
- 导航品牌已从 `LH` 改为 `HE`，同时新增 `HE` favicon。
- 首页保留现有 `Email`、`Google Scholar`、`ORCID` 图标入口。
- Hero 目前保留原有两段介绍，不放文字操作按钮。
- 首页头像已放大并下移，图文间距已收紧。
- 题记只在 Home 显示；诗句居中，作者以右对齐形式附在诗句下方。
- 页脚当前文案为 `© 2026 Linsheng He / Updated June 20, 2026`。
- 首页要把学术入口前置：`CV`、`Email`，以及后续可加入的 `Google Scholar`、`ORCID`、代表作入口。
- `Publications` 是核心页面，论文条目需要逐步补齐 DOI 或期刊链接、publication status、关键词和一句贡献说明。
- `Research` 要从宽泛主题页升级为 research agenda，突出研究领域、当前项目、方法和关键词。
- `CV` 页以 PDF 预览窗口加打开/下载入口为主，PDF 是完整学术简历的事实来源。
- `Conferences` 页面已瘦身并改名为 `Activities`，nav 和页面标题已更新。地图保留在页面底部作为补充，不占主视觉权重。
- 视觉收紧优先级已经明确：移动端导航、背景网格透明度、论文条目样式、中英文字体与排版一致性、夜间模式可读性。
- 验证基线已确定：提交前优先运行 `bash scripts/check.sh`；阶段性 UI 改动在定稿、提交或发布前再做桌面端和移动端可视检查。

### 已知冲突与未决问题

- `Contact` 页面定位存在冲突：
  - `AGENTS.md` 说它不应作为主导航页，除非以后有 office hours、合作说明或表单等实质内容。
  - `plans/academic-homepage-revision-plan.md` 仍把它当成一个完整学术链接页来推进。
  - 在用户进一步确认前，默认按 `AGENTS.md` 优先，不主动把 `Contact` 继续做成主导航重点。
- `CV` 页面定位存在冲突：
  - `AGENTS.md` 要求以 PDF 预览页为主，不在网页重复维护完整 CV。
  - 旧计划文档建议把网页本身拆成更完整的履历模块。
  - 在用户进一步确认前，默认按 `AGENTS.md` 优先。
- `Conferences` 是否改名为 `Academic Activities` 的问题已解决：nav 和页面标题改为 `Activities`，URL hash `#conferences` 保持不变。
- Phase 1 仍缺关键内容源：
  - 公开可用的 `Google Scholar`、`ORCID`、机构主页、GitHub/OSF 链接是否都已准备好。
  - 首页 `Selected Publications` 具体选哪 2-3 篇代表作。
  - 论文所需 DOI、期刊链接、status、关键词和贡献说明是否已整理齐。
- GitHub Pages workflow 仍有 Node.js 20 弃用警告，但当前不影响部署。
- GitHub PR 目前没有独立 CI checks；现阶段仍依赖 `bash scripts/check.sh` 和浏览器可视检查。

### 执行线程状态

- 已补录一条旧执行线程有效回传，对应已合并的 PR #1。
- 该线程目标：重新设计并发布学术主页首页，完善导航、Hero、头像、题记、页脚和 `HE` 品牌标识。
- 该线程已完成：
  - 首页改为 `publication-first academic editorial` 风格。
  - 导航品牌由 `LH` 改为 `HE`，并新增 `assets/images/favicon.svg`。
  - 保留 `Email`、`Google Scholar`、`ORCID` 图标。
  - Hero 保留原有两段介绍，删除文字操作按钮。
  - 放大并下移头像，收紧图文间距。
  - 题记仅在 Home 显示；诗句居中，作者右对齐到诗句宽度。
  - 页脚更新为 `© 2026 Linsheng He / Updated June 20, 2026`。
  - 已完成桌面端、390px 移动端、日间和夜间模式检查。
  - PR #1 已审查、修复、合并并部署；feature branch 已从本地和远端删除。
- 该线程无遗留功能或代码任务。
- 回传涉及文件：
  - `.gitignore`
  - `index.html`
  - `assets/css/styles.css`
  - `assets/js/site.js`
  - `assets/images/favicon.svg`
- 主控线程已用本地仓库独立对齐的事实：
  - `main` 上存在合并提交 `f83d14b`，对应 `Merge pull request #1 from linshenghe/redesign-hero-epigraph`。
  - 当前仓库可见 `HE` 品牌、favicon、Scholar/ORCID 链接、`T. S. Eliot` 题记和 `Updated June 20, 2026` 页脚文本。

### 更新记录

- 2026-06-20：初始化主控文档。已读取 `README.md`、`AGENTS.md`，并补读 `plans/academic-homepage-revision-plan.md` 作为低优先级参考；确认当前目标、已知决策、冲突点和下一步。`MASTER_CONTROL.md` 此前不存在，现已创建。
- 2026-06-20：补录旧执行线程回传。已将已合并的 PR #1 首页重设计结果、验证范围、涉及文件、残留运维问题和后续建议同步进主控文档；并用本地 `git log` 与仓库文件内容做了基础对齐。
- 2026-06-22：Conferences 瘦身完成（slim-conferences 分支）。nav 改名 Activities、砍统计卡片、upcoming 简化、past 折叠、地图降级。旧 plan 标记完成，新第二轮优化计划已写入。同步更新 MASTER_CONTROL 中的决策和冲突状态。
- 2026-06-22：重构 MASTER_CONTROL.md 为规范模板（项目信息 → 活动日志 → 当前状态 → 历史记录）。
