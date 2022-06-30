var sliderimg = document.querySelector('.slider-img')
var images = ['arc1.JPG','arc2.JPG','arc3.JPG','arc4.png','arc5.jpg']
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