//button
$(document).ready(function () {
    $('.fold').click(function () {
        $('.Program').hide(1000);
        $('.fold').hide(300);
    })
})
function JQ_html(j) {
    $(document).ready(function () {
        $('.P' + j + 'CODEBLOCK').slideUp(100);
        $('.P' + j + 'CODEBLOCK').slideDown(1000);
        $('.HTML' + j).css({ "background": "red", "color": "white" });
    });
}
function JQ_css(j) {
    $(document).ready(function () {
        $('.P' + j + 'CODEBLOCK').slideUp(100);
        $('.P' + j + 'CODEBLOCK').slideDown(1000);
        $('.CSS' + j).css({ "background": "red", "color": "white" });
    });
}
function JQ_javascript(j) {
    $(document).ready(function () {
        $('.P' + j + 'CODEBLOCK').slideUp(100);
        $('.P' + j + 'CODEBLOCK').slideDown(1000);
        $('.JAVASCRIPT' + j).css({ "background": "red", "color": "white" });
    });
}
function JQ_jquery(j) {
    $(document).ready(function () {
        $('.P' + j + 'CODEBLOCK').slideUp(100);
        $('.P' + j + 'CODEBLOCK').slideDown(1000);
        $('.JQUERY' + j).css({ "background": "red", "color": "white" });
    });
}
//h1
function PH(j) {
    $(document).ready(function () {
        $('#PB' + j).toggle(1000);
        $('#PH' + j).css("color", "red");
        $('#PH' + j).css("background", "rgb(204 218 207)");
        $('.P' + j + 'CODEBLOCK').slideUp(500);
        $('.fold').slideDown();
    });
}
