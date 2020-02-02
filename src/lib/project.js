const ospath = require('ospath');
const path = require('path');


class Project {
  constructor(cfg) {
    this.name = cfg.project;
  }

  path() {
    return path.join(ospath.data(), 'substrate-secure-validator', 'build', this.name);
  }
}

module.exports = {
  Project
}
