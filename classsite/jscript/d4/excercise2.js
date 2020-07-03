const b1 = document.querySelector('.box1');
const b2 = document.querySelector('.box2');

b1.addEventListener('pointerover', function() {
    b1.style.transform = 'scaleX(4)';
    b1.style.transition = 'all 1s';
    b2.style.transform = 'scaleX(4)';
    b2.style.transition = '1s 1s';
});
b1.addEventListener('pointerout', function() {
    b1.style.transform = 'scaleX(1)';
    b1.style.transition = 'all 1s';
    b2.style.transform = 'scaleX(1)';
    b2.style.transition = '1s 1s';
});
b2.addEventListener('pointerover', function() {
    b2.style.transform = 'scaleX(4)';
    b2.style.transition = 'all 1s';
    b1.style.transform = 'scaleX(4)';
    b1.style.transition = '1s 1s';
});
b2.addEventListener('pointerout', function() {
    b2.style.transform = 'scaleX(1)';
    b2.style.transition = 'all 1s';
    b1.style.transform = 'scaleX(1)';
    b1.style.transition = '1s 1s';
});