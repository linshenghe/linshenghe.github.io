#!/usr/bin/env bash
# 快速检查脚本 — 每次 commit 前跑，几秒完成
# 只做机器验证，浏览器视觉检查在 push 前手动做
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

green()  { printf "  \033[0;32m✓\033[0m %s\n" "$1"; }
red()    { printf "  \033[0;31m✗\033[0m %s\n" "$1"; }
warn()   { printf "  \033[0;33m⚠\033[0m %s\n" "$1"; }

PASS=0
FAIL=0

ok()   { green "$1"; PASS=$((PASS + 1)); }
fail() { red "$1";   FAIL=$((FAIL + 1)); }

echo "=== i18n 检查 ==="

# 用 node 一次性完成：提取 translations key + HTML i18n 属性 + 交叉比对
I18N_RESULT=$(node -e '
const fs = require("fs");
const path = require("path");

const root = process.argv[1];

// 1. 解析 translations 对象
const jsSrc = fs.readFileSync(path.join(root, "assets/js/site.js"), "utf-8");
const m = jsSrc.match(/const translations\s*=\s*(\{[\s\S]*?\n\};)/);
if (!m) { console.error("Cannot find translations object"); process.exit(1); }
const tr = (new Function("return " + m[1].replace(/;\s*$/, "")))();
const enKeys = Object.keys(tr.en);
const zhKeys = Object.keys(tr.zh);

// 1a. en/zh 互相缺失
const missingZh = enKeys.filter(k => !(k in tr.zh));
const missingEn = zhKeys.filter(k => !(k in tr.en));
if (missingZh.length) console.log("MISSING_ZH:" + missingZh.join(","));
if (missingEn.length) console.log("MISSING_EN:" + missingEn.join(","));

// 2. 提取 HTML 中的 i18n key
const htmlSrc = fs.readFileSync(path.join(root, "index.html"), "utf-8");
const attrRe = /data-i18n(?:-html|-alt)?="([^"]*)"/g;
const htmlKeys = new Set();
let attrMatch;
while ((attrMatch = attrRe.exec(htmlSrc)) !== null) {
  if (attrMatch[1]) htmlKeys.add(attrMatch[1]);
}

// 2a. HTML 引用了但 translations 不存在的 key
const badRefs = [...htmlKeys].filter(k => !(k in tr.en));
if (badRefs.length) console.log("BAD_REFS:" + badRefs.join(","));

console.log("OK");
' "$ROOT" 2>&1)

# 解析结果（每个 grep 都加 || true，避免 pipefail + set -e 在 bash 3.2 的 bug）
HAS_ZH=$(echo "$I18N_RESULT" | { grep "^MISSING_ZH:" || true; })
HAS_EN=$(echo "$I18N_RESULT" | { grep "^MISSING_EN:" || true; })
HAS_BAD=$(echo "$I18N_RESULT" | { grep "^BAD_REFS:" || true; })

if [ -n "$HAS_ZH" ]; then
  fail "en 有但 zh 缺少: $(echo "$HAS_ZH" | sed 's/^MISSING_ZH://')"
else
  ok "en/zh key 互相完整"
fi

if [ -n "$HAS_EN" ]; then
  fail "zh 有但 en 缺少: $(echo "$HAS_EN" | sed 's/^MISSING_EN://')"
fi

if [ -n "$HAS_BAD" ]; then
  fail "HTML 引用但无翻译: $(echo "$HAS_BAD" | sed 's/^BAD_REFS://')"
else
  ok "HTML i18n 引用都有对应翻译"
fi

echo ""
echo "=== 文件引用检查 ==="

check_file() {
  if [ -f "$ROOT/$1" ]; then
    ok "$1"
  else
    fail "$1 — 文件不存在"
  fi
}

check_file "assets/css/styles.css"
check_file "assets/js/site.js"
check_file "assets/data/conferences.js"
check_file "assets/images/portrait.png"

# CV PDF — 还不存在就警告，不阻塞
HAS_CV_REF=$(grep 'assets/cv/linsheng-he-cv.pdf' "$ROOT/index.html" || true)
if [ -n "$HAS_CV_REF" ]; then
  if [ -f "$ROOT/assets/cv/linsheng-he-cv.pdf" ]; then
    ok "assets/cv/linsheng-he-cv.pdf"
  else
    warn "CV PDF 被 HTML 引用但文件还不存在（知道就好，不阻塞 commit）"
  fi
fi

echo ""
echo "=== Git 检查 ==="

cd "$ROOT"
GIT_DIFF_RESULT=$(git diff --check 2>&1 || true)
if [ -z "$GIT_DIFF_RESULT" ]; then
  ok "git diff --check"
else
  fail "git diff --check 发现空白问题:"
  echo "$GIT_DIFF_RESULT"
fi

echo ""
echo "---"
echo "结果: $PASS 通过, $FAIL 失败"

if [ "$FAIL" -gt 0 ]; then
  red "$FAIL 项未通过，修复后再 commit"
  exit 1
else
  green "全部通过 ✓"
fi
