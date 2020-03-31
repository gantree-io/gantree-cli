const { Gantree } = require('gantree-lib')
const { gantreeTitle } = require('../lib/art')

const gantree = new Gantree()

async function syncWrapper(args) {
  // TODO: FIX: needs refactor, shares a lot of code with clean wrapper
  const gantreeConfigPath = args.config || process.env.GANTREE_CONFIG_PATH
  const strict = args.strict || Boolean(process.env.GANTREE_STRICT_OPERATIONS)
  const projectPathOverride =
    args.project || process.env.GANTREE_OVERRIDE_PROJECT_PATH
  const inventoryPathOverride =
    args.inventory || process.env.GANTREE_OVERRIDE_INVENTORY_PATH

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
  if (strict === true) {
    console.log(
      '[!] Using strict mode, some operations will exit if validation fails\n'
    )
  }
  if (projectPathOverride !== undefined) {
    console.log('[!] Using override for project path\n')
  }
  if (inventoryPathOverride !== undefined) {
    console.log('[!] Using override for inventory path\n')
  }

  // read and validate config
  const gantreeConfigObj = await gantree.returnConfig(gantreeConfigPath)

  await gantree.syncAll(gantreeConfigObj, undefined, {
    projectPathOverride: projectPathOverride,
    strict: strict,
    inventoryPathOverride: inventoryPathOverride
  })
}

module.exports = {
  syncWrapper
}
