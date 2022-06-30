var sliderimg = document.querySelector('.slider-img')
var images = ['art1.jpg','art2.jpg','art3.jpg','art4.jpg','art5.png','art6.png','art7.png','art8.png','art9.png','art10.png']
var i = 0;

function prev() {
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if(i>=images.length-1) i=-1;
    i++;
    return setImg();
}

function setImg() {
    return sliderimg.setAttribute('src', '/images/' + images[i]);
}