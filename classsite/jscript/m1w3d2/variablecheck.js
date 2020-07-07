const rnd = () => {return Math.floor(Math.random() * 10 + 1);};
let x = rnd(),
    y = rnd(),
    z = rnd();
const xElem = document.getElementById('xVal');
const yElem = document.getElementById('yVal');
const zElem = document.getElementById('zVal');

xElem.innerHTML = x;

const findY = () => {
    yElem.innerHTML = y;
}
const findZ = () => {
    zElem.innerHTML = z;
}
const resetXYZ = () => {
    x = rnd();
    y = rnd();
    z = rnd();
    xElem.innerHTML = x;
    yElem.innerHTML = '?';
    zElem.innerHTML = '?';
}