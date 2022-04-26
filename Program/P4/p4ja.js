function sum(){
    var a = parseInt(document.getElementById("Num1").value);
    var b = parseInt(document.getElementById("Num2").value);
    var ans = document.getElementById("Answer");
    ans.innerHTML = a+b;
}
function Subtract(){
    var a = parseInt(document.getElementById("Num1").value);
    var b = parseInt(document.getElementById("Num2").value);
    var ans = document.getElementById("Answer");
    ans.innerHTML = a-b;
}
function multiply(){
    var a = parseInt(document.getElementById("Num1").value);
    var b = parseInt(document.getElementById("Num2").value);
    var ans = document.getElementById("Answer");
    ans.innerHTML = a*b;
}
function divition(){
    var a = parseInt(document.getElementById("Num1").value);
    var b = parseInt(document.getElementById("Num2").value);
    var ans = document.getElementById("Answer");
    ans.innerHTML = a/b;
}
