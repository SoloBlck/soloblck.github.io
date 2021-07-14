// function by Nigol.

function startTime() {
    var monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet","Août","Septembre","Octobre","Novembre","Decembre"];

  var today = new Date();
  var h = today.getHours();
  if (h < 10) { h = '0'+h; } 
  var m = today.getMinutes(); 
  var s = today.getSeconds();
  // var year = today.getFullYear();
  var monthIndex = today.getMonth();
  var month = monthNames[monthIndex];
  var day = today.getDate();  
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("showRealTime").innerHTML = `${month} ${day} | ${h}:${m}:${s}`;
  setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}