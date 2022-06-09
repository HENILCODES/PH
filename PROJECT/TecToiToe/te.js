$(document).ready(function(){
    $('#start').click(function(){
        $('.main').slideDown(1500);
        $('h1').slideUp(1000);
        $('#start').slideUp(1000);
        $('input').addClass('in');
    })
    $('#p1,#p2').click(function(){
        $('h1').slideDown(1000);
        $('#start').slideDown(1000);
        $('.main').slideUp(1500);
        $('input').removeClass('in');
    })
})
var play1;
var play2;
function pval(){
    play1 = document.getElementById('p1').value;
    play2 = document.getElementById('p2').value;
}
var c = 1;
function fil(elem) {
    if (c <= 9) {
        if (c % 2 != 0) {
            document.getElementById(elem.id).innerHTML = "O";
            d = 1;
        }
        else {
            document.getElementById(elem.id).innerHTML = "X";
            d = 0;
        }
        c++;
        if (CkeckWin()) {
            if (d == 1) {
                alert("win O "+ play1);
            }else{
                alert("win x "+ play2);
            }
            reset();
        }
    } else {
        alert("Match is Draw");
        reset();
    }
}
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("d" + i).innerHTML = "";
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
        return true;
    }
}
function getData(Did) {
    return document.getElementById(Did).innerHTML.trim();
}