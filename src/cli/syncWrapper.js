const { Gantree, throwGantreeError } = require('../../../gantree-lib-nodejs')

const gantree = new Gantree()

async function syncWrapper(cmd) {
  if (cmd.config === undefined) {
    throwGantreeError(
      'MISSING_ARGUMENTS',
      Error('Please specify the path to your gantree config')
    )
  }
  const my_config = await gantree.returnConfig(cmd.config)
  await gantree.syncAll(my_config)
}

module.exports = {
  syncWrapper
}
