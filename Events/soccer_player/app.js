"use strict";

var field = document.querySelector('body');
var player = document.querySelector('img');
var stopBtn = document.querySelector('input');

field.addEventListener("click", move);

stopBtn.addEventListener("click", stopMoving);

function move(event) {
    var left = event.clientX - player.height / 2;
    var top = event.clientY - player.width / 2;

    player.style.top = top + "px";
    player.style.left = left + "px";
}

function stopMoving() {
    field.removeEventListener("click", move);
    stopBtn.value = "Stopped";
}