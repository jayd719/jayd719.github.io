const headginOne = document.getElementById("nal");
const textTwo = document.getElementById("dis");
const nav = document.getElementById("nav-contianer");

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

function jacks(numberOfJacks) {
  let jacksContainer = document.getElementById("cards");
  for (i = 0; i < numberOfJacks; i++) {
    let img = new Image();
    img.src = "assets/images/jacks/jack1.jpeg";
    img.id = "jack-one";
    // img.className = `jack-image${Math.floor(Math.random() * 3) + 1}`;
    img.style.left = `${10 + Math.floor(Math.random() * 80)}%`;
    img.style.top = `${125 + Math.floor(Math.random() * 50)}%`;


    let degree = Math.floor(Math.random() * 100)
    if (i % 2 == 0) {
      img.style.transform = `rotate(-${degree}deg)`;
    } else {
      img.style.transform = `rotate(${degree}deg)`;
    }
    jacksContainer.appendChild(img);
  }
}

function moveJacks() {
  let jacks = document.querySelectorAll("#jack-one");
  for (j = 0; j < jacks.length; j++) {
    jacks[j].style.transitionDuration=`${Math.floor(Math.random() * 10)+4}s`;
    jacks[j].style.top = "-200%";
  }
}

// INTILIZE
nav.style.opacity = 0;
jacks(20);


// scroll event
document.addEventListener("scroll", (event) => {
  let position = window.scrollY;

  headginOne.style.opacity = `${100 - position / 1.75}%`;
  textTwo.style.opacity = `${position - 450}%`;

  if (position / 2 < 255) {
    document.body.style.backgroundColor =
      "rgb(" +
      [position / 2, position / 2 - 5, position / 2 - 5].join(",") +
      ")";
  }

  if (position>2){
    moveJacks();
  }

  // nav bar apperance
  nav.style.opacity = `${position / 4 - 50}%`;

  // condtional css
  if (position > 200) {
    document.body.style.color = "black";
  } else {
    document.body.style.color = "white";
  }

  console.log(position);
});
