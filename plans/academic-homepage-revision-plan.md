# 学术主页修改方案

> **状态：✅ 已完成。** Phase 1-3 核心任务已在 2026-06 完成。剩余未做项转入下方新优化计划。

## 完成情况

| 任务 | 状态 |
|------|------|
| CV 下载入口 | ✅ |
| Scholar / ORCID / Email 学术链接（header quick-links） | ✅ |
| 代表作补 DOI / 期刊链接 / 贡献说明 / 关键词 | ✅ |
| Research → Research agenda（三主题卡片，去掉编号） | ✅ |
| CV 页面：PDF 预览 + Open/Download 入口 | ✅ |
| Hero 中文名 + 排版字体升级 | ✅ |
| Publications 信息补齐 | ✅ |
| Conferences → Academic Activities（nav 改名） | ❌ 未做 |
| 区分 Published / Working papers / Chinese publications | ❌ 未做 |
| 降低背景装饰强度 | ❌ 未做 |
| 移动端导航压缩 | ⚠️ 部分 |

---

# 第二轮优化计划（2026-06-22）

## 当前状态

旧 plan 的 Phase 1-3 核心任务已完成。当前站点结构：

- **首页**：Hero（姓名+中文名+身份+intro+头像+epigraph）
- **Research**：Research agenda 三主题卡片（无编号）
- **Publications**：4 篇 selected publications，含 DOI/PDF/关键词/贡献说明
- **CV**：PDF 预览 + Open/Download 入口
- **Conferences**：统计卡片 + upcoming 卡片 + past 列表 + Leaflet 地图

## 核心问题：Conferences 页面过重

当前 Conferences 是整个站点最”重”的页面：

- 6 个统计卡片（past/international/domestic/upcoming/places/honors）— 信息量大但对访客意义有限
- 4 个 section heading 各有独立解释文字 — 重复啰嗦
- upcoming 卡片含 countdown、milestones 列表、来源链接 — 对个人学术主页过于详细
- 17 条 past presentation 全展开，无折叠
- Leaflet 地图加载外部 JS/CSS（~100KB），增加页面体积
- CSS 中 conference 相关规则约 300 行，是最大单一模块
- 地图在移动端几乎不可用

### 目标

把 Conferences 从”功能最丰富的页面”降为”简洁的学术活动记录”，视觉权重不超过 Publications 和 CV。

### 具体改动

1. **Nav 改名**：`Conferences` → `Activities`（中英文同步）
2. **砍掉统计卡片**：6 个数字卡片全删，信息对访客无实质帮助
3. **合并 section heading**：4 个独立 heading → 1 个页面标题 + 简洁列表，去掉每段的解释文字
4. **upcoming 卡片瘦身**：只保留会议名、日期、城市，去掉 milestones、countdown、来源链接
5. **past 列表折叠**：默认只显示最近 3-5 条 + “Show all” 展开按钮
6. **地图保留但缩小**：去掉独立 heading，作为页面底部的小地图补充，不占主视觉权重
7. **删除未使用的 CSS**：conference stats、upcoming-card 详细样式、milestone-list 等

## 其他优化

### Publications 分组

当前 4 篇全部混在一起。建议按类型分组：

- **Published articles**（2 篇英文 SSCI）
- **Chinese publications**（2 篇中文 CSSCI）

不需要大改 HTML 结构，加两个小标题即可。Working papers 暂无内容，先不加。

### Epigraph 缩小

当前 epigraph 在 hero 下方占一整屏。考虑：
- 缩小字号和间距
- 或移到页脚上方作为全站 closing quote

倾向后者——epigraph 作为全站收尾比放在首页中间更自然。

### 移动端导航

当前移动端 nav 是水平滚动链接列表。可以考虑：
- 压缩间距
- 当前页高亮更明显

小改动，不重构。

### CSS 清理

- 删除 `counter-reset: research-item` 等已不用的规则
- 删除 conference stats 相关样式（如果砍掉统计卡片）
- 合并重复的 font-family 声明

## 实施顺序

### Step 1：Conferences 瘦身（主要工作）
- 改 `index.html`：简化 conference 区块结构
- 改 `site.js`：删统计渲染、简化 upcoming 渲染、加 past 折叠逻辑、更新翻译
- 改 `styles.css`：删 ~150 行无用 conference 样式、简化保留样式
- 改 `conferences.js`：数据不动

### Step 2：Publications 分组
- `index.html`：加两个 sub-heading
- `site.js`：加对应翻译 key

### Step 3：Epigraph 移位
- `index.html`：从 hero 底部移到 footer 上方
- `styles.css`：调整样式

### Step 4：CSS 清理 + 移动端微调
- 删无用规则
- 移动端 nav 间距收紧

## 文件影响

- `index.html` — conference 结构简化、publications 分组、epigraph 移位
- `assets/css/styles.css` — 删 ~150 行、简化保留样式、移动端微调
- `assets/js/site.js` — 删统计渲染、简化 upcoming、加折叠、更新翻译
- `assets/data/conferences.js` — 不动

## 不建议做

- 删掉地图（保留但缩小）
- 改 URL hash（`#conferences` 保持不变，即使 nav 显示为 Activities）
- 引入折叠库或 JS 框架
- 重构整个导航系统

## 验证

- `bash scripts/check.sh` 通过
- 桌面端每个页面无错位
- 移动端无横向溢出
- 中英文切换正常
- 夜间模式可读
- 地图仍可正常加载和交互
- Past 列表折叠/展开正常