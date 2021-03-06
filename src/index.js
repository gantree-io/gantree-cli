#!/usr/bin/env node

const program = require('commander')
const packageMeta = require('./lib/packageMeta')
const { syncWrapper } = require('./cli/syncWrapper')
const { cleanWrapper } = require('./cli/cleanWrapper')
const gantreeLib = require('gantree-lib')

function returnVersionString() {
  const name = packageMeta.getName()
  const version = packageMeta.getVersion()
  return `${name} ${version}\n⮡ ${gantreeLib.name} ${gantreeLib.version}`
}

program.version(returnVersionString())

program
  .command('sync')
  .description('Create/update infrastructure based on Gantree configuration.')
  .option('-c, --config [config] (required)', 'Path to config file.')
  .option(
    '-s, --strict',
    'Fail instead of printing warnings on some operations (e.g. hash validation)'
  )
  .option('-p, --project [project]', 'Force project path (advanced usage)')
  .option(
    '-i, --inventory [inventory]',
    'Force inventory path (advanced usage)'
  )
  .action(syncWrapper)

program
  .command('clean')
  .description(
    'Destroy existing infrastructure based on Gantree configuration.'
  )
  .option('-c, --config [config] (required)', 'Path to config file.')
  .option(
    '-s, --strict',
    'Fail instead of printing warnings on some operations (e.g. hash validation)'
  )
  .option('-p, --project [project]', 'Force project path (advanced usage)')
  .option(
    '-i, --inventory [inventory]',
    'Force inventory path (advanced usage)'
  )
  .action(cleanWrapper)

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
