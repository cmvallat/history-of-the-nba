var slideIndex = 1;
showSlides(slideIndex);

var stars;

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
    "The 1960s were an era defined by the rivalry between Bill Russell's Celtics and Wilt Chamberlain's Warriors and 76ers. While Wilt put up big numbers, Russell's Celtics won 9 out of the 10 championships of the decade, creating one of the greatest dynasties in NBA history and American sports. At this point in NBA history, there were few black players, but that number would soon grow towards the end of the decade. Also, in 1967, the American Basketball Association, or ABA, emerged as competition to the NBA.",
    "NBA Basketball in the 1970s saw the NBA's absorption of the ABA, leading to an increase in teams, players and fans, and helped grow the NBA into the global conglomerate it is today. The New York Knicks were one of the main teams in this era, featuring stars such as Walt Frazier, Earl Monroe, Willis Reed, and David DeBusschere.",
    "Like the 1960s, the 1980s were also defined by a rivalry, this time between Larry Bird and his Celtics and Magic Johnson's Lakers. The Lakers and Celtics combined to win 8 out of the 10 championships of the decade, and Bird and Johson won 5 combined MVPs. The mid and late 1980s also saw the emergence of Michael Jordan and the Chicago Bulls, who battled it out with the Bad Boy Pistons in the Eastern Conference.",
    "The 1990s were the age of Michael Jordan, who won back-to-back-to-back championships twice in an 8 year span. Jordan's popularity helped the NBA become a truly global sport, along with the leadership of commissioner David Stern.",
    "The beginning of the 2000s in the NBA saw the dynamic duo of Kobe Bryant and Shaquille O'Neal, who teamed up to three-peat from '99-'01. Tim Duncan's San Antonio Spurs were also a dynasty, winning the championship in '03, '05 and '07. The 00s saw the rise of baggy shorts and was exemplified in spirit by Allen Iverson, who influenced NBA culture with his attitude and style greatly.",
    "Like Jordan in the 90s, the 2010s were dominated by LeBron James, who appeared in 8 straight finals from 2011-2018, winning 3. Also noted was the emergence of Steph Curry, who became a cultural phenomenon for his shooting abilities. Off the court, the 2010s have been defined by fighting for social justice from the players, including the firing of Clippers owner David Sterling for racist remarks, and protests against police brutality.",
  ];
  var decades = ["60", "70", "80", "90", "00", "10"];
  var json = {
    players: [
      {
        name: "Wilt Chamberlain",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "60",
        PPG: "30.1",
        RPG: "22.9",
        APG: "4.4",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Bill Russell",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "60",
        PPG: "15.1",
        RPG: "22.5",
        APG: "4.3",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Oscar Robertson",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "60",
        PPG: "25.7",
        RPG: "7.5",
        APG: "9.5",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Julius Erving",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "70",
        PPG: "24.2",
        RPG: "8.5",
        APG: "4.2",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Kareem Abdul-Jabbar",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "70",
        PPG: "24.6",
        RPG: "11.2",
        APG: "3.6",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Jerry West",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "70",
        PPG: "27.0",
        RPG: "5.8",
        APG: "6.7",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Magic Johnson",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "80",
        PPG: "19.5",
        RPG: "7.2",
        APG: "11.2",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Larry Bird",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "80",
        PPG: "24.3",
        RPG: "10.0",
        APG: "6.3",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Michael Jordan",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "80",
        PPG: "30.1",
        RPG: "6.2",
        APG: "5.3",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Michael Jordan",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "90",
        PPG: "30.1",
        RPG: "6.2",
        APG: "5.3",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Hakeem Olajuwon",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "90",
        PPG: "21.8",
        RPG: "11.1",
        APG: "2.5",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Karl Malone",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "90",
        PPG: "25.0",
        RPG: "10.1",
        APG: "3.6",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Kobe Bryant",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "00",
        PPG: "25.0",
        RPG: "5.2",
        APG: "4.7",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Tim Duncan",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "00",
        PPG: "19.0",
        RPG: "10.8",
        APG: "3.0",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Shaquille O'Neal",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "00",
        PPG: "23.7",
        RPG: "10.9",
        APG: "2.5",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "LeBron James",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "10",
        PPG: "27.0",
        RPG: "7.4",
        APG: "7.4",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Steph Curry",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "10",
        PPG: "24.3",
        RPG: "4.6",
        APG: "6.5",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
      {
        name: "Kevin Durant",
        bio: "Wilt was a beast.",
        years: "1959-1972",
        decade: "10",
        PPG: "27.0",
        RPG: "7.1",
        APG: "4.2",
        FF: "Fun fact about Wilt is that he is good at basketball",
      },
    ],
  };

  /*
  function dec(json) {
    const star1 = json.filter((obj) => (obj.decade = "80"));
    console.log(star1);
    return star1;
  }
  var first = dec(json);
  console.log(first);
  */

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
  var j = 0;
  for (let i = 0; i < json.players.length; i++) {
    //LOOP THROUGH ALL THE PLAYERS IN THE LIST
    if (json.players[i].decade == decades[slideIndex - 1]) {
      //GET THE ONES THAT MATCH THE DECADE BEING DISPLAYED
      j++;
      stars = json.players[i];
      console.log(stars.name);
      //DETERMINE WHICH CARD PLAYER IS DISPLAYED ON BASED ON HOW MANY
      //STARS HAVE ALREADY BEEN DISPLAYED (THERE WILL ALWAYS BE 3 FOR EACH DECADE)
      if (j === 1) {
        document.getElementById("1T").innerHTML = stars.name;
        document.getElementById("1P").innerHTML = "PPG: " + stars.PPG;
        document.getElementById("1R").innerHTML = "RPG: " + stars.RPG;
        document.getElementById("1A").innerHTML = "APG: " + stars.APG;
        document.getElementById("card1-img").src = `./images/${stars.name}.jpg`;
        console.log(document.getElementById("card1-img").src);
      }
      if (j === 2) {
        document.getElementById("2T").innerHTML = stars.name;
        document.getElementById("2P").innerHTML = "PPG: " + stars.PPG;
        document.getElementById("2R").innerHTML = "RPG: " + stars.RPG;
        document.getElementById("2A").innerHTML = "APG: " + stars.APG;
        document.getElementById("card2-img").src = `./images/${stars.name}.jpg`;
      }

      if (j === 3) {
        document.getElementById("3T").innerHTML = stars.name;
        document.getElementById("3P").innerHTML = "PPG: " + stars.PPG;
        document.getElementById("3R").innerHTML = "RPG: " + stars.RPG;
        document.getElementById("3A").innerHTML = "APG: " + stars.APG;
        document.getElementById("card3-img").src = `./images/${stars.name}.jpg`;
      }
      /*
      
      */
    }
  }
  console.log(stars + "after");

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
//var card1 = document.getElementById("card1");

//Define what you want to happen
function changeW() {
  W.src = "./images/wilt.gif";
}
function backW() {
  W.src = "./images/60s.jpeg";
}

function changeJ() {
  J.src = "./images/DrJ.gif";
}
function backJ() {
  J.src = "./images/70s.jpg";
}

function changeM() {
  M.src = "./images/magic.gif";
}
function backM() {
  M.src = "./images/80s.jpg";
}

function changeMJ() {
  MJ.src = "./images/mj.gif";
}
function backMJ() {
  MJ.src = "./images/90s.jpg";
}

function changeK() {
  K.src = "./images/kobe.gif";
}
function backK() {
  K.src = "./images/00s.jpg";
}

function changeB() {
  B.src = "./images/bron.gif";
}
function backB() {
  B.src = "./images/10s.jpg";
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
//card1.addEventListener("click", reveal1);

let button = document.getElementById("sources");
let aside = document.getElementById("modal");

function toggleModal() {
  aside.classList.toggle("active");
}

button.addEventListener("click", toggleModal);
aside.addEventListener("click", toggleModal);
