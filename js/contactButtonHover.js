const contactButton = document.getElementById("contact-button");
let prev = 0;
function randomColor() {
  const colorArray = [
    "#2EC4B6",
    "#E71D36",
    "#FF9F1C",
    "#072AC8",
    "#1E96FC",
    "#5C5D8D",
  ];
  
  let no = Math.floor(Math.random() * colorArray.length);
  while(no ==prev){
    no = Math.floor(Math.random() * colorArray.length);
  }
  prev = no;
  return colorArray[no];
}

contactButton.addEventListener("mouseover", () => {
  contactButton.style.backgroundColor = randomColor();
});
contactButton.addEventListener("mouseleave", () => {
  contactButton.style.backgroundColor = "#c6ff7d";
});
