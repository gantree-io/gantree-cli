const { Gantree } = require('gantree-lib')
const { gantreeTitle } = require('../lib/art')

const gantree = new Gantree()

async function ansibleSyncWrapper() {
  console.log(gantreeTitle)
  console.warn('[!] Please note, this subcommand is still in beta\n')
  await gantree.ansibleSyncAll()
}

module.exports = {
  ansibleSyncWrapper
}
