#!/usr/bin/env bash
# Render cv.html to the PDF the site serves.
#
# The CV source lives here in the repo on purpose: the PDF in public/ is a
# build output, and without this file there is no way to amend it.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
out="$here/../public/Sidra_Alsayed_CV.pdf"

chrome="$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || true)"
if [ -z "$chrome" ]; then
  echo "No Chrome/Chromium found — needed to render the PDF." >&2
  exit 1
fi

"$chrome" \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --print-to-pdf="$out" \
  --virtual-time-budget=10000 \
  "file://$here/cv.html" 2>/dev/null

echo "Wrote $out"
