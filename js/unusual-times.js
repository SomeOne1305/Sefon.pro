let a = document.querySelector('audio');
let chart = document.querySelector('.circular-chart');
let output = document.getElementById('output')
let text = document.querySelector('text');
function na() {
  // output.innerHTML = Math.floor(a.currentTime);
  if (Math.floor(a.currentTime) < 10) {
    text.innerHTML =`00:0${Math.floor(a.currentTime)}`;
  } else if(Math.floor(a.currentTime) > 10 || Math.floor(a.currentTime) == 10){
    text.innerHTML =`00:${Math.floor(a.currentTime)}`;
  }else if(Math.floor(a.currentTime) > 60){
    // let min = Math.floor(a.currentTime/60)
    // let sec = Math.floor(a.currentTime%60)
      if (a.currentTime%60 < 10) {
        text.innerHTML = `0${Math.floor(a.currentTime/60)}:0${Math.floor(a.currentTime%60)}`
      } else {
        text.innerHTML = `0${Math.floor(a.currentTime/60)}: ${Math.floor(a.currentTime%60)}`
      }
    
  }
  }


let d =a.duration




function update(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    chart.querySelector('.circle').setAttribute('stroke-dasharray', `${progressPercent}, 100`)
    na()
  }
a.addEventListener('timeupdate', update)