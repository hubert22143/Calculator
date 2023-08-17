document.addEventListener('DOMContentLoaded', (e) => {
    const input = document.getElementById('input');
    const getValuesCalculator = document.querySelector('.calc-ops');
    input.value = '';
    let currentValue = 0;
    let previousValue = null;
    input.addEventListener('input', () => {
        currentValue = input.value;
    });


    const numberButtons = document.querySelectorAll('.calc')
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            input.value += button.textContent;
            currentValue = input.value;
            console.log("Button currentValue : " , currentValue)
            updateCalcOps();
        })
    })


    let selectedOperator = null;
    const operatorButtons = document.querySelectorAll('.operator-button');
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            previousValue = currentValue;
            input.value = '';
            selectedOperator = button.textContent;
            console.log("The current operanda" , previousValue , selectedOperator , currentValue);
            updateCalcOps();
        })
    })
    let result = null;

    function operatorsCalculations(selectedOperator){
        switch(selectedOperator){
            case "=":
                result = previousValue;
                input.value = result;
                currentValue = input.value;
                break;
            case "+":
                result = parseFloat(previousValue) + parseFloat(currentValue);
                input.value = result;
                currentValue = input.value;
                console.log(result);
                break;
            case "-":
                result = parseFloat(previousValue) - parseFloat(currentValue);
                input.value = result;
                currentValue = input.value;
                break;
            case "/":
                if(parseFloat(currentValue) !==0){
                    result = parseFloat(previousValue) / parseFloat(currentValue);
                    input.value = result;
                    currentValue = input.value;
                }else{
                    result = "Error: Can't divide by 0";
                    input.value = result;
                    currentValue = input.value;
                }
                break;
            case "*":
                result = parseFloat(previousValue) * parseFloat(currentValue);
                input.value = result;
                currentValue = input.value;
                break;
            case "%":
                result = parseFloat(previousValue) % parseFloat(currentValue);
                input.value = result;
                currentValue = input.value;
                break;
            case ".":
                if(!currentValue.includes(".")){
                    input.value += ".";
                    currentValue = input.value;
                }
                break;
            default:
                 return;
        }
        previousValue = null;

    }
    const equalsButton = document.getElementById('equal');
    equalsButton.addEventListener('click', () => {
        if(selectedOperator!== null){
            operatorsCalculations(selectedOperator);
            updateCalcOps();
        }
    });
    const clearButton = document.querySelector('.calc-ac');
    clearButton.addEventListener('click', () => {
        input.value = ''
        currentValue = 0;
        previousValue = 0;
        selectedOperator = null;
        result = null;
    })
    const eraseOneChar = document.querySelector('.calc-erase');
    eraseOneChar.addEventListener('click', () => {
        input.value = input.value.slice(0,-1);
    })
    const copyValue = document.querySelector('.calc-copyContent');
    copyValue.addEventListener('click', () => {
        input.select();
        document.execCommand('copy');
        alert("Copied");
    })
    function updateCalcOps(){
        if(previousValue === null){
            previousValue = '';
        }
        getValuesCalculator.textContent = `${previousValue || '' } ${selectedOperator || ''}   ${currentValue || ' '}`;
    }
});