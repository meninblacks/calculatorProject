function add(a,b) {
    return a + b
}

function subtract(a,b) {
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

// function getNumbers(num) {
//     displayValue += num.textContent
// }

//adding text contents to classes
const button = document.querySelectorAll(".button")
button.forEach(btn => {
    btn.classList.add(`item-${btn.textContent}`)
    // btn.style.gridArea = btn.textContent
}) 


//LOGIC
// 1. selecting elements
const screen = document.querySelector(".screen")
const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
const clear = document.querySelector(".Clear")
const deleteBtn = document.querySelector(".Delete")
const equalBtn = document.querySelector(".equal")
const topScreen = document.querySelector(".top-screen")

//2. iterating over them and event listeners
let num1;
let num2;
let topScreenContent = "";
let currentOperator;
let answer; //use it after num2 is stored

numbers.forEach(num => {
    num.addEventListener("click", () => {
        if (num1 !== undefined) {
            screen.textContent = num.textContent
            topScreenContent += " " + num.textContent
            num2 = num.textContent
            answer = currentOperator(num1, num2)
        } else {
            screen.textContent = num.textContent
            topScreenContent += num.textContent
            num1 = num.textContent
        }
    })
})

operators.forEach(optr => {
    optr.addEventListener("click", () => {
        if (optr.classList.contains("item-/")) {
            // if(answer !== undefined) {
            //     currentOperator = divide
            // topScreenContent += " /"

            // }
            currentOperator = divide
            // screen.textContent += " /"
            topScreenContent += " /"
            topScreen.textContent = topScreenContent
        } else if (optr.classList.contains("item-*")) {
            // if(answer !== undefined) {
            //     currentOperator = multiply
            // topScreenContent += " /"

            // }
            currentOperator = multiply
            // screen.textContent += " *"
            topScreenContent += " *"
            topScreen.textContent = topScreenContent
        } else if (optr.classList.contains("item--")) {
            // if(answer !== undefined) {
            //     currentOperator = subtract
            // topScreenContent += " /"

            // }
            currentOperator = subtract
            // screen.textContent += " -"
            topScreenContent += " -"
            topScreen.textContent = topScreenContent
        } else if (optr.classList.contains("item-+")) {
            // if(answer !== undefined) {
            //     currentOperator = add
            // topScreenContent += " /"

            // }
            currentOperator = add
            // screen.textContent += " +"
            topScreenContent += " /+"
            topScreen.textContent = topScreenContent
        } 
    })
})

equalBtn.addEventListener("click", () => {
    // answer = currentOperator(num1, num2)
    topScreenContent += " ="
    topScreen.textContent = topScreenContent
    screen.textContent = answer
})