$(document).ready(function () {
    document.getElementById("NumB").focus();
    var ComputerNumber = Math.floor(Math.random() * 50);
    var i = 1;
    document.getElementById("ChecK").addEventListener("click", function () {
        var UserGase = document.getElementById("NumB").value;
        document.getElementById("NumB").value = "";
        if (UserGase != "") {
            if (i <= 5) {
                if (UserGase < ComputerNumber) {
                    
                    $("#Result").before("<div class='message'><span> HINT :</span> Guess Higher Number > " + UserGase + "</div>");
                } else if (UserGase > ComputerNumber) {
                    $("#Result").before("<div class='message'><span> HINT :</span> Guess Lower Number < " + UserGase + "</div>");
                } else {
                    $("#Result").before(`<div class='message win'><span> HINT :</span> Number Match = ${UserGase}</div>`);
                    i = 5;
                    document.getElementById("reset").style.display = "block";
                    document.getElementById("inpu").style.display = "none";
                }
                if (i == 5) {
                    document.getElementById("comp_res").innerHTML = ComputerNumber;
                    document.getElementById("inpu").style.display = "none";
                    document.getElementById("reset").style.display = "block";
                }
                i++;
            }
        }
        document.getElementById("NumB").focus();
    });

    $(".RLicon").click(function(){
        $(".ruls").toggle(1000);
    });
});
