var num1 = document.getElementById("num1")as HTMLInputElement
var num2 = document.getElementById("num2")as HTMLInputElement

var addbttn = document.getElementById("add") as HTMLButtonElement
var subbttn = document.getElementById("sub") as HTMLButtonElement
var multbttn = document.getElementById("mult") as HTMLButtonElement
var divibttn = document.getElementById("divi") as HTMLButtonElement

var printresults=document.getElementById("result") as HTMLOutputElement

// create 4 fns, such that whenever any of the 4 buttons are pressed the funcitons are called
function addnums()
{
    let a = parseFloat(num1.value)
    let b = parseFloat(num2.value)
let result=a+b
printresults.textContent=result.toString()
}
// give a function call, such that when we click on add button we want addnumbers()
// function to be called and performed
addbttn.addEventListener("click",addnums)
function subnums()
{
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
let result=a-b;
printresults.textContent=result.toString()

}
subbttn.addEventListener("click",subnums)
function multnums()
{
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    let result=a*b;
printresults.textContent=result.toString()

}
multbttn.addEventListener("click",multnums)
function divinums()
{
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
let result=a/b;
printresults.textContent=result.toString()

}

divibttn.addEventListener("click",divinums)