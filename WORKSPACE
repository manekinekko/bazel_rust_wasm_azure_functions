workspace(name = "rust_wasm_bazel_hello_world", managed_directories = {"@npm": ["node_modules"]},)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_rust",
    sha256 = "c80c470ddbbed036f376d56eec4fe0585d7354cccc1f9c8d761498a07997c020",
    strip_prefix = "rules_rust-e0dcca40f303e76c4347b9cf541d757edb029441",
    urls = [
        "https://github.com/bazelbuild/rules_rust/archive/e0dcca40f303e76c4347b9cf541d757edb029441.tar.gz",
    ],
)
# local_repository(
#     name = "io_bazel_rules_rust",
#     path = "/Users/wassimchegham/oss/rules_rust"
# )

http_archive(
    name = "bazel_skylib",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.0.2/bazel-skylib-1.0.2.tar.gz",
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.2/bazel-skylib-1.0.2.tar.gz",
    ],
    sha256 = "97e70364e9249702246c0e9444bccdc4b847bed1eb03c5a3ece4f83dfe6abc44",
)
load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")
bazel_skylib_workspace()

load("@io_bazel_rules_rust//rust:repositories.bzl", "rust_repositories")
rust_repositories()

load("@io_bazel_rules_rust//wasm_bindgen:repositories.bzl", "rust_wasm_bindgen_repositories")
rust_wasm_bindgen_repositories()

load("@io_bazel_rules_rust//:workspace.bzl", "bazel_version")
bazel_version(name = "bazel_version")

# Add nodejs_rule for WASM support

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "9473b207f1c5a61b603442cbfeeea8aaf2aa62870673fce2a1c52087f6ff4dc9",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/1.2.4/rules_nodejs-1.2.4.tar.gz"],
)

# Install external npm dependencies
load("@build_bazel_rules_nodejs//:index.bzl", "check_bazel_version", "npm_install")

check_bazel_version(
    minimum_bazel_version = "0.27.0",
)

npm_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json"
)

# Install all bazel dependencies of our npm packages
load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()