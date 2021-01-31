var myDate = new Date();
myDate.toLocaleDateString()

// variable and constants
var func = "";
const functionString = document.getElementById("function");
const acButton = document.getElementById("ac");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");
const decimalButton = document.getElementById("decimal");
const totalButton = document.getElementById("total");
const posnegButton = document.getElementById("posneg");
const percentButton = document.getElementById("percent");
const divideButton = document.getElementById("divide");
const multButton = document.getElementById("mult");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");

// Listeners
acButton.addEventListener('click', zeroOut);
oneButton.addEventListener('click', function() {addToFunc(1)});
twoButton.addEventListener('click', function() {addToFunc(2)});
threeButton.addEventListener('click', function() {addToFunc(3)});
fourButton.addEventListener('click', function() {addToFunc(4)});
fiveButton.addEventListener('click', function() {addToFunc(5)});
sixButton.addEventListener('click', function() {addToFunc(6)});
sevenButton.addEventListener('click', function() {addToFunc(7)});
eightButton.addEventListener('click', function() {addToFunc(8)});
nineButton.addEventListener('click', function() {addToFunc(9)});
zeroButton.addEventListener('click', function() {addToFunc(0)});
decimalButton.addEventListener('click', function() {addToFunc(".")});
posnegButton.addEventListener('click', function() {addToFunc(0)});
percentButton.addEventListener('click', function() {addToFunc('%')});
divideButton.addEventListener('click', function() {addToFunc('/')});
multButton.addEventListener('click', function() {addToFunc('*')});
minusButton.addEventListener('click', function() {addToFunc('-')});
plusButton.addEventListener('click', function() {addToFunc('+')});

totalButton.addEventListener('click', function() {total()});


// methods
function zeroOut() {
    functionString.value = '0';
    func = 0;
}

function addToFunc(a, b) {
    func = func + a.toString();
    functionString.value = func;
    if (functionString.charAt(1) == "0") {
        functionString.slice(0,1);
        console.log("in this function")
        }
}
                                                 
function total() {
    var total = eval(func);
    functionString.value = total;
}

function percent() {
    
}



