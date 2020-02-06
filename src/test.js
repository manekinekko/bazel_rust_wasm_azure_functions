
const fs = require('fs');
const path = require('path');

describe('Calling WebAssembly code', () => {
  it('Should run WebAssembly code', async () => {
    const wasmFile = path.join(__dirname, 'hello_world_bindgen_bg.wasm');
    const buf = fs.readFileSync(wasmFile);
    
    const module =  {};
    const env = {
      memoryBase: 0,
      tableBase: 0,
      memory: new WebAssembly.Memory({
        initial: 256
      }),
      table: new WebAssembly.Table({
        initial: 0,
        element: 'anyfunc'
      })
    };
    const result = await WebAssembly.instantiate(buf, {module, env});
    expect(result.greet).toBe('Function');
  })
});

