setInterval(function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session;

  h > 12 ? (session = "PM") : (session = "AM");
  h > 12 ? (h = h - 12) : h;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = `${h}:${m}:${s}`;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("session").innerText = session;
}, 1000);
