package(default_visibility = ["//visibility:public"])
load("@io_bazel_rules_rust//rust:rust.bzl", "rust_binary")
load("@io_bazel_rules_rust//wasm_bindgen:wasm_bindgen.bzl", "rust_wasm_bindgen")
load("@npm_bazel_jasmine//:index.bzl", "jasmine_node_test")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")

rust_binary(
    name = "hello_world_rust",
    srcs = ["main.rs"],
    edition = "2018",
    deps = [
        "@io_bazel_rules_rust//wasm_bindgen/raze:wasm_bindgen"
    ]   
)

rust_wasm_bindgen(
    name = "hello_world_bindgen",
    wasm_file = ":hello_world_rust",
    bindgen_flags = ["--nodejs"]
)

jasmine_node_test(
    name = "hello_world_wasm_test",
    srcs = [
        "test.js",
    ],
    data = [
        ":hello_world_bindgen",
        "@npm//jasmine",
    ],
)

nodejs_binary(
    name = "hello_world_wasm",
    entry_point = ":main.js",
    data = [
        ":hello_world_bindgen.js",
        ":hello_world_bindgen_bg.wasm"
    ],
)