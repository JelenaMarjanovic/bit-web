function isRequired() {
    var inputs = document.querySelector('form').children;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].required && inputs[i].textContent === "") {
            inputs[i].style.border = "1px solid red";
        }
    }
}

isRequired();