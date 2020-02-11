# Bazel + Rust + WASM + Azure = ❤️

## How-to Bazel

1. Install `bazelisk` from https://github.com/bazelbuild/bazelisk
1. Build the app `bazelisk build //src:hello_world_wasm`
1. Run the app `VERBOSE_LOGS=1 bazelisk run //src:hello_world_wasm`
1. View the deps graph: `bazelisk query --noimplicit_deps 'deps(//src:hello_world_wasm)' --output graph | dot -Tpng > docs/graph.png`

![deps graph](https://github.com/manekinekko/bazel_rust_wasm_example/blob/master/docs/graph.png)

## Generate and deploy Azure Function

1. Install `hexa` from https://hexa.run
1. Generate a function project `hexa init --just=functions`
1. Add the WASM code
1. Deploy the function app `hexa deploy`

## Credits

This project uses a list of nouns and adjectives found on this project: https://github.com/fnichol/names/tree/master/data
