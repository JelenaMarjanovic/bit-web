
function selectorFun () {
    var imgWithBorder = document.querySelector(".selected");
    imgWithBorder.style.border = "none";
    var secondGAleryImg = imgWithBorder.parentElement.nextElementSibling.firstElementChild;
    secondGAleryImg.classList.add("selected");
    
}

selectorFun();