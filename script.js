"use strict";
// VARIABLES
let string1 = document.getElementById("input-initial");
let string2 = document.getElementById("input-final");
let copyText;

const btnMake = document.querySelector(".btn-make");
const btnCopy = document.querySelector(".btn-copy");
const btnClear = document.querySelector(".btn-clr");

// FUNCTION TO REVERSE STRING
function reverse() {
  string2.value = String(string1.value).split("").reverse("").join("");
}

//  FUNCTION CLEAR
function clear() {
  string1.value = null;
  string2.value = null;
}

// FUNCTION COPY
function copy() {
  copyText = document.getElementById("input-final");
  copyText.focus();
  copyText.select();
  document.execCommand("copy");
}
// CALLING FUNCTION WHEN BUTTON IS PRESSED
btnMake.addEventListener("click", function () {
  reverse();
});
btnClear.addEventListener("click", function () {
  clear();
});
btnCopy.addEventListener("click", function () {
  copy();
});
