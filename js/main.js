// Getting elements by forms
const inpuNumber1 = document.querySelector('#number1');

const inpuNumber2 = document.querySelector('#number2');

const resultBox = document.querySelector('#result-box');

// Getting elements by Querys
const btnPlus = document.querySelector('#btn-plus');

const btnTimes = document.querySelector('#btn-times');

const btnClear = document.querySelector('#btn-clear');

btnPlus.addEventListener("click", sum);
btnTimes.addEventListener("click", mult);
btnClear.addEventListener("click", clear);

inpuNumber1.addEventListener("keyup", validateInput1);
inpuNumber2.addEventListener("keyup", validateInput2);

function validateInput1() {
   
    if (isNaN(inpuNumber1.value)) {
        // Not a Number, add class "input-error"
        inpuNumber1.classList.add("input-error");
    } else {
        // If a Number, remove "input-error"
        inpuNumber1.classList.remove("input-error");
    }
}

function validateInput2() {
   
    if (isNaN(inpuNumber2.value)) {
        // Not a Number, add class "input-error"
        inpuNumber2.classList.add("input-error");
    } else {
        // If a Number, remove "input-error"
        inpuNumber2.classList.remove("input-error");
    }
}

function sum() {
    resultBox.innerHTML = parseFloat(inpuNumber1.value) + parseFloat(inpuNumber2.value);
     
}

function mult() {
    resultBox.innerHTML = parseFloat(inpuNumber1.value) * parseFloat(inpuNumber2.value);
     
}

function clear() {
    resultBox.innerHTML = 0;  
}

