const path = require('path')
const files = require('./files')

function show() {
  const targetPath = path.join(
    path.dirname(module.filename),
    '..',
    '..',
    'package.json'
  )
  const pkg = files.readJSON(targetPath)

  return pkg.version
}

module.exports = {
  show
}
