#!/usr/bin/env bash
# Quick checks before commit. Browser checks are run separately for visible UI changes.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

green()  { printf "  \033[0;32m✓\033[0m %s\n" "$1"; }
red()    { printf "  \033[0;31m✗\033[0m %s\n" "$1"; }
warn()   { printf "  \033[0;33m⚠\033[0m %s\n" "$1"; }

PASS=0
FAIL=0

ok()   { green "$1"; PASS=$((PASS + 1)); }
fail() { red "$1";   FAIL=$((FAIL + 1)); }

echo "=== Copy checks ==="

# Extract the single English copy object and verify HTML references.
I18N_RESULT=$(node -e '
const fs = require("fs");
const path = require("path");

const root = process.argv[1];

// 1. Parse copy object
const jsSrc = fs.readFileSync(path.join(root, "assets/js/site.js"), "utf-8");
const m = jsSrc.match(/const copy\s*=\s*(\{[\s\S]*?\n\};)/);
if (!m) { console.error("Cannot find copy object"); process.exit(1); }
const copy = (new Function("return " + m[1].replace(/;\s*$/, "")))();

// 2. Extract HTML copy references
const htmlSrc = fs.readFileSync(path.join(root, "index.html"), "utf-8");
const attrRe = /data-i18n(?:-html|-alt)?="([^"]*)"/g;
const htmlKeys = new Set();
let attrMatch;
while ((attrMatch = attrRe.exec(htmlSrc)) !== null) {
  if (attrMatch[1]) htmlKeys.add(attrMatch[1]);
}

// 2a. HTML references missing from copy object
const badRefs = [...htmlKeys].filter(k => !(k in copy));
if (badRefs.length) console.log("BAD_REFS:" + badRefs.join(","));

console.log("OK");
' "$ROOT" 2>&1)

HAS_BAD=$(echo "$I18N_RESULT" | { grep "^BAD_REFS:" || true; })

if [ -n "$HAS_BAD" ]; then
  fail "HTML references missing copy keys: $(echo "$HAS_BAD" | sed 's/^BAD_REFS://')"
else
  ok "HTML copy references exist"
fi

echo ""
echo "=== File reference checks ==="

check_file() {
  if [ -f "$ROOT/$1" ]; then
    ok "$1"
  else
    fail "$1 is missing"
  fi
}

check_file "assets/css/styles.css"
check_file "assets/js/site.js"
check_file "assets/data/conferences.js"
check_file "assets/images/portrait.png"

# CV PDF reference
HAS_CV_REF=$(grep 'assets/cv/linsheng-he-cv.pdf' "$ROOT/index.html" || true)
if [ -n "$HAS_CV_REF" ]; then
  if [ -f "$ROOT/assets/cv/linsheng-he-cv.pdf" ]; then
    ok "assets/cv/linsheng-he-cv.pdf"
  else
    warn "CV PDF is referenced but missing"
  fi
fi

echo ""
echo "=== Git checks ==="

cd "$ROOT"
GIT_DIFF_RESULT=$(git diff --check 2>&1 || true)
if [ -z "$GIT_DIFF_RESULT" ]; then
  ok "git diff --check"
else
  fail "git diff --check found whitespace issues:"
  echo "$GIT_DIFF_RESULT"
fi

echo ""
echo "---"
echo "Result: $PASS passed, $FAIL failed"

if [ "$FAIL" -gt 0 ]; then
  red "$FAIL checks failed"
  exit 1
else
  green "All checks passed"
fi
