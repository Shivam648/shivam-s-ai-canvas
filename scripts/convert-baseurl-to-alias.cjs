#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const root = path.resolve(__dirname, "..");
const patterns = ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"];

let changed = 0;
let scanned = 0;

patterns.forEach((pattern) => {
  glob.sync(pattern, { nodir: true }).forEach((file) => {
    scanned++;
    const abs = path.join(root, file);
    let text = fs.readFileSync(abs, "utf8");
    const before = text;
    // replace import from "src/..." or 'src/...'
    text = text.replace(/(['"])src\//g, "$1@/");
    // replace require("src/...")
    text = text.replace(/require\((['"])src\//g, "require($1@/");
    if (text !== before) {
      fs.writeFileSync(abs, text, "utf8");
      changed++;
      console.log("Updated", file);
    }
  });
});

console.log(`Scanned ${scanned} files, updated ${changed} files.`);
if (changed > 0) {
  console.log("Please review changes and run your tests/build.");
}
