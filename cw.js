// Create a simple html form with a textarea form field, and a reset button
// When the User clicks the reset button, any text already in the textarea should be cleared/erased


var hack = document.getElementById("typer");
var btn = document.querySelector("button");
idx = 0;

myText = "Kevin is a great teacher. He is like the good cop. Kenn is the bad cop. A bad, bad cop.";

hack.onkeydown = function (e) {
    hack.value += myText[idx];
    idx++;
    e.preventDefault();
};

btn.onclick = function () {

    hack.value = '';
    idx = 0
};
