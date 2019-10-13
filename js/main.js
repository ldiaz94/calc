var display = document.getElementById("display");
var displayBuffer = "";
var computationBuffer = "";
var result = "";
var OPERANDS = ["/", "x", "+", "-"];

function updateDisplay(message){
    if (message) {
        display.innerHTML = message;
    } else {
        display.innerHTML = displayBuffer;
    }
}

function input(value) {
    if (isNaN(value) && value != ".") { // operand has been clicked
        if (displayBuffer){
            computationBuffer += displayBuffer + " " +  value + " ";
            displayBuffer = "";
        } else if (result && !computationBuffer) {
            computationBuffer = result + " " + value + " ";
        } else {
            // Cannot concatenate two operands together, throw error
            // and clear buffers
            displayBuffer = "";
            computationBuffer = "";
            updateDisplay("ERROR");
            return null
        }
    
    } else if (displayBuffer.length < 12) {
        displayBuffer += value;
    }
    updateDisplay();
    console.log(typeof displayBuffer);
}

function clearFunc(flag) {
    if (flag) {
        computationBuffer = "";
        result = "";
    }
    displayBuffer = "";
    updateDisplay();
}

function erase(){
    displayBuffer = displayBuffer.slice(0,-1);
    updateDisplay();
}

function compute(){
    computationBuffer += displayBuffer; // Add last number to string

    // Split the string using the whitespace surrounding each operand,
    // this generates a list of numbers and operands of this form:
    //      12.5, x, 5, +, 9, /, 6, * 4, -, 10, *, 9, /, 2
    // this list becomes the new computation buffer
    computationBuffer = computationBuffer.split(" ");
    console.log(computationBuffer);
    // If the last entry in the list is an operand, it gets omitted
    if (isNaN(computationBuffer[computationBuffer.length-1])){
        computationBuffer = computationBuffer.slice(0,-1);
    }
    console.log(computationBuffer);
    
    for (var operand of OPERANDS) {
        computationBuffer = parseBuffer(computationBuffer,operand);
    }
    
    updateDisplay(result);
    displayBuffer = "";
    computationBuffer = "";
}

function parseBuffer(buffer, operand){
    var i = 0;
    while (i < buffer.length) {
        if (buffer[i] === operand){
            result = operate(buffer[i-1], buffer[i],
                                buffer[i+1]);
            if (i > 2){
                buffer = (buffer.slice(0,i-1).concat(result)).concat(buffer.slice(i+2,)) 
            } else {
                buffer = [result].concat(buffer.slice(i+2,))
            }
        } else {
        i += 1; 
        }   
    }
    return buffer;
}

function operate(left,operand,right){
    switch (operand) {
        case "/":
            return (parseFloat(left) / parseFloat(right)).toString();
        case "x":
            return (parseFloat(left) * parseFloat(right)).toString();
        case "+":
            return (parseFloat(left) + parseFloat(right)).toString();
        case "-":
            return (parseFloat(left) - parseFloat(right)).toString();
    }
}