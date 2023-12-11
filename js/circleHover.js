let circle = document.getElementById("circle");

let moving = true;

var x = setInterval(function () {
  if (moving) {
    let varX = Math.floor(Math.random() * 950) + 100;
    let varY = Math.floor(Math.random() * 950) + 100;
    circle.style.top = `${varY}px`;
    circle.style.left = `${varX}px`;
  }
}, 2000);

circle.addEventListener("mouseenter", () => {
  moving = false;
  ChangeCSS(".chatBox-hidden", ".chatBox", true);
});

circle.addEventListener("mouseleave", () => {
  moving = true;
  ChangeCSS(".chatBox", ".chatBox-hidden", true);
});
