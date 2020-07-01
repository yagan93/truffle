require("source-map-support/register");
const ReplManager = require("./repl.js");

const PROCESS_TIMEOUT = 20000; // ms

console.debug("starting truffle command repl process");

const done = new Promise(accept => {
  setTimeout(accept, PROCESS_TIMEOUT);
  console.debug("timeout set");
});

process.on("message", async replOptions => {
  console.debug("sending repl options %o");
  const repl = replOptions.repl || new ReplManager(replOptions);
  console.debug("sent replOptions %o");
  return repl;
});

done.then(() => {
  console.debug("timeout reached");
  process.exit(0);
});
