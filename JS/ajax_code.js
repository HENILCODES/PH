function HTML(program) {
    var Code = new XMLHttpRequest();
    Code.onload = function(){
        document.getElementById("DATACODE"+program).innerText = this.responseText;
    }
    Code.open("GET","Program/P"+program+"/p"+program+"ht.html");
    Code.send();
}

function CSS(program) {
    var Code = new XMLHttpRequest();
    Code.onload = function(){
        document.getElementById("DATACODE"+program).innerText = this.responseText;
    }
    Code.open("GET","Program/P"+program+"/p"+program+"cs.css");
    Code.send();
}


function JAVASCRIPT(program) {
    var Code = new XMLHttpRequest();
    Code.onload = function(){
        document.getElementById("DATACODE"+program).innerText = this.responseText;
    }
    Code.open("GET","Program/P"+program+"/p"+program+"ja.js");
    Code.send();

}


function JQUERY(program) {
    var Code = new XMLHttpRequest();
    Code.onload = function(){
        document.getElementById("DATACODE"+program).innerText = this.responseText;
    }
    Code.open("GET","Program/P"+program+"/p"+program+"jq.js");
    Code.send();
}