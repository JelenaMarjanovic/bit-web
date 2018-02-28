
function selector() {
    var activeLi = document.querySelector(".active");
    activeLi.classList.remove("active");
    var firstLi = activeLi.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
    firstLi.classList.add("active");
}

selector();