process.env.VERBOSE_LOGS="1";

const fs = require('fs');
const path = require('path');

//. hello_world_bindgen.js is generated under /bazel-out/darwin-fastbuild/bin/src/
const jsFile = path.join(path.resolve('src/hello_world_bindgen.js'));
require(jsFile);


// const wasmFile = path.join(__dirname, 'hello_world_bindgen_bg.wasm');
// const buf = fs.readFileSync(wasmFile);
// const wasmModule = new WebAssembly.Module(buf);
// const result = new WebAssembly.Instance(wasmModule, []);
// console.log(result.greet('asdd'))
