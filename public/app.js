"use strict";
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var form = document.querySelector('.new-item-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
    console.log(type.value + " " + tofrom.value + " " + details.value + " " + amount.valueAsNumber);
});
