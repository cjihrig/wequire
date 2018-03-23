'use strict';
/* global WebAssembly */
const Fs = require('fs');

function wequire (request, imports) {
  const wasm = Fs.readFileSync(request);
  const mod = new WebAssembly.Module(wasm);
  const instance = new WebAssembly.Instance(mod, imports);

  return instance.exports;
}

module.exports = wequire;
