function Log_valid() {
    var numb = document.Form1.Number.value;
    var pass = document.Form1.password_fild.value;
    var err_number = document.getElementById("Valid_number");
    var err_pass = document.getElementById("valid_pass");
    var log = document.getElementById("logIn");
    //number valid code
    var i = numb.length;
    if (numb.length < 10) {
        err_number.innerHTML = i + " Number";
        log.disabled = true;
    } else if (numb.length > 10) {
        err_number.innerHTML = "Not Valid Number";
        log.disabled = true;
    }
    if (numb.length == 10) {
        err_number.innerHTML = "valid";
    }
    // password valid code
    var j = pass.length;
    if (pass.length <= 8) {
        log.disabled = true;
    }
    err_pass.innerHTML = pass.length + " Digitise";

    if (numb.length == 10 && pass.length == 9) {
        log.disabled = false;
        document.getElementById("logIn").style.cursor = "pointer";
        document.getElementById("logIn").style.background = "rgb(68, 3, 110)";
    }
}
