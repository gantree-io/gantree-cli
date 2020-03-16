const { Gantree, packageDir } = require('gantree-lib')
const { gantreeTitle } = require('../lib/art')
const path = require('path')
const inventoryPath = path.join(packageDir, '/inventory')
const ansiblePath = path.join(packageDir, '/ansible')

const gantree = new Gantree()

async function ansibleCleanWrapper() {
  console.log(gantreeTitle)
  console.warn('[!] Please note, this subcommand is still in beta\n')
  await gantree.ansibleCleanAll(inventoryPath, ansiblePath)
}

module.exports = {
  ansibleCleanWrapper
}
