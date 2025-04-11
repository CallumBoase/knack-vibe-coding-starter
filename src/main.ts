declare global {
  interface Window {
    $: any
  }
}

const $ = window.$; // Explicitly type the local constant

$(document).ready(function () {
  console.log("The KnackVibeCodingLibraryscript is running!");
});

import { home } from './ui/home/index';

$(document).on('knack-view-render.view_1', function(event, view, records){
  $('#home').html(home());
})
