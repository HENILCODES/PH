window.onload = function(){
    setTimeout(endreload, 1000);
}
function endreload() {
    document.getElementById("spiner").remove();
}

$(document).ready(function () {

    $('#manu_bar').click(function () {
        $(".main").show();
    });
    $('.xl').click(function () {
        $(".main").hide();
    });
});

