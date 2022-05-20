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
    else {
        F2 = document.getElementById("Answer").value;
        switch (CH) {
            case '+':
                document.getElementById("Answer").value = parseFloat(F1)+ parseFloat(F2);
                break;
            case '-':
                document.getElementById("Answer").value = F1 - F2;
                break;
            case '*':
                document.getElementById("Answer").value = F1 * F2;
                break;
            case '/':
                document.getElementById("Answer").value = F1 / F2;
                break;
            default:
                document.getElementById("Answer").value = "NaN";
                break;
        }
    }
}