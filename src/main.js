process.env.VERBOSE_LOGS="1";

const fs = require('fs');
const path = require('path');
const jsFile = path.join(__dirname, 'hello_world_bindgen.js');
require(jsFile);


// const wasmFile = path.join(__dirname, 'hello_world_bindgen_bg.wasm');
// const buf = fs.readFileSync(wasmFile);
// const wasmModule = new WebAssembly.Module(buf);
// const result = new WebAssembly.Instance(wasmModule, []);
// console.log(result.greet('asdd'))
