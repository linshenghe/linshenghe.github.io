# 学术主页修改方案

## 目标

把当前主页从“有风格的个人展示页”升级为“publication-first academic editorial”学术主页。

核心目标：

- 保留当前暖纸张、档案感、手绘头像和轻 editorial 风格。
- 降低装饰感，把论文、CV、学术链接和研究项目放到更核心位置。
- 不引入框架、不加构建系统，继续保持轻量静态站点。
- 让访问者快速确认：你是谁、研究什么、发表了什么、如何联系、CV 在哪里。

## 当前判断

当前页面优点：

- 首页有辨识度，不像普通模板。
- 中英文切换、夜间模式、会议地图已经比较完整。
- 视觉基调统一，头像资产也能形成个人记忆点。

当前主要问题：

- Publications 信息太少，缺 DOI、链接、摘要或贡献说明。
- Contact 只有邮箱，缺 Google Scholar、ORCID、机构主页、GitHub 等学术身份链接。
- CV 页更像简介，不像完整学术履历。
- Research 页只有方向，没有 working papers / projects / methods / research agenda。
- Conferences 页面比核心学术内容更丰富，信息权重偏高。
- 首页首屏没有直接给出 CV、Scholar、代表作入口。

## 推荐风格方向

### 方向：Publication-first Academic Editorial

保留：

- 暖纸张背景。
- Serif 学术气质。
- 手绘头像。
- 简洁卡片和细线分隔。
- 中英文和夜间模式。

调整：

- 首页更像学术名片，而不是纯视觉 hero。
- Publications 成为核心页面。
- CV 和学术链接变成明确行动入口。
- Conferences 降为 academic activities，而不是站点最强功能。

## 修改范围

### 1. 首页

建议改动：

- 在首页首屏增加一组核心行动链接：
  - Download CV
  - Google Scholar
  - ORCID
  - Email
- 把 `Current Focus` 改成更学术化的 `Research Agenda`。
- 在首页增加 `Selected Publications` 小模块，展示 2-3 篇代表作。
- `Last updated 2026` 保留，但放低视觉权重。

首页结构建议：

1. 姓名、身份、研究一句话简介。
2. CV / Scholar / ORCID / Email 快速入口。
3. 头像。
4. Research Agenda。
5. Selected Publications 摘要入口。

### 2. Publications 页面

建议改动：

- 每篇论文增加：
  - DOI 或 journal link。
  - publication status。
  - keywords。
  - 1 句 contribution summary。
- 区分：
  - Published articles
  - Working papers
  - Selected Chinese publications
- 如果暂时没有完整数据，可以先只给代表作加链接和说明。

### 3. Research 页面

建议改动：

- 从“三个主题卡片”升级为更具体的研究结构：
  - Research areas
  - Current projects
  - Methods
  - Keywords
- 每个方向不要只写名词，要写 1-2 句具体问题。

示例结构：

- Policy design and behavioral assumptions
- Government communication and public attitudes
- Collaborative governance and coproduction
- Computational and experimental methods

### 4. CV 页面

建议改动：

- 增加公开 CV 下载按钮。
- 拆成更清晰的模块：
  - Education
  - Publications
  - Awards
  - Research projects
  - Academic service
  - Conference presentations
- 当前三张卡片可以保留，但最好改成更紧凑的履历式列表。

### 5. Conferences 页面

建议改动：

- Nav 名称可考虑从 `Conferences` 改成 `Activities` 或 `Academic Activities`。
- 地图保留，但不要让它在视觉上压过论文和 CV。
- 过去会议列表可以折叠或分组：
  - Upcoming conferences
  - Selected presentations
  - Full list

### 6. Contact 页面

建议改动：

- 不只放邮箱，改成学术身份链接页。
- 增加：
  - Email
  - Google Scholar
  - ORCID
  - Institutional profile
  - CV
  - GitHub 或 OSF，如果适合公开

## 视觉调整

建议小改，不大重做：

- 降低背景网格透明度，让正文更清晰。
- Publications 卡片减少边框盒子感，更像期刊目录。
- 统一按钮和链接样式，避免普通链接、胶囊按钮、卡片链接混杂。
- 移动端 nav 当前高度偏高，可以压缩。
- Conferences 地图灰底略重，可以降低存在感。

## 文件影响

预计主要修改：

- `index.html`
  - 调整页面结构和新增链接区域。
- `assets/css/styles.css`
  - 新增 CV / academic links / publication detail 样式。
  - 微调首页、论文页、移动端 nav。
- `assets/js/site.js`
  - 更新中英文文案。
  - 如修改导航名称，需要同步翻译。
- `assets/data/conferences.js`
  - 如果会议页改名但数据不变，可不动。
- `assets/images/`
  - 如果增加 CV PDF 或 OG 图，可能新增资产。

## 实施顺序

### Phase 1：信息补齐

- 添加 CV 下载入口。
- 添加 Google Scholar / ORCID / Email 等学术链接。
- 给代表作补 DOI 或期刊链接。
- 首页增加 Selected Publications。

### Phase 2：结构优化

- Research 页面改成 research agenda。
- CV 页面拆成更完整的履历结构。
- Conferences 调整为 Academic Activities。

### Phase 3：视觉收紧

- 优化移动端导航。
- 降低背景装饰强度。
- 优化论文卡片和学术链接样式。
- 检查中英文排版一致性。

## 验证

每次改完应验证：

- `git diff --check`
- 桌面端首页、Publications、CV、Contact 页面无明显错位。
- 移动端无横向溢出。
- 中英文切换正常。
- 夜间模式可读。
- 外部链接正确打开。
- CV PDF 链接有效。
- 图片正常加载。

## 不建议做的事

暂时不建议：

- 引入 React / Next.js / Tailwind。
- 做重动效或滚动叙事。
- 把 Publications 做成过度设计的 portfolio 卡片。
- 大幅改变现有 URL 和 hash 导航。
- 让会议地图继续占据比论文更高的视觉权重。

## 推荐下一步

先做 Phase 1。

最小可交付版本：

- 首页增加 CV / Scholar / ORCID / Email 链接。
- 首页增加 2-3 篇代表作。
- Publications 给代表作补链接和一句贡献说明。
- Contact 改成完整学术链接页。