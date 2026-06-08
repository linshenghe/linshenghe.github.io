# CV 模板说明

六个 LaTeX CV 模板，三个自包含、三个需要外部 cls 文件。内容相同，视觉风格不同。

## 文件清单

| 文件 | 模板 | 依赖 | Overleaf 编译 |
|------|------|------|---------------|
| `cv.tex` | 优化 article | 无 | 直接上传，pdfLaTeX |
| `cv-plasmati.tex` | Plasmati Graduate CV | 无 | 直接上传，pdfLaTeX |
| `cv-friggeri.tex` | Friggeri CV | 无 | 直接上传，pdfLaTeX |
| `cv-awesome.tex` | Awesome CV | awesome-cv.cls | 见下方说明 |
| `cv-altacv.tex` | AltaCV | altacv.cls | 见下方说明 |
| `cv-moderncv.tex` | moderncv (banking) | 无（Overleaf 内置） | 直接上传，pdfLaTeX |

## 各模板特点

### 自包含（无需额外文件）

**cv.tex** — 当前版
- 名字居中 + navy 装饰线
- 章节标题小大写 + 细线
- 单栏，学术 editorial 风格

**cv-plasmati.tex** — Plasmati Graduate CV
- 优雅极简风，大号居中标题
- 双细线装饰、宽松间距
- 适合打印或在学术网站展示

**cv-friggeri.tex** — Friggeri CV
- 左侧深色侧边栏（navy 底 + 浅色文字）
- 联系方式、技能、方法在侧边栏
- 视觉冲击力强

### 需要 cls 文件

**cv-awesome.tex** — Awesome CV
- Overleaf 上最火的 CV 模板
- 左侧灰底侧边栏 + 右侧主内容
- 需要 `awesome-cv.cls`

**cv-altacv.tex** — AltaCV
- 顶部彩色标题栏
- 右 1/4 放标签式技能、语言
- 需要 `altacv.cls`

**cv-moderncv.tex** — moderncv (banking 风格)
- 经典 banking 风，顶部 nav 式标题栏
- `moderncv.cls` 在 Overleaf 和 TeX Live 中自带
- Overleaf：直接创建新项目粘贴内容即可编译

## Overleaf 编译方式

### 自包含的文件（cv.tex / cv-plasmati.tex / cv-friggeri.tex）
1. Overleaf → New Project → Blank Project
2. 粘贴 .tex 内容
3. 编译器选 **pdfLaTeX**
4. 编译

### cv-moderncv.tex
1. Overleaf → New Project → Blank Project
2. 粘贴内容
3. 编译器选 **pdfLaTeX**
4. moderncv.cls 是 TeX Live 自带，Overleaf 自动找到

### cv-awesome.tex
1. Overleaf → New Project → 搜 "Awesome CV" → 打开官方模板
2. 把 cv-awesome.tex 的内容覆盖到 main.tex
3. 或：从 https://github.com/posquit0/Awesome-CV 下载 awesome-cv.cls 放到项目根目录

### cv-altacv.tex
1. Overleaf → New Project → 搜 "AltaCV" → 打开官方模板
2. 把 cv-altacv.tex 的内容覆盖到 main.tex
3. 或：从 https://github.com/liantze/AltaCV 下载 altacv.cls 放到项目根目录

## 编译输出

所有模板编译成功后输出 PDF。把最终选中的 PDF 复制为 `linsheng-he-cv.pdf` 即可在网站上生效。
