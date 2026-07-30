let timerInterval=null,timerRemaining=0,timerRunning=false;
function fmt(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function startTimer(secs,label){
  stopTimer();timerRemaining=secs;timerRunning=true;
  document.getElementById('tl').textContent=label||I18N[currentLang].timer;
  document.getElementById('tdisp').textContent=fmt(secs);
  document.getElementById('tdn').style.display='none';
  document.getElementById('tb').classList.add('on');
  document.getElementById('tpb').textContent='⏸';
  timerInterval=setInterval(()=>{if(!timerRunning)return;timerRemaining--;document.getElementById('tdisp').textContent=fmt(timerRemaining);if(timerRemaining<=0){clearInterval(timerInterval);document.getElementById('tdn').style.display='block';document.getElementById('tdisp').textContent='00:00'}},1000)
}
function pauseTimer(){timerRunning=!timerRunning;document.getElementById('tpb').textContent=timerRunning?'⏸':'▶'}
function stopTimer(){clearInterval(timerInterval);timerRunning=false;document.getElementById('tb').classList.remove('on')}
