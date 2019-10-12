var display = document.getElementById("display");
var displayBuffer = "";
var computationBuffer = "";

function updateDisplay(){
    display.innerHTML = displayBuffer;
}

function input(value) {
    if (displayBuffer.length < 12) {
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