# Bazel + Rust + WASM

## How-to

1. Install Bazel from https://docs.bazel.build/versions/master/install.html
2. To build the sample `bazel build //src:hello_world_wasm`
2. To run the spec file `bazel test //src:hello_world_wasm_test`
2. To run the app `bazel run //src:hello_world_wasm`