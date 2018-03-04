"use strict";

var environment = document.querySelector('div');
var mario = document.querySelector('#mario');
var runningMario = document.querySelector('#running-mario');

var timer = 0;
environment.style.backgroundPositionX = '250px';

document.addEventListener('keydown', startAnimation);
document.addEventListener('keyup', stopAnimation);

/* Sliding background to the left */
function moveEnvironment() {
    environment.style.backgroundPositionX = (parseInt(environment.style.backgroundPositionX) - 13) + "px";
}

/* Super Mario is running */
function runMario() {
    mario.style.display = 'none';
    runningMario.style.display = 'block';
}

/* Super Mario stops */
function stopMario() {
    mario.style.display = 'block';
    runningMario.style.display = 'none';
}

function startAnimation(event) {
    if (event.keyCode === 39) {
        runMario();
        timer = setInterval(moveEnvironment(), 50);
    }
}

function stopAnimation(event) {
    if (event.keyCode === 39) {
        stopMario();
        clearInterval(timer);
    }
}