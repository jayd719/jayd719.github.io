function ChangeCSS(from, to, class_) {
  var var1 = $(from);

  if (class_) {
    var1.removeClass(from.slice(1)).addClass(to.slice(1));
    value = null;
  } else {
    value = document.getElementById(from.slice(1));
  }

  return value;
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
      document.body.appendChild(loader);
    }
  }
}

function addSpinner(n) {
  for (i = 0; i < n; ++i) {
    let newDiv = document.createElement("div");
    newDiv.className = "spinner";
    newDiv.style.top = `${Math.floor(Math.random() * 100)}%`;
    newDiv.style.left = `${Math.floor(Math.random() * 100)}%`;
    newDiv.style.scale = `${(k+1)/k}`;
    document.body.appendChild(newDiv);
  }
}

function hideJacks() {
  ChangeCSS(".spiral-image", ".spiral-image-alt", true);
  ChangeCSS(".jack-image", ".jack-image-final", true);
  ChangeCSS(".jack-image2", ".jack-image-final2", true);
  ChangeCSS(".jack-image3", ".jack-image-final3", true);
  ChangeCSS(".jack-image4", ".jack-image-final4", true);
  ChangeCSS(".locked-section", ".locked-section-alt", true);
  ChangeCSS(".main-container-hidden", ".main-container", true);
  ChangeCSS(".header-hidden", ".header", true);
  addBoxes(10);

  // document.body.style.background = "#010716";
  document.body.style.overscrollBehaviorX = "hidden";
  //ChangeCSS("#cover-image","cover-image",false).style.opacity="100%";
}
vP = document.getElementById("viewport");

function showContactSection() {
  ChangeCSS(".hover-section-hidden", ".hover-section", true);
  ChangeCSS(".header-alt", ".header-alt-two", true);
  vP.style = "filter: blur(20px);";
  document.body.style.overflow = "hidden";
}

function hideContactSection() {
  ChangeCSS(".hover-section", ".hover-section-hidden", true);

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 10) {
    ChangeCSS(".header-alt-two", ".header-alt", true);
  }
  document.body.style.overflow = "scroll";
  vP.style = "filter: blur(0px);";
}

function showAboutSection() {
  ChangeCSS(".about-section-hidden", ".about-section", true);
  ChangeCSS(".header-alt", ".header-alt-two", true);
  vP.style = "filter: blur(20px);";
  document.body.style.overflow = "hidden";
  let ImageContainer = document.getElementById("cards-container");

  let i = 0;
  while (i < 25) {
    let newImage = document.createElement("img");
    newImage.src = "images/jacks/jack.png";

    newImage.style.left = `${(i * 8) / 2}vw`;
    newImage.style.zIndex = i;
    newImage.style.transition = "1s";
    newImage.id = "jackImage";

    const whatToDo = [
      { transform: `translateX(-${4 * i}vw` },
      { transform: "translateX(0px)" },
    ];

    const howToDo = {
      duration: parseInt(`${100 * i}`),
      iterations: 1,
    };

    newImage.animate(whatToDo, howToDo);
    ImageContainer.appendChild(newImage);
    i++;
  }

  let images = document.querySelectorAll("#jackImage");

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseenter", () => {
      images[i].style.transform = "translateY(-20px)";
    });

    images[i].addEventListener("mouseleave", () => {
      images[i].style.transform = "translateY(0px)";
    });
  }
}

function hideAboutSection() {
  ChangeCSS(".about-section", ".about-section-hidden", true);

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 10) {
    ChangeCSS(".header-alt-two", ".header-alt", true);
  }
  document.body.style.overflow = "scroll";
  vP.style = "filter: blur(0px);";

  let ImageContainer = document.getElementById("cards-container");
  let images = document.querySelectorAll("#jackImage");

  for (let i = 0; i < images.length; i++) {
    ImageContainer.removeChild(images[i]);
  }
}
