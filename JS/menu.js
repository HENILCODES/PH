var prevSc = window.pageYOffset;
window.onscroll = function () {
    var curnt = window.pageYOffset;
    if (prevSc > curnt) {
        document.getElementById("menu").style.top = "0";
    } else {
        document.getElementById("menu").style.top = "-85px";
    }

    if (curnt > 0) {
        document.getElementById("Scrol").style.display="none";
    } 
    if(curnt >250) {
        document.getElementById("Scrol").style.display="block";
    }
    prevSc = curnt;
}