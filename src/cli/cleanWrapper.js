const { Gantree } = require('gantree-lib')
const { gantreeTitle } = require('../lib/art')

const gantree = new Gantree()

async function cleanWrapper(args) {
  // TODO: FIX: needs refactor, shares a lot of code with sync wrapper
  const gantreeConfigPath = args.config || process.env.GANTREE_CONFIG_PATH
  const projectPathOverride = process.env.GANTREE_OVERRIDE_PROJECT_PATH

  if (gantreeConfigPath === undefined) {
    console.log(
      'Error: path to gantree config must be specified via argument or environment variable'
    )
    process.exit(1)
  }

  console.log(gantreeTitle)
  if (process.env.GANTREE_CONFIG_PATH !== undefined) {
    console.log('[!] Using override for Gantree config path\n')
  }
  if (process.env.GANTREE_OVERRIDE_PROJECT_PATH !== undefined) {
    console.log('[!] Using override for project path\n')
  }

  // read and validate config
  const gantreeConfigObj = await gantree.returnConfig(gantreeConfigPath)

  // inject any config overrides
  // - none at the moment

  await gantree.cleanAll(gantreeConfigObj, undefined, {
    projectPathOverride: projectPathOverride
  })
}

module.exports = {
  cleanWrapper
}
