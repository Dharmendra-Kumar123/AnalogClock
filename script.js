// 12 hour =360deg
// 1 hour= 360/12 =30
// h hours =30h+m/2
//
// 60min =30
// 1 min =30/60=1/2
//  m mins =(1/2)m

//  60min = 360deg
//  1 min = 360/60 = 6deg
//   m min =6m

//   60 sec=360deg
//   1sec = 360/60 =6deg
//   s sec = 6sec
let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();
  // Getting  hour , min m sec from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;
  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime, 1000);
