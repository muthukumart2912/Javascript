let date = new Date();
let dayNum = date.getDay();
let quote;
let dayIS;

switch(dayNum){
    case 0:
        dayIS = 'Sunday';
        quote = 'hello this is sunday';
        break;
    case 1:
        dayIS = 'Monday';
        quote = 'hello this is sunday';
        break;
    case 2:
        dayIS = 'Tuesday';
        quote = 'hello this is sunday';
        break;
    case 3:
        dayIS = 'Wednesday';
        quote = 'hello this is wednesday';
        break;
    case 4:
        dayIS = 'Thursday';
        quote = 'hello this is Thursday';
        break;
    case 5:
        dayIS = 'Friday';
        quote = 'hello this is Friday';
        break;
    case 6:
        dayIS = 'Saturday';
        quote = 'hello this is Saturday';
        break;
    default:
        console.log('error')
        break;
}

let day = document.querySelector('h2')
day.innerHTML = `${dayIS}`;
let qut = document.querySelector('p')
qut.innerHTML = `${quote}`;
