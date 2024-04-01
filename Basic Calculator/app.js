var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addbttn = document.getElementById("add");
var subbttn = document.getElementById("sub");
var multbttn = document.getElementById("mult");
var divibttn = document.getElementById("divi");
var printresults = document.getElementById("result");
// create 4 fns, such that whenever any of the 4 buttons are pressed the funcitons are called
function addnums() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var result = a + b;
    printresults.textContent = result.toString();
}
// give a function call, such that when we click on add button we want addnumbers()
// function to be called and performed
addbttn.addEventListener("click", addnums);
function subnums() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var result = a - b;
    printresults.textContent = result.toString();
}
subbttn.addEventListener("click", subnums);
function multnums() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var result = a * b;
    printresults.textContent = result.toString();
}
multbttn.addEventListener("click", multnums);
function divinums() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var result = a / b;
    printresults.textContent = result.toString();
}
divibttn.addEventListener("click", divinums);
