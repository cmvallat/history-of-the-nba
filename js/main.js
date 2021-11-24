var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var descriptions = [
    "The 1960s were an era defined by the rivalry between Bill Russell's Celtics and Wilt Chamberlain's Warriors and 76ers. While Wilt put up big numbers, Russell's Celtics won 9 out of the 10 championships of the decade, creating one of the greatest dynasties in NBA history and American sports. At this point in NBA history, there were few black players, so the quality of competition was lower, and resulted in a few teams like Russell's Celtics dominating inferior players.",
    "1970s",
    "1980s",
    "1990s",
    "2000s",
    "2010s",
  ];
  var desc = document.getElementById("desc");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  desc.innerHTML = descriptions[slideIndex - 1];
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//To add gif on hover functionality

//Get slideslow content
var W = document.getElementById("wilt");
var J = document.getElementById("DrJ");
var M = document.getElementById("magic");
var MJ = document.getElementById("MJ");
var K = document.getElementById("kobe");
var B = document.getElementById("bron");
var Sixties = document.getElementById("60");
var Seventies = document.getElementById("70");
var Eighties = document.getElementById("80");
var Nineties = document.getElementById("90");
var Zeros = document.getElementById("00");
var Tens = document.getElementById("10");

//Define what you want to happen
function changeW() {
  W.src = "./images/wilt.gif";
  console.log("change");
}
function backW() {
  W.src = "./images/60s.jpeg";
  console.log("back");
  document.body.style.cursor = "auto";
}

function changeJ() {
  J.src = "./images/DrJ.gif";
  console.log("change");
  document.body.style.cursor = url("./images/basketball.png");
}
function backJ() {
  J.src = "./images/70s.jpg";
  console.log("back");
  document.body.style.cursor = "auto";
}

function changeM() {
  M.src = "./images/magic.gif";
  console.log("change");
  document.body.style.cursor = url("./images/basketball.png");
}
function backM() {
  M.src = "./images/80s.jpg";
  console.log("back");
  document.body.style.cursor = "auto";
}

function changeMJ() {
  MJ.src = "./images/mj.gif";
  console.log("change");
  document.body.style.cursor = url("./images/basketball.png");
}
function backMJ() {
  MJ.src = "./images/90s.jpg";
  console.log("back");
  document.body.style.cursor = "auto";
}

function changeK() {
  K.src = "./images/kobe.gif";
  console.log("change");
  document.body.style.cursor = url("./images/basketball.png");
}
function backK() {
  K.src = "./images/00s.jpg";
  console.log("back");
  document.body.style.cursor = "auto";
}

function changeB() {
  B.src = "./images/bron.gif";
  console.log("change");
  document.body.style.cursor = url("./images/basketball.png");
}
function backB() {
  B.src = "./images/10s.jpg";
  console.log("back");
  document.body.style.cursor = "auto";
}

//Wire it up
Sixties.addEventListener("mouseover", changeW);
Sixties.addEventListener("mouseout", backW);
Seventies.addEventListener("mouseover", changeJ);
Seventies.addEventListener("mouseout", backJ);
Eighties.addEventListener("mouseover", changeM);
Eighties.addEventListener("mouseout", backM);
Nineties.addEventListener("mouseover", changeMJ);
Nineties.addEventListener("mouseout", backMJ);
Zeros.addEventListener("mouseover", changeK);
Zeros.addEventListener("mouseout", backK);
Tens.addEventListener("mouseover", changeB);
Tens.addEventListener("mouseout", backB);
