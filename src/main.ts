// Add type declaration for jQuery on window object
declare global {
  interface Window {
    jQuery: any;
  }
}

const $ = window.jQuery;

$(document).ready(function () {
  console.log("Here we are!");
});
