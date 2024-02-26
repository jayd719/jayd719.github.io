const headginOne = document.getElementById("nal");
const nav = document.getElementById("nav-contianer");
const textTwo = document.getElementById("dis");
const codeImage = document.getElementById("codeiamge");

nav.style.opacity = 0;
document.addEventListener("scroll", (event) => {
  let position = window.scrollY;

  headginOne.style.opacity = `${100 - position / 3.75}%`;
  nav.style.opacity = `${position / 4 - 10}%`;
  textTwo.style.opacity = `${position - 450}%`;
  codeImage.style.opacity = `${position - 700}%`;

  if (position / 2 < 255) {
    document.body.style.background =
      "rgb(" + [position / 2, position / 2, position / 2].join(",") + ")";
      document.body.style.color = "rgb(" + [255-position, 255-position, 255-position].join(",") + ")";
  }

 
  console.log(position);
});
