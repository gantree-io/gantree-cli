const { Gantree } = require('gantree-lib')

const gantree = new Gantree()

console.warn('Please note, ansibleSync is a temporary subcommand.')

async function ansibleSyncWrapper() {
  await gantree.ansibleSyncAll()
}

module.exports = {
  ansibleSyncWrapper
}
