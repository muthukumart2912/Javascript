let btns = document.querySelectorAll('button')
let body = document.querySelector('body')

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        if(e.target.id){
            body.style.backgroundColor = e.target.id;
        }
    })
})