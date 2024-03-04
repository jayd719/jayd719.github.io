// functions
function upateDate() {
  const date = new Date();
  dateEmp = document.getElementById("dateEml");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateEmp.innerText = date.toLocaleDateString("en-us", options);
}

// dancingBot(10, 20);
function dancingBot(h, b) {
  let mainContainer = document.createElement("div");
  mainContainer.className = "bot";
  mainContainer.id = "bot";
  mainContainer.style.backgroundColor = "black";
  mainContainer.style.height = h;
  mainContainer.style.width = b;
  mainContainer.style.zIndex = "100";
  mainContainer.style.top = "200px";
  mainContainer.style.left = "100px";
  let img = document.createElement("img");
  img.width = 100;
  img.src = "assets/images/code/icons8-robot-100.png";
  mainContainer.appendChild(img);
  document.body.appendChild(mainContainer);
  console.log(mainContainer);
}

// let bot = document.getElementById("bot");
// setInterval(function () {
//   bot.style.top = `${Math.floor(Math.random() * 1000)}px`;
//   bot.style.left = `${Math.floor(Math.random() * 1000)}px`;
// }, 2000);

let main = document.getElementById("main");
let nav = document.getElementById("navbar");
let imageCon = document.getElementById("image");
main.style.opacity = 0;
nav.style.opacity = 0;
document.addEventListener("scroll", (event) => {
  let position = window.scrollY;

  main.style.opacity = position / 300;
  nav.style.opacity = position / 400;
  imageCon.style.opacity = 1 - position / 550;
  imageCon.style.left = `${position}px`;

  imageCon.style.scale = 1 + position / 900;

  // if (position > 2) {
  //   moveJacks();
  // }

  console.log(position);
});

function jacks(numberOfJacks) {
  let jacksContainer = document.getElementById("cards");
  for (i = 0; i < numberOfJacks; i++) {
    let img = new Image();
    img.src = "assets/images/jacks/jack1.jpeg";
    img.id = "jack-one";
    // img.className = `jack-image${Math.floor(Math.random() * 3) + 1}`;
    img.style.left = `${10 + Math.floor(Math.random() * 80)}%`;
    img.style.top = `${125 + Math.floor(Math.random() * 50)}%`;

    let degree = Math.floor(Math.random() * 100);
    if (i % 2 == 0) {
      img.style.transform = `rotate(-${degree}deg)`;
    } else {
      img.style.transform = `rotate(${degree}deg)`;
    }
    document.body.appendChild(img);
  }
}
// jacks(12);
function moveJacks() {
  let jacks = document.querySelectorAll("#jack-one");
  for (j = 0; j < jacks.length; j++) {
    jacks[j].style.transitionDuration = `${
      Math.floor(Math.random() * 10) + 4
    }s`;
    jacks[j].style.top = "-200%";
  }
}


