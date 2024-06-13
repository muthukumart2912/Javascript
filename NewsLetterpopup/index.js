function toggleNewsLetter(){
    const getNewsletter = document.getElementById('newsLetter');
    getNewsletter.classList.toggle('active')
}

function closeNewsLetter(){
    const getNewsletter = document.getElementById('newsLetter');
    getNewsletter.classList.remove('active')
    
}