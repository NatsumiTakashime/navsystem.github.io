var sliderimg = document.querySelector('.slider-img')
var images = ['ptbi1.JPG','ptbi2.JPG','ptbi3.JPG','ptbi4.JPG','ptbi5.JPG','ptbi6.JPG','ptbi7.JPG','ptbi8.JPG']
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