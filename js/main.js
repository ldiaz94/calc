var display = document.getElementById("display");
var displayBuffer = "";
var computationBuffer = "";

function updateDisplay(){
    display.innerHTML = displayBuffer;
}

function input(value) {
    if (isNaN(value) && value != ".") {
        computationBuffer += displayBuffer + value;
        displayBuffer = "";
    } else if (displayBuffer.length < 12) {
        displayBuffer += value;
    }
    updateDisplay();
    console.log(parseFloat(displayBuffer));
}

function clearFunc(flag) {
    if (flag) {
        computationBuffer = "";
    }
    displayBuffer = "";
    updateDisplay();
}

function erase(){
    displayBuffer = displayBuffer.slice(0,-1);
    updateDisplay();
}

function compute(){
    computationBuffer += displayBuffer;
    displayBuffer = computationBuffer;
    updateDisplay();
}