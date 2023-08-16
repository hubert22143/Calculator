document.addEventListener('DOMContentLoaded', (e) => {
    const input = document.getElementById('input');
    input.value = '';
    let currentValue = '';
    input.addEventListener('input', () => {
        input.value = input.value.replace(/[^\d+\-*\/%]/g, '');
        currentValue = input.value;
    })
    const numberButtons = Array.from(document.querySelectorAll('.calc'));
    numberButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (operatorClicked) {
                operatorClicked = false; // Reset operatorClicked flag
            }
            currentValue += e.target.textContent;
            input.value = currentValue;
        })
    })
    const operators = {
        '+': (currentValue, previousValue) => parseFloat(currentValue) + parseFloat(previousValue),
        '-': (currentValue, previousValue) => parseFloat(currentValue) - parseFloat(previousValue),
        '/': (currentValue, previousValue) => parseFloat(currentValue) / parseFloat(previousValue),
        '%': (currentValue, previousValue) => parseFloat(currentValue) % parseFloat(previousValue),
        '*': (currentValue, previousValue) => parseFloat(currentValue) * parseFloat(previousValue),
        '=': (currentValue, previousValue) => parseFloat(previousValue),
    };
    const operatorButtons = Array.from(document.querySelectorAll('.operator-button'));
    let previousValue = 0;
    let operatorClicked = false;
    let operatorHold = null;
    operatorButtons.forEach(operator => { 
        operator.addEventListener("click", () => {
            if(currentValue !== ''){
                operatorHold = operator.textContent
                console.log(operatorHold);
                console.log(operatorHold, "Trzymana w tym gownie")
                console.log("currentValue:" + currentValue)
                console.log("previos value equals" + previousValue )
                if(!operatorClicked){
                    previousValue = parseFloat(currentValue);
                }else{
                    previousValue = operators[operatorHold](currentValue, previousValue);
                    console.log("StoreOperator value" + operatorHold.textContent)
                    console.log("Value after performing certain action " + previousValue);
                    input.value = previousValue
                }
                currentValue = '';
                operatorClicked = true;
            }

        })
    })
    const equalButton = document.getElementById('equal');
    equalButton.addEventListener('click', () => {
        if (currentValue !== '') {
            if (operatorHold !== null) {
                previousValue = operators[operatorHold](previousValue, parseFloat(currentValue));
                console.log("Equal button clicked: " + previousValue);
                input.value = previousValue;
                operatorClicked = true; // Next input is treated as a new operand
                operatorHold = null; // Reset the operatorHold for the next operation
            } else {
                console.log("No operator selected.");
            }
        }
    });
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function() {
        input.value = "";
        currentValue = '';
        previousValue = '';
        selectedOperator = null;
        operatorHold = null;
    });
    const eraseOneChar = document.getElementById("erase");
    eraseOneChar.addEventListener("click", () => {
        input.value = input.value.slice(0, -2);
    })
    const copyButton = document.getElementById("copy");
    copyButton.addEventListener("click", () => {
        input.select();
        document.execCommand("Copy");
        alert("Copied");
    });



});