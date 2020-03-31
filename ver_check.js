const semver = require('semver')
const gantreeLib = require('gantree-lib')
const package = require('./package')

const realLibVersion = gantreeLib.version
const requiredLibVersion = package.dependencies['gantree-lib']
const libVersionSatisfactory = semver.satisfies(
  realLibVersion,
  requiredLibVersion
)

const red = '\x1b[31m'
const yellow = '\x1b[33m'

if (libVersionSatisfactory !== true) {
  console.error(
    `gantree-lib version doesn't satisfy semvar pattern in dependencies (pattern: ${requiredLibVersion}, local version: ${realLibVersion})`
  )
  console.log(
    `${red}issue: gantree-lib version doesn't satisfy semvar pattern in dependencies (pattern: ${requiredLibVersion}, local version: ${realLibVersion})`
  )
  console.log(`${yellow}(lib)      real version: ${realLibVersion}`)
  console.log(`${yellow}(lib)  required version: ${requiredLibVersion}`)
  process.exit(1)
} else {
  console.log('Library version satisfied.')
  process.exit(0)
}
