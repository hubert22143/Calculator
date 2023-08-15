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
            currentValue += e.target.textContent;
            input.value = currentValue;
        })
    })
    const operators = {
        '+': (currentValue,previousValue) => currentValue + previousValue  ,
        '-': (currentValue,previousValue) => currentValue - previousValue ,
        '/': (currentValue,previousValue) => currentValue / previousValue,
        '%': (currentValue,previousValue) => currentValue % previousValue,
        '*': (currentValue,previousValue) => currentValue*previousValue,
        '=': (currentValue,previousValue) => currentValue,
    };
    const operatorButtons = Array.from(document.querySelectorAll('.operator-button'));
    let previousValue = 0;
    operatorButtons.forEach(operator => { 
        operator.addEventListener("click", () => {
            if(currentValue !== ''){
                const operatorSymbol = operator.textContent
                console.log(operatorSymbol)
                console.log("currentValue:" + currentValue)
                previousValue = operators[operatorSymbol](parseFloat(currentValue), parseFloat(previousValue));
                console.log("previousValue:"+previousValue)
                input.value = previousValue;

                currentValue = '';
            }
        })

    })























    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function() {
        input.value = "";
        currentValue = '';
        previousValue = '';
        selectedOperator = null;
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