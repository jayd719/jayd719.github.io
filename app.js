window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll);
  if (scroll > 50) {
    ChangeCSS(".nav-bar", ".nav-bar-txt");
  } else if (scroll < 30) {
    ChangeCSS(".nav-bar-txt", ".nav-bar");
  }
});

function ChangeCSS(from, to) {
  let var1 = $(from);
  var1.removeClass(from.slice(1)).addClass(to.slice(1));
}

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

window.scrollTo(0, 0);
let navBar = document.getElementById("nav-bar");
function hideJacks() {
  ChangeCSS(".spiral-image", ".spiral-image-alt", true);
  ChangeCSS(".jack-image", ".jack-image-final", true);
  ChangeCSS(".jack-image2", ".jack-image-final2", true);
  ChangeCSS(".jack-image3", ".jack-image-final3", true);
  ChangeCSS(".jack-image4", ".jack-image-final4", true);
  ChangeCSS(".locked-section", ".locked-section-alt", true);
  navBar.style.opacity = "100%";
  // addBoxes(10);
  document.body.style.overflow = "scroll";
}

addBoxes(10);
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
