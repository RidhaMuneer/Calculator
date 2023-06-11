function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multipliy(num1, num2){
    return num1 / num2;
}

function divide(num1, num2){
    return num1 % num2;
}

let num1;
let num2;

const addButton = document.querySelector(".add");
addButton.addEventListener("click", function(){
    console.log("add");
});

const subButton = document.querySelector(".subtract");
subButton.addEventListener("click", function(){
    console.log("subtract");
});

const multiplyButton = document.querySelector(".multi");
multiplyButton.addEventListener("click", function(){
    console.log("multi");
});

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", function(){
    console.log("divide");
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", function(){
    console.log("equal");
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function(){
    console.log("clear");
});

const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", function(){
    console.log("one");
});

const twoButton = document.querySelector(".two");
twoButton.addEventListener("click", function(){
    console.log("two");
});

const threeButton = document.querySelector(".three");
threeButton.addEventListener("click", function(){
    console.log("three");
});

const fourButton = document.querySelector(".four");
fourButton.addEventListener("click", function(){
    console.log("four");
});

const fiveButton = document.querySelector(".five");
fiveButton.addEventListener("click", function(){
    console.log("five");
});

const sixButton = document.querySelector(".six");
sixButton.addEventListener("click", function(){
    console.log("six");
});

const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener("click", function(){
    console.log("seven");
});

const eightButton = document.querySelector(".eight");
eightButton.addEventListener("click", function(){
    console.log("eight");
});

const nineButton = document.querySelector(".nine");
nineButton.addEventListener("click", function(){
    console.log("nine");
});

const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", function(){
    console.log("zero");
});