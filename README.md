# wequire

[![Current Version](https://img.shields.io/npm/v/wequire.svg)](https://www.npmjs.org/package/wequire)
[![Build Status via Travis CI](https://travis-ci.org/continuationlabs/wequire.svg?branch=master)](https://travis-ci.org/continuationlabs/wequire)
![Dependencies](http://img.shields.io/david/continuationlabs/wequire.svg)
[![belly-button-style](https://img.shields.io/badge/eslint-bellybutton-4B32C3.svg)](https://github.com/continuationlabs/belly-button)

Synchronously load WebAssembly (`.wasm`) files.

## Basic Usage

Pass an absolute filename to the `wequire()` function. The result is the `exports` property of a [`WebAssembly.Instance`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance).

```
const Wequire = require('wequire');
const Path = require('path');
const mod = Wequire(Path.join(__dirname, 'test.wasm'));

console.log(mod);
```

## Methods

A single function is exported.

### `wequire(request[, imports])`

  - Arguments
    - `request` (string) - The absolute path to a `.wasm` file.
    - `imports` (object) - An optional argument passed as the `importObject` argument to the `WebAssembly.Instance()` constructor.
  - Returns
    - object - The `exports` property of a `WebAssembly.Instance`.
