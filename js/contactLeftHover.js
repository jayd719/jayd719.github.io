const rightSection = document.getElementById("rightSection");
const im = document.getElementById("jackImageContact");

rightSection.addEventListener("mouseover", () => {
  im.style.transform = "translateX(0px)";
});


rightSection.addEventListener("mouseleave", () => {
    im.style.transform = "translateX(625px) rotate(30deg)";
  });
  