function clock() {
    const date = new Date();
    var hr = date.getHours();
    var mt = date.getMinutes();
    var sc = date.getSeconds();
    var dt = date.getDate();
    var mu = date.getMonth();
    var yr = date.getFullYear();
    var day = date.getDay();

// display time
document.getElementById("clock").innerHTML = hr + " : " + mt + " : " + sc;

// Find Date with month name
let Month_Check = mu == 0 ? "January":
                  mu == 1 ? "February":
                  mu == 2 ? "March":
                  mu == 3 ? "April":
                  mu == 4 ? "May":
                  mu == 5 ? "June":
                  mu == 6 ? "July":
                  mu == 7 ? "August":
                  mu == 8 ? "September":
                  mu == 9 ? "October":
                  mu == 10 ? "November":
                  mu == 11 ? "December":
                  "0000";
document.getElementById("date").innerHTML = dt + " / " +Month_Check +" / "  + yr;

// chekc day
let C_Day = day == 0? "Sunday":
            day == 1? "Monday":
            day == 2? "Tuesday":
            day == 3? "Wednesday":
            day == 4? "Thursday":
            day == 5? "Friday":
            day == 6? "Saturday":
            "00000";
document.getElementById("day").innerHTML = C_Day;

// AM PM Check
let Am_Pm_check = hr <12?"AM":"PM";
document.getElementById("AP").innerHTML = Am_Pm_check;

setTimeout(clock, 1000);
}
