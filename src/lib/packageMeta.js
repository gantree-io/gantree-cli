const path = require('path')
const files = require('./files')

function getVersion() {
  const targetPath = path.join(
    path.dirname(module.filename),
    '..',
    '..',
    'package.json'
  )
  const pkg = files.readJSON(targetPath)

  return pkg.version
}

function getName() {
  const targetPath = path.join(
    path.dirname(module.filename),
    '..',
    '..',
    'package.json'
  )
  const pkg = files.readJSON(targetPath)

  return pkg.name
}

module.exports = {
  getVersion,
  getName
}
