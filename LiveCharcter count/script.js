
    const display = document.querySelector('.output')
    const getInput = document.querySelector('textarea')

    function countwords(){
        const totalLength = getInput.value.length;
        display.textContent = totalLength

        //console.log(totalLength)
    }

    getInput.addEventListener('input',countwords)