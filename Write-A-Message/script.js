const btn = document.querySelector('button')
const dis = document.querySelector('.display')



btn.addEventListener('click',function(){
    
    const getText = document.querySelector('input').value
    if(getText.trim() ===''){
        dis.textContent = 'Enter Message';
        dis.style.color = 'red'
    }else{
    dis.textContent = getText + " - Your Message is delivered"}
})