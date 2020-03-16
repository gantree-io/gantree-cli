const { Gantree, packageDir } = require('gantree-lib')
const path = require('path')
const inventoryPath = path.join(packageDir, '/inventory')
const ansiblePath = path.join(packageDir, '/ansible')

const gantree = new Gantree()

async function ansibleSyncWrapper() {
  console.warn('Please note, ansibleSync is a temporary subcommand.')
  await gantree.ansibleSyncAll(inventoryPath, ansiblePath)
}

module.exports = {
  ansibleSyncWrapper
}
