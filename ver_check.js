const semver = require('semver')
const gantreeLib = require('gantree-lib')
const package = require('./package')

const realLibVersion = gantreeLib.version
const requiredLibVersion = package.dependencies['gantree-lib']
const libVersionSatisfactory = semver.satisfies(
  realLibVersion,
  requiredLibVersion
)

if (libVersionSatisfactory !== true) {
  console.log(`(lib)      real version: ${realLibVersion}`)
  console.log(`(lib)  required version: ${requiredLibVersion}`)
  console.log(`(lib) semvar satisfied?: ${libVersionSatisfactory}`)
  console.log('Library version not satisfied!')
  console.error('Library version not satisfied!')
  process.exit(1)
} else {
  console.log('Library version satisfied.')
  process.exit(0)
}
