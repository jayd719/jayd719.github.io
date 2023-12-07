let circle = document.getElementById("circle");
var x = setInterval(function () {
  let varX = Math.floor(Math.random() * 950) + 100;
  let varY = Math.floor(Math.random() * 950) + 100;
  circle.style.top = `${varY}px`;
  circle.style.left = `${varX}px`;
}, 2000);






let earth = document.getElementById("earth");
var x = setInterval(function () {
  let varX = Math.floor(Math.random() * 950) + 100;
  let varY = Math.floor(Math.random() * 950) + 100;
  earth.style.top = `${varY}px`;
  earth.style.left = `${varX}px`;
}, 2000);