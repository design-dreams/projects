var image = ["img0717", "img03175", "img03174", "img0317", "img03172", "img03176", "img0617", "img0916", "img09162", "img0917", "img3956", "img4228"];

/* sets the background images for the small pictures shown on the home page */
/* adds event listener for a click to change picture to text */
var smImages = document.getElementsByClassName("smImg");
for (var i=0;i<smImages.length;i++) {
    smImages[i].style.backgroundImage = "url(images/" + image[i] + "-2.jpg)";
    smImages[i].addEventListener('click', showTxt);
}

/* toggles text in box when small image is clicked */
var text = document.querySelectorAll(".txt");
for (var i=0; i<text.length;i++) {
    text[i].style.display = "none";
}

function showTxt() {
    if (this.querySelector(".txt").style.display == "none") {
        this.querySelector(".txt").style.display = "block";
    } else {
        this.querySelector(".txt").style.display = "none";
    }
}

/*** SLIDE SHOW ***/

var slide;
/* sets the intial display of the slideshow to none */
document.querySelector("#slideshow").style.display = "none";

/* inserts onclick attribute for p.large to start slideshow */
var seeLargeImg = document.querySelectorAll(".large");
for (var i = 0; i<seeLargeImg.length; i++) {
    seeLargeImg[i].setAttribute("onclick", "slideShow(" + i + ")");
}

function slideShow(s) {
    var largeImage = "images/" + image[s] + "-6.jpg";
    document.querySelector("#gallery").style.display = "none";
    document.querySelector("#slideshow").style.display = "flex";
    document.querySelector(".slide").setAttribute("src", largeImage);
    slide = s;
}

/* changes slide when previous or next buttons clicked */
function changeSlide(c) {
    var x = slide + c;
    if (x == image.length) {
        x = 0;
    }
    if (x == -1) {
        x = image.length - 1;
    }
    slideShow(x);   
}

/* closes slide when x is clicked */
function closeSlides() {
    document.querySelector("#slideshow").style.display = "none";
    document.querySelector("#gallery").style.display = "flex";
}