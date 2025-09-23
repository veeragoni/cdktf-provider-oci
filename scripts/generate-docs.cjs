#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(process.cwd(), 'docs');
const MAX_LINES = 150000;

function run(command) {
  execSync(command, { stdio: 'inherit', shell: true });
}

function truncateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  if (lines.length > MAX_LINES) {
    const truncated = lines.slice(0, MAX_LINES).join('\n');
    fs.writeFileSync(filePath, truncated, 'utf8');
    console.log(`Truncated ${path.basename(filePath)} to ${MAX_LINES} lines.`);
  }
}

fs.rmSync(DOCS_DIR, { recursive: true, force: true });
fs.rmSync(path.join(process.cwd(), 'API.md'), { force: true });
fs.mkdirSync(DOCS_DIR, { recursive: true });

run('npx jsii-docgen --split-by-submodule -l typescript -l python');

const generatedFiles = fs
  .readdirSync(process.cwd())
  .filter(name => /\.(typescript|python)\.md$/i.test(name));

for (const file of generatedFiles) {
  const src = path.join(process.cwd(), file);
  const dest = path.join(DOCS_DIR, file);
  truncateFile(src);
  fs.renameSync(src, dest);
}

console.log(`Moved ${generatedFiles.length} documentation files into docs/ directory.`);
