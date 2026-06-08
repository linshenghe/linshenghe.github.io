# CV 模板说明

六个 LaTeX CV 模板，内容相同，视觉风格不同。

## 文件清单

| 文件 | 模板 | 依赖 | 编译 |
|------|------|------|------|
| `cv.tex` | 优化 article | 无 | 直接上传，pdfLaTeX |
| `cv-plasmati.tex` | Plasmati Graduate CV | 无 | 直接上传，pdfLaTeX |
| `cv-friggeri.tex` | Friggeri CV | 无（自包含） | 直接上传，pdfLaTeX |
| `cv-awesome.tex` | Awesome CV | `cls/awesome-cv.cls` | 上传 .tex + cls，**XeLaTeX** |
| `cv-altacv.tex` | AltaCV | `cls/altacv.cls` | 上传 .tex + cls，**XeLaTeX** |
| `cv-moderncv.tex` | moderncv (banking) | 无（Overleaf 内置） | 直接上传，pdfLaTeX |

## 各模板特点

### cv.tex — 优化 article
- 名字居中 + navy 装饰线
- 章节标题小大写 + 细线分隔
- 单栏，学术 editorial 风格

### cv-plasmati.tex — Plasmati Graduate CV
- 优雅极简风，大号居中标题
- 双细线装饰、宽松间距
- 论文信息排列干净，适合打印

### cv-friggeri.tex — Friggeri CV
- 左侧深 navy 侧边栏 + 右侧白底主内容
- 联系方式、技能、方法集中在侧边栏
- 视觉对比强，用 paracol + tikz 实现
- 自包含，无需额外 cls 文件

### cv-awesome.tex — Awesome CV
- Overleaf 上最火的 CV 模板
- 左侧灰底侧边栏 + 右侧主内容
- cls 文件已放在 `cls/awesome-cv.cls`

### cv-altacv.tex — AltaCV
- 顶部彩色标题栏
- 右 1/4 标签式技能、语言
- cls 文件已放在 `cls/altacv.cls`

### cv-moderncv.tex — moderncv (banking)
- banking 风格，顶部 nav 式标题栏
- 经典、保守、被广泛使用
- `moderncv.cls` 在 Overleaf 和 TeX Live 中自带，无需额外文件

## Overleaf 编译方式

### 自包含文件（cv.tex / cv-plasmati.tex / cv-friggeri.tex / cv-moderncv.tex）
1. Overleaf → New Project → Blank Project
2. 粘贴 .tex 内容
3. 编译器选 **pdfLaTeX**
4. 编译

### cv-awesome.tex（需要 cls 文件）
1. Overleaf → New Project → Blank Project
2. 上传 `cv-awesome.tex` 作为 `main.tex`
3. 上传 `cls/awesome-cv.cls` 到项目根目录
4. 编译器选 **XeLaTeX**（需要 Source Sans 3 和 Roboto 字体，Overleaf 自带）
5. 编译

### cv-altacv.tex（需要 cls 文件）
1. Overleaf → New Project → Blank Project
2. 上传 `cv-altacv.tex` 作为 `main.tex`
3. 上传 `cls/altacv.cls` 到项目根目录
4. 编译器选 **XeLaTeX**
5. 编译

## 编译输出

所有模板编译成功后输出 PDF。把最终选中的 PDF 复制为 `linsheng-he-cv.pdf` 即可在网站上生效。

## cls 文件来源

| 文件 | 来源 |
|------|------|
| `cls/awesome-cv.cls` | [posquit0/Awesome-CV](https://github.com/posquit0/Awesome-CV) |
| `cls/altacv.cls` | [liantze/AltaCV](https://github.com/liantze/AltaCV) |
| `moderncv.cls` | TeX Live / Overleaf 内置 |
