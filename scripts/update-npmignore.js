#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const npmignorePath = path.join(__dirname, '..', '.npmignore');

// Patterns to add to npmignore
const additionalPatterns = [
  '/generated/',
  '/lib/generated/',
  '/scripts/',
  'GITHUB_SECRETS_SETUP.md',
  'QUICK_SETUP.md',
  'NPM_PACKAGE_FIX.md',
  'CONTRIBUTING.md',
  'README.npm.md',
  'tsconfig.build.json',
  'provider-config.json',
  'cdktf.json',
  'main.ts',
  'setup.js',
  'help',
  '*.sh',
  '.history/',
];

// Read current content
let content = fs.readFileSync(npmignorePath, 'utf8');

// Check if patterns already exist
const hasPatterns = additionalPatterns.some(pattern => content.includes(pattern));

if (!hasPatterns) {
  // Add patterns to the end
  content += '\n# Additional patterns for cdktf-provider-oci\n';
  content += additionalPatterns.join('\n');
  content += '\n';

  // Write back
  fs.writeFileSync(npmignorePath, content);
  console.log('Updated .npmignore with additional patterns');
} else {
  console.log('.npmignore already contains the patterns');
}