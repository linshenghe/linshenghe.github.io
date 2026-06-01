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

修改时改最窄的文件：会议数据去 `conferences.js`，双语文本去 `site.js`，样式去 `styles.css`。

## 工作规则

- 改文件前先说明要改什么、为什么
- 内容/样式/资产改完后，本地 commit；只有明确要求时才 push 到远端 main
- commit 前检查 `git diff` / `git status`，确认只有当前任务相关改动
- push 后检查 GitHub Pages 部署状态
- 不要公开手机号、家庭住址、身份证件、政治面貌、出生日期、私密邮箱等不适合公开主页的信息
- 不引入框架或外部依赖，除非确有必要

## 双语系统

- `index.html` 中所有界面文本用 `data-i18n="key"` 标记，富文本用 `data-i18n-html="key"`
- `site.js` 中 `translations.en` 和 `translations.zh` 维护对应翻译
- 新增文本时两边都要加

## 验证

- HTML/CSS 改动后至少跑 `git diff --check`
- UI 可见改动后，用浏览器检查桌面和移动端：无横向溢出、无明显错位、图片正常加载