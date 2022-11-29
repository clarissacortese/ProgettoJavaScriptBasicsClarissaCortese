let myCounter = document.getElementById("myCounter");

function addElement(tagName, display, id) {
    let element = document.createElement(tagName)
    element.innerHTML = display;
    element.setAttribute("id", id);
    myCounter.appendChild(element);
}

addElement("button", "-", "buttonMinus");
addElement("h3", "0", "counter");
addElement("button", "+", "buttonPlus");

let buttonMinus = document.getElementById("buttonMinus");
let counter = document.getElementById("counter");
let buttonPlus = document.getElementById("buttonPlus");

myCounter.addEventListener("click", clickButtons);

function clickButtons (event){
    let target = event.target;
    if (target.tagName != 'BUTTON') return;
    if (target.id == "buttonMinus") {
        counter.innerHTML--;
    } else {
        counter.innerHTML++;
    }
};