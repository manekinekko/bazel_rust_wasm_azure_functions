package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_rust//rust:rust.bzl", "rust_binary")
load("@io_bazel_rules_rust//wasm_bindgen:wasm_bindgen.bzl", "rust_wasm_bindgen")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")

genrule(
    name = "hello_world_wasm_bin",
    srcs = [
        ":hello_world_bindgen_bg.wasm"
    ],
    outs = ["hello_world_bindgen_bg"],
    cmd = "mv $(SRCS) $@",
)

rust_binary(
    name = "hello_world_rust_wasm",
    srcs = ["lib.rs"],
    edition = "2018",
    rustc_flags = [
        "--crate-type=cdylib",
        "--codegen=opt-level=2",
        "--codegen=lto=thin",
        "--codegen=opt-level=z",
        "--codegen=panic=abort",
    ],
    deps = [
        "@io_bazel_rules_rust//wasm_bindgen/raze:wasm_bindgen",
    ],
)

# rust_wasm(
#     name = "lib",
#     srcs = ["//src:lib.rs"],
# )

rust_wasm_bindgen(
    name = "hello_world_bindgen",
    wasm_file = ":hello_world_rust_wasm",
    bindgen_flags = ["--target=nodejs", "--keep-debug"]
)

nodejs_binary(
    name = "hello_world_wasm",
    args = [
        "--experimental-wasm-modules",
        "--experimental-modules"
    ],
    data = [
        ":hello_world_wasm_bin",
        ":hello_world_bindgen",
    ],
    entry_point = ":main.js",
)