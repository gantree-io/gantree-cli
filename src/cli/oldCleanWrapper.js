const { Gantree, throwGantreeError } = require('gantree-lib')

const gantree = new Gantree()

async function cleanWrapper(cmd) {
  if (cmd.config === undefined) {
    throwGantreeError(
      'MISSING_ARGUMENTS',
      Error('Please specify the path to your gantree config')
    )
  }
  const my_config = await gantree.returnConfig(cmd.config)
  await gantree.cleanPlatform(my_config)
}

module.exports = {
  cleanWrapper
}
