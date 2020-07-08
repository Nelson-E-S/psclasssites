/*Simple example
idead is to setup an array of images srcs to input in a single image*/
var images = ['../../images/d1/arepas.jpeg','../../images/d1/hallaca.jpeg','../../images/d1/pabellon.jpg','../../images/d1/borrachos.jpg','../../images/d1/ensladapaparemolacha.jpg'];
var alts = ['arepas','hallacas','pabellon','borrachos dulce','ensalada de papa y remolacha ']
var imagesLength = images.length - 1;
var currentPic = 0;

const imageLoader = document.getElementById('imageLoader');

const changePic = x =>{
    currentPic += x;
    if (currentPic > imagesLength)
        currentPic = 0;
    if (currentPic < 0)
        currentPic = imagesLength;
    imageLoader.src = images[currentPic];
    imageLoader.alt = alts[currentPic];
    imageLoader.title = alts[currentPic];
};

/*other example
idea is to hide inactive images and only show active image*/
var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n){
    showSlide(slideIndex += n);
}
function showSlide(n){
    var i;
    var slides = document.getElementsByClassName('mySlides');
    if(n>slides.length)
        slideIndex = 1;
    if(n < 1)
        slideIndex = slides.length;
    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    slides[slideIndex - 1].style.display = "block";
};