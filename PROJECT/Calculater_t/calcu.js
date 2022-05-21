var F1, F2, CH;
function get_Val(N) {
    document.getElementById("Answer").value += N;
}
function get_op(op) {
    if (op == '+') {
        F1 = document.getElementById("Answer").value;
        document.getElementById("Answer").value = "";
        CH = op;
    }
    else if (op == '-') {
        F1 = document.getElementById("Answer").value;
        document.getElementById("Answer").value = "";
        CH = op;
    }
    else if (op == '*') {
        F1 = document.getElementById("Answer").value;
        document.getElementById("Answer").value = "";
        CH = op;
    }
    else if (op == '/') {
        F1 = document.getElementById("Answer").value;
        document.getElementById("Answer").value = "";
        CH = op;
    }
    else if (op == 'cc') {
        F1 = '';
        document.getElementById("Answer").value = '';
    }
    else if (op == '√') {
        F1 = document.getElementById("Answer").value;
        document.getElementById("Answer").value = Math.sqrt(F1);
    }
    else if (op == 'x²') {
        F1 = document.getElementById("Answer").value;
        document.getElementById("Answer").value = Math.pow(F1, 2);
    }
    else {
        F2 = document.getElementById("Answer").value;
        switch (CH) {
            case '+':
                AN(parseFloat(F1) + parseFloat(F2));
                break;
            case '-':
                AN(F1 - F2);
                break;
            case '*':
                AN(F1 * F2);
                break;
            case '/':
                AN(F1 / F2);
                break;
            default:
                document.getElementById("Answer").value = "0";
                break;
        }
    }
}

function AN(AN) {
    document.getElementById("Answer").value = AN;
}