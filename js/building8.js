var sliderimg = document.querySelector('.slider-img')
var images = ['acad1.JPG','acad2.JPG','acad3.JPG','acad4.JPG','acad5.JPG']
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