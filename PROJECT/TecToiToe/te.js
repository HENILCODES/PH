$(document).ready(function(){
    $('#start').click(function(){
        $('.main').slideDown(1500);
        $('h1').slideUp(1000);
        $('#start').slideUp(1000);
        $('input').addClass('in');
    })
    $('#p1,#p2').click(function(){
        $('h1').slideDown(1000);
        $('#start').slideDown(1000);
        $('.main').slideUp(1500);
        $('input').removeClass('in');
    })
})

var c = 1;
var den;
var play1;
var play2;
function pval(){
    play1 = document.getElementById('p1').value;
    play2 = document.getElementById('p2').value;
}
function fil(elem) {
    if (c <= 9) {
        if (c % 2 != 0) {
            document.getElementById(elem.id).innerHTML = "O";
            d=1;
        }
        else {
            document.getElementById(elem.id).innerHTML = "X";
            d=0;
        }
        c++;
        if(check()){
            if(d==1)
            {
                document.getElementById('p1').style.background="lightgreen";
                document.getElementById('p1').style.color="black";
                document.getElementById('p2').style.background="red";
                alert("Winner O  is  : "+play1);
            }
            else{
                document.getElementById('p1').style.background="red";
                document.getElementById('p2').style.background="lightgreen";
                document.getElementById('p2').style.color="black";
                alert("Winner X is : "+play2);
            }
            reset();
        }
        else if(check2()){
           if(d==1)
            {
                document.getElementById('p1').style.background="lightgreen";
                document.getElementById('p1').style.color="black";
                document.getElementById('p2').style.background="red";
                alert("Winner O is  : "+play1);
            }
            else{
                document.getElementById('p1').style.background="red";
                document.getElementById('p2').style.background="lightgreen";
                document.getElementById('p2').style.color="black";
                alert("Winner  X is : "+play2);
            }
            reset();
        }
        else if(check3()){
            if(d==1)
            {
                document.getElementById('p1').style.background="lightgreen";
                document.getElementById('p1').style.color="black";
                document.getElementById('p2').style.background="red";
                alert("Winner O is  : "+play1);
            }
            else{
                document.getElementById('p1').style.background="red";
                document.getElementById('p2').style.background="lightgreen";
                document.getElementById('p2').style.color="black";
                alert("Winner X is : "+play2);
            }
            reset();
        }
        else if(check4()){
            if(d==1)
            {
                document.getElementById('p1').style.background="lightgreen";
                document.getElementById('p1').style.color="black";
                document.getElementById('p2').style.background="red";
                alert("Winner O is  : "+play1);
            }
            else{
                document.getElementById('p1').style.background="red";
                document.getElementById('p2').style.background="lightgreen";
                document.getElementById('p2').style.color="black";
                alert("Winner X is : "+play2);
            }
            reset();
        }
        else if(check5()){
            if(d==1)
            {
                document.getElementById('p1').style.background="lightgreen";
                document.getElementById('p1').style.color="black";
                document.getElementById('p2').style.background="red";
                alert("Winner O is  : "+play1);
            }
            else{
                document.getElementById('p1').style.background="red";
                document.getElementById('p2').style.background="lightgreen";
                document.getElementById('p2').style.color="black";
                alert("Winner X is : "+play2);
            }
            reset();
        }
        else if(check6()){
            if(d==1)
            {
                document.getElementById('p1').style.background="lightgreen";
                document.getElementById('p1').style.color="black";
                document.getElementById('p2').style.background="red";
                alert("Winner O is  : "+play1);
            }
            else{
                document.getElementById('p1').style.background="red";
                document.getElementById('p2').style.background="lightgreen";
                document.getElementById('p2').style.color="black";
                alert("Winner X is : "+play2);
            }
            reset();
        }
        else if(check7()){
            if(d==1)
            {
                document.getElementById('p1').style.background="lightgreen";
                document.getElementById('p1').style.color="black";
                document.getElementById('p2').style.background="red";
                alert("Winner O is  : "+play1);
            }
            else{
                document.getElementById('p1').style.background="red";
                document.getElementById('p2').style.background="lightgreen";
                document.getElementById('p2').style.color="black";
                alert("Winner X is : "+play2);
            }
            reset();
        }
        else if(check8()){
            if(d==1)
            {
                document.getElementById('p1').style.background="lightgreen";
                document.getElementById('p1').style.color="black";
                document.getElementById('p2').style.background="red";
                alert("Winner O is  : "+play1);
            }
            else{
                document.getElementById('p1').style.background="red";
                document.getElementById('p2').style.background="lightgreen";
                document.getElementById('p2').style.color="black";
                alert("Winner X is : "+play2);
            }
            reset();
        }
    } else {
        document.getElementById('p1').style.background="black";
        document.getElementById('p2').style.background="black";
        document.getElementById('p1').style.color="rgb(232, 248, 12)";
        document.getElementById('p2').style.color="rgb(232, 248, 12)";
        alert("Match is Draw");
        reset();
    }
}

function check(){
    if(document.getElementById('d1').innerHTML == document.getElementById('d2').innerHTML &&
    document.getElementById('d1').innerHTML !="" && document.getElementById('d2').innerHTML !="" 
    && document.getElementById('d3').innerHTML !="" && 
    document.getElementById('d2').innerHTML==document.getElementById('d3').innerHTML ){
        return true;
    }
}

function check2(){
    if(document.getElementById('d1').innerHTML == document.getElementById('d5').innerHTML &&
    document.getElementById('d1').innerHTML !="" && document.getElementById('d5').innerHTML !="" 
    && document.getElementById('d9').innerHTML !="" && 
    document.getElementById('d5').innerHTML==document.getElementById('d9').innerHTML ){
        return true;
    }
}

function check3(){
    if(document.getElementById('d7').innerHTML == document.getElementById('d8').innerHTML &&
    document.getElementById('d7').innerHTML !="" && document.getElementById('d8').innerHTML !="" 
    && document.getElementById('d9').innerHTML !="" && 
    document.getElementById('d8').innerHTML==document.getElementById('d9').innerHTML ){
        return true;
    }
}
function check4(){
    if(document.getElementById('d1').innerHTML == document.getElementById('d4').innerHTML &&
    document.getElementById('d1').innerHTML !="" && document.getElementById('d4').innerHTML !="" 
    && document.getElementById('d7').innerHTML !="" && 
    document.getElementById('d4').innerHTML==document.getElementById('d7').innerHTML ){
        return true;
    }
}
function check5(){
    if(document.getElementById('d3').innerHTML == document.getElementById('d6').innerHTML &&
    document.getElementById('d3').innerHTML !="" && document.getElementById('d6').innerHTML !="" 
    && document.getElementById('d9').innerHTML !="" && 
    document.getElementById('d6').innerHTML==document.getElementById('d9').innerHTML ){
        return true;
    }
}
function check6(){
    if(document.getElementById('d3').innerHTML == document.getElementById('d5').innerHTML &&
    document.getElementById('d3').innerHTML !="" && document.getElementById('d5').innerHTML !="" 
    && document.getElementById('d7').innerHTML !="" && 
    document.getElementById('d5').innerHTML==document.getElementById('d7').innerHTML ){
        return true;
    }
}
function check7(){
    if(document.getElementById('d4').innerHTML == document.getElementById('d5').innerHTML &&
    document.getElementById('d4').innerHTML !="" && document.getElementById('d5').innerHTML !="" 
    && document.getElementById('d6').innerHTML !="" && 
    document.getElementById('d5').innerHTML==document.getElementById('d6').innerHTML ){
        return true;
    }
}
function check8(){
    if(document.getElementById('d2').innerHTML == document.getElementById('d5').innerHTML &&
    document.getElementById('d2').innerHTML !="" && document.getElementById('d5').innerHTML !="" 
    && document.getElementById('d8').innerHTML !="" && 
    document.getElementById('d5').innerHTML==document.getElementById('d8').innerHTML ){
        return true;
    }
}
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("d"+i).innerHTML = "";
    }
    c=1;
}