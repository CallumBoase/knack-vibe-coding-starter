import 'jquery'; // Import for side effects to load jQuery types

// Add type declaration for jQuery on window object
declare global {
  interface Window {
    $: JQueryStatic; // Use the specific jQuery type
  }
}

const $: JQueryStatic = window.$; // Explicitly type the local constant

$(document).ready(function () {
  console.log("Here we are!");
});
