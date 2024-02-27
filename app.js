const headginOne = document.getElementById("nal");
const textTwo = document.getElementById("dis");
const nav = document.getElementById("nav-contianer");
const boxes = document.getElementById("boxes");
const codeImage = document.getElementById("codeiamge");
const projects = document.getElementById("projectscontainer");
const cnc = document.getElementById("cncs");
const skillscont = document.getElementById("gcont");

const pythonButton = document.getElementById("python");
const javaButton = document.getElementById("java");

let images = document.querySelectorAll("#skills");
function shuffleSkills() {
  for (let i = 0; i < images.length; i++) {
    let sign = "-";
    if (i % Math.floor(Math.random() * 10) == 0) {
      sign = "";
    }
    images[i].style.transform = `translate(${Math.floor(
      Math.random() * 50
    )}px, ${sign}${Math.floor(Math.random() * 250)}px) scale(${Math.random()})`;
  }
}
shuffleSkills();

document.getElementById("gcont").addEventListener("mouseenter", () => {
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = "translate(00px,00px) scale(1)";
  }
});

document.getElementById("gcont").addEventListener("mouseleave", () => {
  shuffleSkills();
});

function appendToUL(appendList, classStr) {
  UL = document.createElement("ul");
  UL.className = "nav nav-tabs";
  for (i = 0; i, appendList.length; i++) {
    li = document.createElement("li");
    li.className = classStr;
    li.innerText = appendList[i];
    UL.appendChild(li);
  }
  return UL;
}

function changeNavBar() {
  container1 = document.getElementById("navoptions1");
  container1.style.visibility = "hidden";
  container1.style - "display:none";
  navBar = document.getElementById("navOne");

  newContainer = document.createElement("div");
  newContainer.className = "container";
  newContainer.id = "navoption2";

  tabs = ["this", "that", "who"];

  newContainer.appendChild(appendToUL(tabs, "nav-item"));
  navBara.appendChild(newContainer);
}

function addBoxes(n) {
  if (document.documentElement.clientWidth > 800) {
    for (k = 0; k <= n; ++k) {
      let loader = document.createElement("div");
      loader.className = "loader";
      loader.style.top = `${Math.floor(Math.random() * 100)}%`;
      loader.style.left = `${Math.floor(Math.random() * 100)}%`;
      loader.style.scale = `1.${k}`;
      let cube = document.createElement("div");
      cube.className = "cube";
      for (i = 0; i <= 5; ++i) {
        let face = document.createElement("div");
        face.className = "face";
        cube.appendChild(face);
      }
      loader.appendChild(cube);
      boxes.appendChild(loader);
    }
  }
}

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

    let degree = Math.floor(Math.random() * 100);
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
    jacks[j].style.transitionDuration = `${
      Math.floor(Math.random() * 10) + 4
    }s`;
    jacks[j].style.top = "-200%";
  }
}

// INTILIZE
nav.style.opacity = 0;
skillscont.style.opacity = 0;
jacks(52);
addBoxes(20);

// scroll event
document.addEventListener("scroll", (event) => {
  let position = window.scrollY;

  headginOne.style.opacity = `${100 - position / 3.75}%`;
  nav.style.opacity = `${position / 4 - 10}%`;
  textTwo.style.opacity = `${position - 450}%`;
  codeImage.style.opacity = `${position - 700}%`;

  if (position / 2 < 255) {
    document.body.style.background =
      "rgb(" + [position / 2, position / 2, position / 2].join(",") + ")";
    document.body.style.color =
      "rgb(" + [255 - position, 255 - position, 255 - position].join(",") + ")";
  }

  if (position > 2) {
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


  if (position > 900 && position < 1700) {
    cnc.style.scale = `${position / 1950}`;
  }

  if (position > 1900) {
    cnc.style.scale = `${1700 / position}`;
  }

  C1 = [134, 239, 172];
  C2 = [59, 130, 246];
  C3 = [59, 130, 246];
  let topLimit = 2400;
  if (position > 2100 && position < topLimit) {
    nav.style.boxShadow = "none";
    document.body.style.color = "white";
    document.body.style.background = `linear-gradient(rgb(${
      topLimit + C1[0] - position
    }, ${topLimit + C1[1] - position}, ${topLimit + C1[2] - position}), rgb(${
      topLimit + C2[0] - position
    }, ${topLimit + C2[1] - position}, ${topLimit + C1[2] - position}), rgb(${
      topLimit + C3[0] - position
    }, ${topLimit + C3[1] - position}, ${topLimit + C2[2] - position}))`;

    skillscont.style.opacity = `${100 - (topLimit - position)}%`;
  }

  if (position > topLimit) {
    document.body.style.color = "white";
    nav.style.boxShadow = "none";
  }

  // console.log(position);
});
