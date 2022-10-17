var inputScr = document.getElementById("inputScreen");

let addNum = (number) => inputScr.value += number;

let addPunto = () => inputScr.value += ".";

let deleteNums = () => document.getElementById("inputScreen").value = null;

let operators = (operator) => inputScr.value += operator;

let resultado = () => inputScr.value = eval(inputScr.value);

let potencia = () => {
    let valor = parseInt(inputScr.value) * parseInt(inputScr.value);
    inputScr.value = valor
};
