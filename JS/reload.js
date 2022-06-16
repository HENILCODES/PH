window.onload = function(){
    setTimeout(endreload, 2200);
}
function endreload() {
    document.getElementById("load").remove();
}

$(document).ready(function () {

    $('#manu_bar').click(function () {
        $(".main").show();
    });
    $('.xl').click(function () {
        $(".main").hide();
    });
});

