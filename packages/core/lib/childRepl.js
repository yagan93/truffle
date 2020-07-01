const childRepl = {
  send: function(replObject) {
    let replPath;
    const path = require("path");
    if (typeof BUNDLE_REPL_FILENAME !== "undefined") {
      replPath = path.join(__dirname, BUNDLE_REPL_FILENAME);
    } else {
      replPath = path.join(__dirname, "main.js");
    }
    // const util = require("util");
    const replOptions = {
      working_directory: replObject.working_directory,
      contracts_directory: replObject.contracts_directory,
      contracts_build_directory: replObject.contracts_build_directory,
      migrations_directory: replObject.migrations_directory,
      network: replObject.network,
      network_id: replObject.network_id,
      provider: replObject.provider,
      resolver: replObject.resolver,
      build_directory: replObject.build_directory
    };
    const cp = require("child_process");
    const child = cp.fork(replPath);
    child.send(replOptions);
  }
};

module.exports = childRepl;
