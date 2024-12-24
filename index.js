const fs = require("fs");
for (let i = 1; i <= 30; i++) {
  fs.mkdirSync(`Day${i}`);
  fs.writeFileSync(`Day${i}/index.js`, "");
  fs.writeFileSync(`Day${i}/README.md`, "");
}
