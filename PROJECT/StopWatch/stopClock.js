var TimeId = -1;
var second = 0;
var minutes =0;
var hours = 0;
function tick() {
    second++;
    if (second == 60) {
        second = 0;
        minutes +=1;
    }
    if (minutes == 60) {
        minutes =0;
        hours += 1;
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("second").innerHTML = second;
}
var milS = 0;
var MilId = -1;
function milisecond(){
    document.getElementById("milisecond").innerHTML = milS;
    milS +=1;
    if (milS ==99) {
        milS = 0;
    }
}
function start() {
    if (TimeId == -1) {
        TimeId = setInterval(tick, 1000);
    }
    if (MilId == -1) {
        MilId = setInterval(milisecond,10);
    }
}
function stop() {
    if (TimeId != -1) {
        clearInterval(TimeId);
        TimeId = -1;
    }
    if (MilId != -1) {
        clearInterval(MilId);
        MilId = -1;
    }
}
function reset() {
    stop();
    second = -1;
    tick();
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("milisecond").innerHTML = 0;
}