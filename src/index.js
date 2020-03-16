#!/usr/bin/env node

const program = require('commander')
const packageMeta = require('./lib/packageMeta')
// subject to change
const { ansibleSyncWrapper } = require('./cli/ansibleSyncWrapper')
const { ansibleCleanWrapper } = require('./cli/ansibleCleanWrapper')
// for reference
// const { syncWrapper } = require('./cli/syncWrapper')
// const { cleanWrapper } = require('./cli/cleanWrapper')

function returnVersionString() {
  const name = packageMeta.getName()
  const version = packageMeta.getVersion()
  return `${name} ${version}`
}

program.version(returnVersionString())

program
  .command('sync')
  .description(
    'Synchronizes the infrastructure with ansible (temporary implementation).'
  )
  .action(ansibleSyncWrapper)

program
  .command('clean')
  .description(
    'Destorys the infrastructure with ansible (temporary implementation).'
  )
  .action(ansibleCleanWrapper)

// program
//   .command('legacySync')
//   .description('Synchronizes the infrastructure.')
//   .option('-c, --config [config] (required)', 'Path to config file.')
//   .action(syncWrapper)

// program
//   .command('legacyClean')
//   .description('Removes all the resources.')
//   .option('-c, --config [config] (required)', 'Path to config file.')
//   .action(cleanWrapper)

program.allowUnknownOption(false)

const parsed = program.parse(process.argv)
if (
  !parsed ||
  !(
    parsed.args &&
    parsed.args.length > 0 &&
    typeof (parsed.args[0] === 'object')
  )
) {
  program.outputHelp()
}
