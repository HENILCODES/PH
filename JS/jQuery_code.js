//button
$(document).ready(function () {
    $('.fold').click(function () {
        $('.Program').hide(1000);
        $('.fold').hide(300);
    })
})
function JQ_html(j) {
    $(document).ready(function () {
        $('.P' + j + 'HT').slideDown(1000);
        $('.P' + j + 'CS').hide(1000);
        $('.P' + j + 'JA').hide(1000);
        $('.HTML' + j).css({ "background": "red", "color": "white" });
    });
    console.log("JQ HTML " + j + " Click");
}
function JQ_css(j) {
    $(document).ready(function () {
        $('.P' + j + 'CS').slideDown(1000);
        $('.P' + j + 'HT').hide(1000);
        $('.P' + j + 'JA').hide(1000);
        $('.P' + j + 'JQ').hide(1000);
        $('.CSS' + j).css({ "background": "red", "color": "white" });
    });
    console.log("JQ CSS " + j + " Click");
}
function JQ_javascript(j) {
    $(document).ready(function () {
        $('.P' + j + 'JA').slideDown(1000);
        $('.P' + j + 'HT').hide(1000);
        $('.P' + j + 'CS').hide(1000);
        $('.P' + j + 'JQ').hide(1000);
        $('.JAVASCRIPT' + j).css({ "background": "red", "color": "white" });
    });
    console.log("JQ JAVASCRIPT " + j + " Click");
}
function JQ_jquery(j) {
    $(document).ready(function () {
        $('.P' + j + 'JQ').slideDown(1500);
        $('.P' + j + 'HT').hide(1000);
        $('.P' + j + 'CS').hide(1000);
        $('.P' + j + 'JA').hide(1000);
        $('.JQUERY' + j).css({ "background": "red", "color": "white" });
    });
    console.log("JQ JQUERY " + j + " Click");
}
//h1
function PH(j) {
    $(document).ready(function () {
        $('#PB' + j).toggle(1000);
        $('#PH' + j).css("color", "red");
        $('#PH' + j).css("background", "rgb(204 218 207)");
        $('.P' + j + 'HT').hide(1000);
        $('.P' + j + 'CS').hide(1000);
        $('.P' + j + 'JA').hide(1000);
        $('.P' + j + 'JQ').hide(1000);
        $('.fold').slideDown();
    });
    console.log("Heading " + j + " Click");
}

//Scroll Top Bottom
function scroll_Top() { $('html,body').animate({ scrollTop: 0 }, 1000); }
function scroll_bottm() { $('html,body').animate({ scrollTop: 9999 }, 1000); }
