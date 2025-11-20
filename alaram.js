<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<title>Alarm</title>
<style>
body{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial;display:flex;flex-direction:column;align-items:center;gap:12px;padding:40px}
input,button{padding:8px 12px;font-size:16px}
#status{font-weight:600}
</style>
</head>
<body>
<h2>Alarm</h2>
<input id="time" type="time"/>
<button id="set">Set Alarm</button>
<button id="clear">Clear Alarm</button>
<div id="status">No alarm set</div>
<script>
<input id="time" type="time">
<button onclick="setAlarm()">Set</button>

<script>
let alarm;
function setAlarm(){
  alarm=document.getElementById("time").value;
  setInterval(()=>{
    let d=new Date();
    let t=d.getHours().toString().padStart(2,"0")+":"+
           d.getMinutes().toString().padStart(2,"0");
    if(t===alarm) alert("Alarm");
  },1000);
}
</script>

</script>
</body>
</html>
