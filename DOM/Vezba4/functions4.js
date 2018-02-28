function popAlert() {
    var alertMsg = document.querySelector('li').textContent;
    window.alert(alertMsg);
}

function replaceText(newText) {
    var myLi = document.querySelector('ul').lastElementChild;
    myLi.textContent = newText;
}

popAlert();

replaceText("Connect With Us");