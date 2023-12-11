secondContainer = document.getElementById("section-two");

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 190) {
    
    ChangeCSS(".sectionsectionContainer-hidden", ".sectionsectionContainer", true);
    ChangeCSS(".scroll-div-hidden", ".scroll-div", true);
    ChangeCSS(".section-two-left-hidden", ".section-two-left", true);
  } else if (scroll < 190) {
    ChangeCSS(".scroll-div", ".scroll-div-hidden", true);
    ChangeCSS(".section-two-left", ".section-two-left-hidden", true);
    ChangeCSS(".sectionsectionContainer", ".sectionsectionContainer-hidden", true);
  }
});

