declare global {
  interface Window {
    $: any
  }
}

const $ = window.$; // Explicitly type the local constant

console.log('The KnackVibeCodingLibraryscript has been imported!')

export function hello() {
  console.log("Hello from the custom methods object!");
}

export function add(a: number, b: number) {
  return a + b;
}
