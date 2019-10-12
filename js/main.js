var display = document.getElementById("display");
var displayBuffer = "";
var computationBuffer = "";


function input(value) {
    if (displayBuffer.length < 12) {
        displayBuffer += value;
    }
    display.innerHTML = displayBuffer;
    console.log(parseFloat(displayBuffer));
}

function clearFunc(flag) {
    if (flag) {
        computationBuffer = "";
    }
    displayBuffer = "";
    display.innerHTML = displayBuffer;
}

function erase(){
    displayBuffer = displayBuffer.slice(0,-1);
    display.innerHTML = displayBuffer;
}