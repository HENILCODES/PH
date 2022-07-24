$(document).ready(function () {
    setTimeout(type, 2550);
    // index auto type
    var i = 0;
    var j = 0;
    var T1 = "Hello Welcome To My Website. This Web-site in all Details base on a Web-Design Language.";
    var T2 = "You Can easy to See Program & Source Code and also See Some Projects. Thank You "
    function type() {
        if (i < T1.length) {
            document.getElementById("auto_tp1").innerHTML += T1.charAt(i);
            i++;
        }
        
        if (i == T1.length) {
            document.getElementById("auto_tp1").innerHTML = " ";
            if (j < T2.length) {
                document.getElementById("auto_tp2").innerHTML += T2.charAt(j);
                j++;
            }
        }
        
        if (j == T2.length) {
            document.getElementById("last").style.display = "none";
        }
        setTimeout(type, 85);
    }
});
