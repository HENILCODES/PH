function ok(){
    var alt = document.getElementById('alt');
    alt.style.display = "none";
}
function Check() {
    var Us = document.Form1.User.value;
    var Nu = document.Form1.Number.value;
    var Pa = document.Form1.Password.value;
    var er = document.getElementById('error');
    var alt = document.getElementById('alt');

    var ok = document.getElementById('ok');
    var co = document.getElementById('continue');
    if (Us == "") {
        er.innerHTML="Enter User Name";
        alt.style.display = "block";
        return false;
    }
    else if (Nu == "") {
        er.innerHTML="Enter Number";
        alt.style.display = "block";
        return false;
    }
    else if(isNaN(Nu)){
        er.innerHTML="Number only 0 to 9 ";
        alt.style.display = "block";
        return false;
    }
    else if(Nu.length<10){
        er.innerHTML="Enter Minimum 10 altgitis Number";
        alt.style.display = "block";
        return false;
    }
    else if (Pa == "") {
        er.innerHTML="Enter Password";
        alt.style.display = "block";
        return false;
    }
    else if(Pa.length<8){
        er.innerHTML="Password Length Maximum 8 letter";
        alt.style.display = "block";
        return false;
    }
    else{
        er.innerHTML="Sign up Succes";
        alt.style.display = "block";
        co.style.display = "block";
        ok.style.display = "none";
    }
}
function conti(){
      var alt = document.getElementById('alt');
    alt.style.display = "none";
    document.getElementById('r').style.display = "block";
    setTimeout(function(){ window.location = "https://henilcodes.github.io/PH/"; },3000);  
    console.log("Register continue"); 
}
