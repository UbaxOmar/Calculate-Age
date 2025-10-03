// Get elements
const result = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

// Variables
let currentInput = '';
let shouldResetScreen = false;

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        
        if (button.classList.contains('number')) {
            handleNumber(buttonValue);
        } else if (buttonValue === 'clr') {
            clearDisplay();
        } else if (buttonValue === 'DEL') {
            deleteLastChar();
        } else if (['+', '-', '*', '/', '%', '.'].includes(buttonValue)) {
            handleOperator(buttonValue);
        } else if (buttonValue === '=') {
            calculate();
        }
    });
});

function handleNumber(number) {
    if (shouldResetScreen) {
        result.textContent = '';
        shouldResetScreen = false;
    }
    
    if (result.textContent === '0') {
        result.textContent = number;
    } else {
        result.textContent += number;
    }
    
    currentInput = result.textContent;
}

function handleOperator(operator) {
    if (currentInput !== '') {
        result.textContent += operator;
        currentInput = result.textContent;
        shouldResetScreen = false;
    }
}

function clearDisplay() {
    result.textContent = '0';
    currentInput = '';
}

function deleteLastChar() {
    if (result.textContent.length > 1) {
        result.textContent = result.textContent.slice(0, -1);
    } else {
        result.textContent = '0';
    }
    currentInput = result.textContent;
}

function calculate() { 
    result.textContent = 'Hello World!';
    currentInput = '';
    shouldResetScreen = true;
}