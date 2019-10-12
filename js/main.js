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