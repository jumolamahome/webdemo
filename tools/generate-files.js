const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, "files.json");

const ignoreNames = new Set([
  ".git",
  ".github",
  "node_modules",
  "files.json"
]);

function walk(dir, parent = "") {
  const result = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (ignoreNames.has(entry.name)) continue;

    const absPath = path.join(dir, entry.name);
    const relPath = path.relative(ROOT, absPath).split(path.sep).join("/");

    if (entry.isDirectory()) {
      result.push({
        name: entry.name,
        path: relPath,
        parent,
        type: "directory",
        size: 0
      });

      result.push(...walk(absPath, relPath));
    } else {
      const stat = fs.statSync(absPath);

      result.push({
        name: entry.name,
        path: relPath,
        parent,
        type: "file",
        size: stat.size
      });
    }
  }

  return result;
}

const files = walk(ROOT);

fs.writeFileSync(
  OUTPUT,
  JSON.stringify(files, null, 2),
  "utf8"
);

console.log(`Generated files.json with ${files.length} items.`);
