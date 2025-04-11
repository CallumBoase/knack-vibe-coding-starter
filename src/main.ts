// BOILERPLATE CODE - LEAVE THIS ALONE
declare global {
  interface Window {
    $: any
  }
}

const $ = window.$; // Explicitly type the local constant

$(document).ready(function () {
  console.log("The KnackVibeCodingLibraryscript is running!");
});

// APPLY CUSTOM UI TO THE KNACK APP
import { home } from './ui/home/index';

// APPLY THE CUSTOM HOME PAGE TO VIEW_1 SCENE_1 (HOME PAGE)
// Replacing the div with id "customHomePage" with the custom home page
$(document).on('knack-view-render.view_1', function(_event: any, _view: any, _records: any){
  $('#customHomePage').html(home());
});
