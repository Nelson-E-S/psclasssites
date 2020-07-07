const img = document.getElementById('sunmoon');
const btnSun = document.getElementById('sun');
const btnMoon = document.getElementById('moon');
const shuttle = document.getElementById('shuttle');

const changeSun = () =>{
    img.src = "../../images/m1w3d1/sun.jpg";
    btnSun.style.fontSize = "12pt";
    btnMoon.style.fontSize = "10pt";
    shuttle.style.display = "none";
};
const changeMoon = () =>{
    img.src = "../../images/m1w3d1/moon.jpg";
    btnMoon.style.fontSize = "12pt";
    btnSun.style.fontSize = "10pt";
    shuttle.style.display = "block";
} ;