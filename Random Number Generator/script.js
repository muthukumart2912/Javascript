(function(){
    let disp = document.querySelector('.display');
    let btn = document.querySelector('button')
    
    
    function genRandomNumber(){
        let randomNum  = Math.floor(Math.random()*100,0)
        disp.textContent = randomNum
    }
    
    btn.addEventListener('click',genRandomNumber);
})()