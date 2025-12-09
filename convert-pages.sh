#!/bin/bash
# This script helps identify what pages need conversion
echo "Pages in Next.js app directory:"
find app -name "page.js" -not -path "*/layout.js" | sort
echo ""
echo "Pages created in React src/pages:"
ls -1 src/pages/ 2>/dev/null || echo "No pages directory yet"
