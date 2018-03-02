var field = document.querySelector('body');
var player = document.querySelector('img');
var stop = document.querySelector('input');
var isToggle = true;
field.addEventListener("click", move);

if(isToggle){
    stop.addEventListener("click", function () {
        field.removeEventListener("click", move);
        stop.value = "Start Moving";
        isToggle = false;
    });
}
if(isToggle===false){
stop.addEventListener("click", function () {

    field.addEventListener("click", move);
    isToggle = true;
    
    
});
}


function move(event) {
    var left = event.clientX - player.height / 2;
    var top = event.clientY - player.width / 2;

    player.style.top = top + "px";
    player.style.left = left + "px";
}