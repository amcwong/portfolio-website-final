const fs = require("fs");
const path = require("path");

const dist = path.join(
  __dirname,
  "..",
  "node_modules",
  "react-type-animation",
  "dist"
);

function strip(file) {
  const source = fs.readFileSync(file, "utf8");
  const next = source.replace(/\r?\n?\/\/# sourceMappingURL=\S+\s*$/, "");
  if (next !== source) {
    fs.writeFileSync(file, next);
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".js")) strip(full);
  }
}

walk(dist);
