var sliderimg = document.querySelector('.slider-img')
var images = ['ED1.JPG','ED2.JPG','ED3.JPG','ED4.JPG','ED5.PNG','ED6.PNG','ED7.PNG','ED8.PNG','ED9.PNG']
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