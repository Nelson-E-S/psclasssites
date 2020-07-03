const main = document.querySelector('.main');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

const timing = 1;
const deg = 90;
const rdeg = 0;
main.addEventListener('pointerover',()=>{
    box1.style.transform = `rotate(${deg}deg)`;
    box1.style.transition = `all ${timing}s`;
    box2.style.transform = `rotate(${-1 * deg}deg)`;
    box2.style.transition = `all ${timing}s`;
    box3.style.transform = `rotate(${-1 * deg}deg)`;
    box3.style.transition = `all ${timing}s`;
    box4.style.transform = `rotate(${deg}deg)`;
    box4.style.transition = `all ${timing}s`;
});
main.addEventListener('pointerout',()=>{
    box1.style.transform = `rotate(${rdeg}deg)`;
    box1.style.transition = `all ${timing}s`;
    box2.style.transform = `rotate(${rdeg}deg)`;
    box2.style.transition = `all ${timing}s`;
    box3.style.transform = `rotate(${rdeg}deg)`;
    box3.style.transition = `all ${timing}s`;
    box4.style.transform = `rotate(${rdeg}deg)`;
    box4.style.transition = `all ${timing}s`;
});

const setBottomDiv = () =>{
    const text = document.querySelector('.sub');
    const mainRect = main.getBoundingClientRect();
    text.style.left = mainRect.x  + 'px';
    text.style.top = mainRect.y  + 'px';
}

window.addEventListener('load',setBottomDiv)
window.addEventListener('resize',setBottomDiv)