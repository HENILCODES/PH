var c = 0;
function fil(elem) {
    if (c <=9) {
        if (c % 2 == 0) {
            document.getElementById(elem.id).innerHTML = "O";
            document.getElementById(elem.id).disabled = true;
            document.getElementById(elem.id).classList.add("use");
        }
        else {
            document.getElementById(elem.id).innerHTML = "X";
            document.getElementById(elem.id).disabled = true;
            document.getElementById(elem.id).classList.add("use");
        }
        c++;
        if (CkeckWin()) {
            for (var i = 1; i <= 9; i++) {
                document.getElementById("d" + i).disabled = true;
                document.getElementById(elem.id).classList.add("use");
            }
        }
    }
}
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("d" + i).disabled = false;
        document.getElementById("d" + i).classList.remove("use");
        document.getElementById("d" + i).innerHTML = "";
        document.getElementById("d" + i).classList.remove("win");
    }
    c = 1;
}

function CkeckWin() {
    if (didvalue('d1', 'd2', 'd3') || didvalue('d1', 'd5', 'd9') || didvalue('d7', 'd8', 'd9') || didvalue('d1', 'd4', 'd7') ||
        didvalue('d3', 'd6', 'd9') || didvalue('d3', 'd5', 'd7') || didvalue('d4', 'd5', 'd6') || didvalue('d2', 'd5', 'd8')) {
        return true;
    }
}
function didvalue(id1, id2, id3) {
    if (getData(id1) != "" && getData(id2) != "" && getData(id3) != "" &&
        getData(id1) == getData(id2) && getData(id2) == getData(id3)) {
        document.getElementById(id1).classList.add("win");
        document.getElementById(id2).classList.add("win");
        document.getElementById(id3).classList.add("win");
        return true;
    }
}
function getData(Did) {
    return document.getElementById(Did).innerHTML.trim();
}