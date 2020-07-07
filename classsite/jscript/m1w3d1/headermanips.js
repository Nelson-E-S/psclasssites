const h1 = document.getElementById('bigger');
const h2 = document.getElementById('big');
const h5 = document.getElementById('normal');

const getRndNum = () => {
    return Math.floor(Math.random() * 6 + 1);
}
const iSeeAll = () => {
    h2.style.display = "block";
    h5.style.display = "block";
}
const modifyHeader = () => {
    let rndNum = getRndNum();
    switch (rndNum){
        case 1:{
            h1.style.fontStyle = 'italic';
            iSeeAll();
            break;
        }
        case 2:{
            h2.innerHTML = "This is <span class=\"highlight\">Awesome!</span>";
            iSeeAll();
            break;
        }
        case 3:{
            h5.style.color = "blue";
            iSeeAll();
            break;
        }
        case 4:{
            h1.style.fontSize = "52pt";
            iSeeAll();
            break;
        }
        case 5:{
            h1.style.fontStyle = "normal";
            h2.style.display = "none";
            h5.style.display = "block";
            break;
        }
        case 6: {
            h1.style.fontStyle = "normal";
            h2.style.display = "block";
            h5.style.display = "none";
            break;
        }
        default:
            alert('Issue with modifyHeader function!');
    }
}