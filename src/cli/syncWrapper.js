const { Gantree } = require('gantree-lib')
const { gantreeTitle } = require('../lib/art')

const gantree = new Gantree()

async function syncWrapper() {
  console.log(gantreeTitle)
  console.warn('[!] Please note, this subcommand is still in beta\n')
  const gantreeConfigPath = process.env.GANTREE_CONFIG_PATH
  const gantreeConfigObj = await gantree.returnConfig(gantreeConfigPath)
  await gantree.syncAll(gantreeConfigObj)
}

module.exports = {
  syncWrapper
}
