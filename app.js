var inputScreen = document.getElementById("inputScreen"), lastOp;

let addNum = (number) => document.getElementById("inputScreen").value += number;


let deleteNums = () => document.getElementById("inputScreen").value = null;

let operators = (operator) => {
    inputScreen.value += operator;
}

let resultado = () => {
    inputScreen.value = eval(inputScreen.value);    
}

