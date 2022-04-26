$(document).ready(function () {
    $('#bt').click(function () {
        $('body').toggleClass('body');
        $('#color').toggleClass("day");
        $('#color').toggleClass("main");
        $('i').toggleClass("whatsapp");
    });
});