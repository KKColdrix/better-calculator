var inputScreen = document.getElementById("inputScreen")

let addNum = (number) => document.getElementById("inputScreen").value += number;


let deleteNums = () => document.getElementById("inputScreen").value = null;


let deleteOne = () => {
    let inputValue = inputScreen.value;
    inputScreen.value = inputValue.substring(0, inputValue.length-1);
}

let operators = (operator) => {

}