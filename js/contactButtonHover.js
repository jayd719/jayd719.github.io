const contactButton = document.getElementById("contact-button");
const colorArray = ["#2EC4B6", "#E71D36", "#FF9F1C","#072AC8","#1E96FC","#5C5D8D"];
contactButton.addEventListener("mouseover", () => {
    let no = Math.floor(Math.random() *  colorArray.length);
    contactButton.style.backgroundColor=colorArray[no];
});

contactButton.addEventListener('mouseleave',()=>{contactButton.style.backgroundColor='#c6ff7d'})



