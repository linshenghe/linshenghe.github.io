# CLAUDE.md

## 项目概述

这是 `linshenghe.github.io` 的 GitHub Pages 个人学术主页，轻量静态站点，无框架、无构建系统。

线上地址：https://linshenghe.github.io

## 文件结构与职责

- `index.html` — 页面结构和内容区块，所有文本通过 `data-i18n` 属性做双语标记
- `assets/css/styles.css` — 视觉设计：布局、间距、排版、颜色变量、响应式规则
- `assets/js/site.js` — 双语切换逻辑 + 会议地图渲染，内含 `translations` 对象（en/zh 键值对）
- `assets/data/conferences.js` — 会议数据数组 `conferenceEntries`，每项含 year/type/city/coordinates/title/paper（均为双语）
- `assets/images/` — 图片资产
- `assets/cv/` — CV PDF 等学术文件

修改时改最窄的文件：会议数据去 `conferences.js`，双语文本去 `site.js`，样式去 `styles.css`。

## 设计方向：Publication-first Academic Editorial

当前视觉方向已确定为 **publication-first academic editorial**。

**保留：**
- 暖纸张背景、Serif 学术气质、手绘头像
- 简洁卡片和细线分隔
- 中英文切换、夜间模式、会议地图

**核心原则：**
- 论文、CV、学术链接和研究项目放在最核心位置
- 不走 heavy motion / Awwwards / 视觉作品集路线
- 可以借用更好的节奏、卡片和轻微交互，但不牺牲学术主页的快速扫读和可信度
- 让访问者快速确认：你是谁、研究什么、发表了什么、如何联系、CV 在哪里

**不建议做：**
- 引入 React / Next.js / Tailwind 或任何框架
- 做重动效或滚动叙事
- 把 Publications 做成过度设计的 portfolio 卡片
- 大幅改变现有 URL 和 hash 导航
- 让会议地图占据比论文更高的视觉权重

## 各页面改造目标

- **首页**：像学术名片而非纯视觉 hero。首屏有 CV/Scholar/ORCID/Email 入口、Research Agenda、2-3 篇代表作
- **Publications**：核心页面。每篇论文补 DOI/期刊链接、publication status、关键词、一句贡献说明。区分 Published articles / Working papers / Selected Chinese publications
- **Research**：从宽泛主题升级为 research agenda，含研究领域、当前项目、方法、关键词
- **CV**：PDF 预览窗口 + 打开/下载入口。PDF 是完整学术简历的事实来源，不在网页中重复维护完整简历
- **Conferences**：保留会议列表和地图，但视觉权重不应压过论文和 CV。nav 名称可考虑改为 Activities
- **Contact**：不作为主导航页。联系信息放在首页和页脚，除非有 office hours、合作说明等实质内容

## 实施阶段

### Phase 1：信息补齐（当前阶段）
- 添加 CV 下载入口
- 添加 Google Scholar / ORCID / Email 等学术链接
- 给代表作补 DOI 或期刊链接
- 首页增加 Selected Publications

最小可交付：首页加学术链接 + 2-3 篇代表作 + Publications 补链接和贡献说明 + Contact 改成完整学术链接页

### Phase 2：结构优化
- Research 页面改成 research agenda
- CV 页面拆成更完整的履历结构
- Conferences 调整为 Academic Activities

### Phase 3：视觉收紧
- 优化移动端导航
- 降低背景装饰强度
- 优化论文卡片和学术链接样式
- 检查中英文排版一致性
- 夜间模式可读性

## 工作规则

- 用中文沟通，改文件前先说明要改什么、为什么
- 内容/样式/资产改完后，本地 commit；只有明确要求时才 push 到远端 main
- commit 前检查 `git diff` / `git status`，确认只有当前任务相关改动
- push 前复查 `git status`，push 后检查 GitHub Pages 部署状态
- 不要公开手机号、家庭住址、身份证件、政治面貌、出生日期、私密邮箱等不适合公开主页的信息
- 图片、PDF、CSS、JS 等站点资产放在 `assets/` 下

## 双语系统

- `index.html` 中所有界面文本用 `data-i18n="key"` 标记，富文本用 `data-i18n-html="key"`
- `site.js` 中 `translations.en` 和 `translations.zh` 维护对应翻译
- 新增文本时两边都要加

## 验证

改动后分两层验证：

### 快速检查（每次 commit 前，0.1 秒）
```bash
bash scripts/check.sh
```
自动检查：i18n key 完整性、HTML → JS 翻译引用一致性、本地文件引用是否存在、git diff --check。

### 完整检查（push 前手动做）
- 浏览器打开 `index.html`，检查桌面端每个页面无明显错位
- 浏览器 DevTools → 移动端模拟（375px 宽），检查无横向溢出
- 切换中英文，确认所有文本正常显示
- 切换夜间模式，确认可读性
- 点击所有外部链接确认正确打开
- 如果有 CV PDF，确认链接有效、可下载
