""""""
def rust_wasm(name, srcs, **kwargs):
  native.genrule(
    name = name,
    srcs = srcs,
    outs = [name + ".wasm"],
    cmd = "rustc --verbose -L=./ --target wasm32-unknown-unknown -O --crate-type=cdylib -C lto=thin -C opt-level=z -C panic=abort $(SRCS) -o $@",
    **kwargs
  )