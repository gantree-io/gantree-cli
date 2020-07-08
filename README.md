# Gantree CLI

A command-line interface for gantree-lib written in NodeJS.

## Important Note

Please see [gantree-lib](https://github.com/gantree-io/gantree-lib-nodejs) for information regarding:

- Library requirements
- How to write Gantree configurations
- Misc. important information

## Installation

### External Requirements

**Important:** Please ensure you have installed all external requirements for [gantree-lib](https://github.com/gantree-io/gantree-lib-nodejs) first.

### Installing via NPM

To install the latest **stable** release, use:

```bash
npm install gantree-cli@stable -g
```

\- **_OR_** -

To instead install the latest **beta** release, use:

```bash
npm install gantree-cli@beta -g
```

\- **_OR_** -

To install **unstable** versions in active development, see [gantree-core](https://github.com/gantree-io/gantree-core).

- Please note these versions may be incredibly buggy, potentially destructive, or even non-functional.
- Due to rapid iteration, support is not yet offered.

## Usage

### Creating a Config File

`gantree-cli` requires a config file in order to function. [You can find some examples of config files in this document](https://github.com/gantree-io/gantree-lib-nodejs/blob/dev/docs/gantree_config/samples.md#permutations). The best way to leverage these examples is to copy the one which is closest to your use case and modify it to your needs.

Config files (at a minimum) tell Gantree which binary to execute, how many nodes to create, and which providers to create those nodes on.

### Synchronisation (Deployment)

To synchronise your configuration with your infrastructure (create/update/etc.), run the following:

```bash
gantree-cli sync -c [gantree_config_file_path]
```

See `gantree-cli sync --help` for all supported flags

### Cleaning Up (Teardown)

To remove all infrastructure defined in your configuration, run the following:

```bash
gantree-cli clean -c [gantree_config_file_path]
```

See `gantree-cli clean --help` for all supported flags

<!-- TODO: Add information on CLI supported environment variables -->
