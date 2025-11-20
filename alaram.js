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
let alarmTime=null, timer=null, ctx=null, osc=null
const t=document.getElementById("time")
const s=document.getElementById("status")
document.getElementById("set").addEventListener("click",()=>{
  if(!t.value) return
  alarmTime=t.value
  s.textContent="Alarm set for "+alarmTime
  if(timer) clearInterval(timer)
  timer=setInterval(check,500)
})
document.getElementById("clear").addEventListener("click",()=>{
  alarmTime=null
  s.textContent="No alarm set"
  if(timer){clearInterval(timer);timer=null}
  stopSound()
})
function nowTime(){
  const d=new Date()
  const hh=String(d.getHours()).padStart(2,"0")
  const mm=String(d.getMinutes()).padStart(2,"0")
  return `${hh}:${mm}`
}
function check(){
  if(!alarmTime) return
  if(nowTime()===alarmTime){
    trigger()
    clearInterval(timer)
    timer=null
    alarmTime=null
    s.textContent="Alarm triggered"
  }
}
function trigger(){
  if(window.Notification && Notification.permission!=="granted") Notification.requestPermission()
  if(window.Notification && Notification.permission==="granted") new Notification("Alarm","Your alarm is ringing")
  playBeep()
  alert("Alarm")
}
function playBeep(){
  if(!ctx) ctx=new (window.AudioContext||window.webkitAudioContext)()
  osc=ctx.createOscillator()
  const gain=ctx.createGain()
  osc.type="sine"
  osc.frequency.value=880
  gain.gain.value=0.2
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start()
  setTimeout(()=>{stopSound()},5000)
}
function stopSound(){ if(osc){try{osc.stop()}catch(e){} osc.disconnect();osc=null} }
</script>
</body>
</html>
