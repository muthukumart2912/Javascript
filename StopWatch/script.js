window.onload =function(){
    let seconds = 0;
    let millSec = 0;
    let interval;

    const addSeconds = document.querySelector('.min')
    const addMilli = document.querySelector('.mill')
    const startbtn = document.querySelector('.start')
    const stopbtn = document.querySelector('.stop')
    const resetBtn = document.querySelector('.reset')

    startbtn.onclick = function(){
        clearInterval(interval);
        interval = setInterval(start, 10);
    }
    stopbtn.onclick = function(){
        clearInterval(interval);
        
    }
    resetBtn.onclick = function(){
        clearInterval(interval);
         seconds = 0;
         millSec = 0;
         addSeconds.innerHTML = "00";
         addMilli.innerHTML = "00"
    }

    function start(){
        millSec++;
        if(millSec<10){
            addMilli.innerHTML="0"+millSec
        }else{
            addMilli.innerHTML = millSec
        }

        if(millSec > 99){
            seconds++;
            addSeconds.innerHTML= seconds < 10 ? '0'+seconds :seconds;
            millSec=0;
        }
    }

}