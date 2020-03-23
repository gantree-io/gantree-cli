const { Gantree } = require('gantree-lib')
const { gantreeTitle } = require('../lib/art')

const gantree = new Gantree()

async function syncWrapper(args) {
  // TODO: FIX: needs refactor, shares a lot of code with clean wrapper
  const gantreeConfigPath = args.config || process.env.GANTREE_CONFIG_PATH
  const projectPathOverride = process.env.GANTREE_OVERRIDE_PROJECT_PATH

  if (gantreeConfigPath === undefined) {
    console.log(
      'Error: path to gantree config must be specified via argument or environment variable'
    )
    process.exit(1)
  }

  console.log(gantreeTitle)
  console.warn('[!] Please note, this subcommand is still in beta\n')
  if (process.env.GANTREE_CONFIG_PATH !== undefined) {
    console.warn('[!] Using override for Gantree config path\n')
  }
  if (process.env.GANTREE_OVERRIDE_PROJECT_PATH !== undefined) {
    console.warn('[!] Using override for project path\n')
  }

  // read and validate config
  const gantreeConfigObj = await gantree.returnConfig(gantreeConfigPath)

  // inject any config overrides
  // - none at the moment

  await gantree.syncAll(gantreeConfigObj, undefined, {
    projectPathOverride: projectPathOverride
  })
}

module.exports = {
  syncWrapper
}
