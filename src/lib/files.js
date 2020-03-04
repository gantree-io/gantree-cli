const fs = require('fs-extra')

function readJSON(filePath) {
  const rawContent = fs.readFileSync(filePath)
  return JSON.parse(rawContent)
}

module.exports = {
  readJSON
}
