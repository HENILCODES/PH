$(document).ready(function () {
    $('#Mode').click(function () {
        $('body').toggleClass('body');
        $('#color').toggleClass("day");
        $('#color').toggleClass("main");
        $("#Mode").toggleClass("active");
        $('#moon').toggleClass("bi-moon-fill").toggleClass("bi-sun-fill");
        $('i').toggleClass("whatsapp");
    });
});