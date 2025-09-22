#!/bin/bash
# Fix Jest configuration conflict
# Remove jest configuration from package.json if it exists
if [ -f "package.json" ]; then
  jq 'del(.jest)' package.json > package.json.tmp && mv package.json.tmp package.json
  echo "Removed jest configuration from package.json"
fi