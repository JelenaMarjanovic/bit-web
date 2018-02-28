function buildDropdown(arr, parentNode) {
    var select = document.createElement('select');
    
    arr.forEach(function (element) {
        var optionTag = 'option';
        var option = document.createElement(optionTag);
        option.value = element.toLowerCase();
        var text = document.createTextNode(element);
        option.appendChild(text);
        select.appendChild(option);
    });

    parentNode.appendChild(select);
}

var firstDiv = document.querySelector('body').firstElementChild;
var lastDiv = document.querySelector('body').lastElementChild.previousElementSibling;

var a = ['Volvo', 'Saab', 'Opel', 'Audi'];
var b = ['Ivana', 'Dejan', 'Jelena', 'Matija'];

buildDropdown(a, firstDiv);
buildDropdown(b, lastDiv);