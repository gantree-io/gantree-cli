const { Gantree } = require('gantree-lib')
const { gantreeTitle } = require('../lib/art')

const gantree = new Gantree()

async function syncWrapper(args) {
  const gantreeConfigPath = args.config || process.env.GANTREE_CONFIG_PATH
  const namespaceOverride = process.env.GANTREE_OVERRIDE_NAMESPACE

  if (gantreeConfigPath === undefined) {
    console.log(
      'Error: path to gantree config must be specified via argument or environment variable'
    )
    process.exit(1)
  }

  console.log(gantreeTitle)
  console.warn('[!] Please note, this subcommand is still in beta\n')

  // read and validate config
  const gantreeConfigObj = await gantree.returnConfig(gantreeConfigPath)

  // inject any overrides
  if (namespaceOverride !== undefined) {
    gantreeConfigObj.metadata.project = namespaceOverride
  }

  await gantree.syncAll(gantreeConfigObj)
}

module.exports = {
  syncWrapper
}
