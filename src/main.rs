use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(thing: &str) -> String {
  return thing.to_string();
}

pub fn main() {
    println!("{} {}", greet("Hello,"), greet("WASM"));
}