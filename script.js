const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

let dateNow = new Date();
let hourNow = dateNow.getHours();
let minutesNow = dateNow.getMinutes();
let secondsNow = dateNow.getSeconds();
let positionSeconds = (360 * secondsNow) / 60;
let positionMinutes = (360 * minutesNow) / 60 + positionSeconds / 60;
let positionHour = (360 * hourNow) / 12 + positionMinutes / 12;

function dateRefresh() {
  positionSeconds = positionSeconds + 6;
  positionMinutes = positionMinutes + 6 / 60;
  positionHour = positionHour + 3 / 360;

  PONTEIROHORA.style.transform = "rotate(" + positionHour + "deg)";
  PONTEIROMINUTO.style.transform =
    "rotate(" + positionMinutes + "deg)";
  PONTEIROSEGUNDO.style.transform =
    "rotate(" + positionSeconds + "deg)";
}
var interval = setInterval(dateRefresh, 1000);
