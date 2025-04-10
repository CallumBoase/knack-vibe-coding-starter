// Add type declaration for jQuery on window object
declare global {
  interface Window {
    $: any;
  }
}

const $ = window.$;

$(document).ready(function () {
  console.log("Here we are!");
});
