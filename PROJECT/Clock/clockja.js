function clock() {
  const date = new Date();
  let hr = date.getHours();
  let mt = date.getMinutes();
  let sc = date.getSeconds();
  let dt = date.getDate();
  let mu = date.getMonth();
  let yr = date.getFullYear();
  let day = date.getDay();

  // display time
  document.getElementById("clock").innerHTML = hr + " : " + mt + " : " + sc;

  // Find Date with month name
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let Month_check = months[mu];
  document.getElementById("date").innerHTML =
    dt + " / " + Month_check + " / " + yr;

  // chekc day
  const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let Day_check = Day[day];
  document.getElementById("day").innerHTML = Day_check;

  // AM PM Check
  let Am_Pm_check = hr < 12 ? "AM" : "PM";
  document.getElementById("AP").innerHTML = Am_Pm_check;

  setTimeout(clock, 1000);
}