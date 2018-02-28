
 var lastUl = document.querySelector("ul:nth-child(2)");

lastUl.className = "mojaKlasa";



function secondFunc (){
    var allLi = document.querySelectorAll("li");
    allLi.forEach(function(element){
        element.className = "mojLi";
    })
}

secondFunc();

function thirdFunc(){
    var lastLastUl = document.querySelectorAll("ul:nth-child(3) li");
    lastLastUl.forEach(function(element){
        element.className = "mojLastUl";
        element.textContent = element.textContent.toUpperCase();
    })
}

thirdFunc();