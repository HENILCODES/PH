function clock() {
    const date = new Date();
    var hr = date.getHours();
    var mt = date.getMinutes();
    var sc = date.getSeconds();
    var dt = date.getDate();
    var mu = date.getMonth();
    var yr = date.getFullYear();
    var day = date.getDay();

    document.getElementById("clock").innerHTML = hr + " : " + mt + " : " + sc;

    if (mu == 0) {
        document.getElementById("date").innerHTML = dt + " / January / " + yr;
    }
    else if (mu == 1) {
        document.getElementById("date").innerHTML = dt + " / February / " + yr;
    }
    else if (mu == 2) {
        document.getElementById("date").innerHTML = dt + " / March / " + yr;
    }
    else if (mu == 3) {
        document.getElementById("date").innerHTML = dt + " / April / " + yr;
    }
    else if (mu == 4) {
        document.getElementById("date").innerHTML = dt + " / May / " + yr;
    }
    else if (mu == 5) {
        document.getElementById("date").innerHTML = dt + " / June / " + yr;
    }
    else if (mu == 6) {
        document.getElementById("date").innerHTML = dt + " / July / " + yr;
    }
    else if (mu == 7) {
        document.getElementById("date").innerHTML = dt + " / August / " + yr;
    }
    else if (mu == 8) {
        document.getElementById("date").innerHTML = dt + " / September / " + yr;
    }
    else if (mu == 9) {
        document.getElementById("date").innerHTML = dt + " / October / " + yr;
    }
    else if (mu == 10) {
        document.getElementById("date").innerHTML = dt + " / November / " + yr;
    }
    else if (mu == 11) {
        document.getElementById("date").innerHTML = dt + " / December / " + yr;
    }
    else {
        alert("Error Find Date & time");
    }

    if (day == 0) {
        document.getElementById("day").innerHTML = "Sunday";
    }
    else if (day == 1) {
        document.getElementById("day").innerHTML = "Monday";
    }
    else if (day == 2) {
        document.getElementById("day").innerHTML = "Tuesday";
    }
    else if (day == 3) {
        document.getElementById("day").innerHTML = "Wednesday";
    }
    else if (day == 4) {
        document.getElementById("day").innerHTML = "Thursday";
    }
    else if (day == 5) {
        document.getElementById("day").innerHTML = "Friday";
    }
    else if (day == 6) {
        document.getElementById("day").innerHTML = "Saturday";
    }
    else {
        alert("Error find Date & Time");
    }

    if (hr < 12) {
        document.getElementById("AP").innerHTML = "AM";
    }
    else {
        document.getElementById("AP").innerHTML = "PM";
    }
    setTimeout(clock, 1000);
}
