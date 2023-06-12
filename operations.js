function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multipliy(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

var num1;
var num2;
var operation;
var result;
var counter = 0;

const addButton = document.querySelector(".add");
addButton.addEventListener("click", function(){
    operation = 1;
});

const subButton = document.querySelector(".subtract");
subButton.addEventListener("click", function(){
    operation = 2;
});

const multiplyButton = document.querySelector(".multi");
multiplyButton.addEventListener("click", function(){
    operation = 3;
});

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", function(){
    operation = 4;
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", function(){
    if(operation == 1){
        result = add(Number(num1), Number(num2));
        console.log(result);
    }else if(operation == 2){
        result = subtract(Number(num1), Number(num2));
        console.log(result);
    }else if(operation == 3){
        result = multipliy(Number(num1), Number(num2));
        console.log(result);
    }else if(operation == 4){
        result = divide(Number(num1), Number(num2));
        console.log(result);
    }
    let spanElement = document.getElementById('myLabel');
    spanElement.textContent = result;
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function(){
    let spanElement = document.getElementById('myLabel');
    spanElement.textContent = "";
    num1 = "";
    num2 = "";
    operation = 0;
});

//adding singlar numbers works fine, but it comes combining numbers, it is not working
//as it should be.
const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "1";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "1";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "1";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "1";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }
        counter++;
    }
});

const twoButton = document.querySelector(".two");
twoButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "2";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "2";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "2";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "2";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }
        counter++;
    }
});

const threeButton = document.querySelector(".three");
threeButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "3";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "3";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "3";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "3";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }
        counter++;
    }
});

const fourButton = document.querySelector(".four");
fourButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "4";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "4";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "4";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "4";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }
        counter++;
    }
});

const fiveButton = document.querySelector(".five");
fiveButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "5";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "5";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "5";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "5";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
    }
});

const sixButton = document.querySelector(".six");
sixButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "6";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "6";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "6";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "6";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }
        counter++;
    }
});

const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "7";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "7";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "7";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "7";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }
        counter++;
    }
});

const eightButton = document.querySelector(".eight");
eightButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "8";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "8";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "8";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "8";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }
        counter++;
    }
});

const nineButton = document.querySelector(".nine");
nineButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "9";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "9";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "9";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "9";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }
        counter++;
    }
});

const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", function(){
    if(counter % 2 == 0){
        if(num1 == null){
            num1 = "0";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }else{
            num1 = num1 + "0";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num1;
        }
        counter++;
        return;
    }else if(counter % 2 == 1){
        if(num2 == null){
            num2 = "0";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }else{
            num2 = num2 + "0";
            let spanElement = document.getElementById('myLabel');
            spanElement.textContent = num2;
        }
        counter++;
    }
});