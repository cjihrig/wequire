'use strict';
/* global WebAssembly */
const Path = require('path');
const Code = require('code');
const Lab = require('lab');
const Wequire = require('../lib');

// Test shortcuts
const lab = exports.lab = Lab.script();
const { describe, it } = lab;
const { expect } = Code;


describe('Wequire', () => {
  it('requires a wasm file', () => {
    const mod = Wequire(Path.join(__dirname, 'fixtures', 'test.wasm'));

    expect(mod.get_offset).to.be.a.function();
    expect(mod.foo).to.be.a.function();
    expect(mod.memory).to.be.an.instanceOf(WebAssembly.Memory);
  });
});
