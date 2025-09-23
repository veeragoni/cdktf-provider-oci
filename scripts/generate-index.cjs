#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');
const INDEX_FILE = path.join(SRC_DIR, 'index.ts');
const VERSION_FILE = path.join(SRC_DIR, 'version.json');

if (!fs.existsSync(SRC_DIR)) {
  console.error('src directory not found, skipping index generation');
  process.exit(0);
}

const entries = fs
  .readdirSync(SRC_DIR, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)
  .sort((a, b) => a.localeCompare(b));

const header = [
  '// Auto-generated barrel file for OCI provider bindings.',
  '// Re-exports all generated modules so consumers can import from the package root.',
  '// Do not edit manually; regenerate if provider bindings change.',
  '',
];

const metadata = [
  "import versionMapJson = require('./version.json');",
  '',
  "export const providerName = 'registry.terraform.io/oracle/oci';",
  'export const providerVersionMap: Record<string, string> = versionMapJson;',
  'export const providerVersion = providerVersionMap[providerName];',
  '',
];

const barrelExports = entries.map(name => `export * from './${name}';`);

const content = [...header, ...metadata, ...barrelExports, ''].join('\n');

if (!fs.existsSync(VERSION_FILE)) {
  console.warn('Warning: src/version.json not found. Generated index will import a missing file until fetch runs.');
}

fs.writeFileSync(INDEX_FILE, content, 'utf8');
