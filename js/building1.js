var sliderimg = document.querySelector('.slider-img')
var images = ['SAC1.JPG','SAC2.JPG','SAC3.JPG','SAC4.JPG','SAC5.JPG','SAC6.JPG','SAC7.png','SAC8.JPG']
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