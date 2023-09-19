const buttons = document.getElementsByClassName('calc-button');
const input = document.getElementById('calculator-display');

let history = [];

function calculateResult() {
    let result = 0;
    let nextOperation = '';
    history.forEach((item) => {
        if (!Number.isInteger(+item)) {
            nextOperation = item;
        } else {
            switch(nextOperation) {
                case "+":
                    result = result + +item;
                    break;
                case "-":
                    result = result - +item;
                    break;
                case "/":
                    result = result / +item;
                    break;
                case "*":
                    result = result * +item;
                    break;
                case "%":
                    result = result % +item;     
                    break;    
                 default:
                    result = +item;
            }
        }
    })
    input.value = result;
}

function clearHistory() {
    history = [];
}

function removeLastHistory() {
    history.pop()
}

function multiplyNumber(value) {
    history[history.length - 1] = input.value + value;
    input.value = input.value + value;
}

function click(event) {
    const value = event.target.innerHTML;
    
    if (Number.isInteger(+value) && Number.isInteger(+history[history.length - 1])) {
        multiplyNumber(value);
    } else {
        input.value = value;
        switch (value) {
            case 'CE':
                clearHistory();
                break;
            case 'C':
                removeLastHistory();
                break;
            case '=':
                calculateResult();
            default: 
                history.push(value);
        }
    }
   
}


for(let i = 0; i < buttons.length; i++) {
    const currentButton = buttons[i];
    currentButton.addEventListener('click', click)
}
