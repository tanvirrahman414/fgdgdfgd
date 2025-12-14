#!/usr/bin/env bash
set -euo pipefail
OUT="app-deploy.zip"
ROOT="."

echo "Creating deploy zip: $OUT from $ROOT"

# Exclude node_modules, .git, dist, build
zip -r "$OUT" "$ROOT" -x "*/node_modules/*" "*/.git/*" "*/dist/*" "*/build/*"

echo "Created $OUT"
echo "Tip: upload $OUT into a new folder outside public_html (e.g. /home/youruser/my-app), extract, then run 'npm ci' and 'npm run build' on the server."