const h1 = document.getElementById('bigger');
const h2 = document.getElementById('big');
const h5 = document.getElementById('normal');

const getRndNum = () => {
    return Math.floor(Math.random() * 3 + 1);
}
const modifyHeader = () => {
    let rndNum = getRndNum();
    switch (rndNum){
        case 1:{
            h1.style.fontStyle = 'italic';
            break;
        }
        case 2:{
            h2.innerHTML = "This is <span class=\"highlight\">Awesome!</span>";
            break;
        }
        case 3:{
            h5.style.color = "blue";
            break;
        }
        default:
            alert('Issue with modifyHeader funtionc!');
    }
}