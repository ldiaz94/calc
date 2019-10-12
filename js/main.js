var display = document.getElementById("display");
var displayBuffer = "";


function input(value) {
    if (displayBuffer.length < 12) {
        displayBuffer += value;
    }
    display.innerHTML = displayBuffer;
    console.log(parseFloat(displayBuffer));
}