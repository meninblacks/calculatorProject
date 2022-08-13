function add(a,b) {
    return a + b
}

function substract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(operator, a, b) {
    operator(a,b)
}

//4th instruction

let displayValue = ""

function getNumbers(num) {
    displayValue += num.textContent
}