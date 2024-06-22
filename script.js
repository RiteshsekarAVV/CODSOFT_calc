const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

let displayValue = '';
let operator = '';
let firstValue = '';
let secondValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.classList.contains('operator')) {
            if (displayValue !== '' && operator === '') {
                firstValue = displayValue;
                operator = value;
                displayValue = '';
            }
        } else {
            displayValue += value;
            display.textContent = displayValue;
        }
    });
});

clearButton.addEventListener('click', () => {
    displayValue = '';
    operator = '';
    firstValue = '';
    secondValue = '';
    display.textContent = '0';
});

equalButton.addEventListener('click', () => {
    if (displayValue !== '' && operator !== '' && firstValue !== '') {
        secondValue = displayValue;
        displayValue = evaluate(firstValue, secondValue, operator);
        display.textContent = displayValue;
        operator = '';
        firstValue = displayValue;
        displayValue = '';
    }
});

function evaluate(first, second, operator) {
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);
    switch (operator) {
        case '+':
            return (firstNum + secondNum).toString();
        case '-':
            return (firstNum - secondNum).toString();
        case '*':
            return (firstNum * secondNum).toString();
        case '/':
            return (firstNum / secondNum).toString();
        default:
            return '0';
    }
}
