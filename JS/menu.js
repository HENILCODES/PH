var prevSc = window.pageYOffset;
window.onscroll = function () {
    var curnt = window.pageYOffset;
    if (prevSc > curnt) {
        document.getElementById("menu").style.top = "0";
    } else {
        document.getElementById("menu").style.top = "-90px";
    }
    prevSc = curnt;
}