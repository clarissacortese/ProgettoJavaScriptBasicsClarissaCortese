let myCounter = document.getElementById("myCounter");
let button1 = document.createElement("button");
button1.innerHTML = "-";
let button2 = document.createElement("button");
button2.innerHTML = "+";
let counter = document.createElement("h3");
counter.innerHTML = 0;

myCounter.appendChild(button1);
myCounter.appendChild(counter);
myCounter.appendChild(button2);

button1.onclick = function() {
    counter.innerHTML--;
};

button2.onclick = function() {
    counter.innerHTML++;
};