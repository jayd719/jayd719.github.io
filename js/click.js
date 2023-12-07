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

function sleep(ms) {
  var date = new Date();
  var curDate = null;

  do {
    curDate = new Date();
  } while (curDate - date < ms * 1000);
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
  document.body.style.background = "#1a191d";
  //ChangeCSS("#cover-image","cover-image",false).style.opacity="100%";
}
vP = document.getElementById('viewport')

function showContactSection() {
  ChangeCSS(".hover-section-hidden", ".hover-section", true);
  ChangeCSS(".header-alt", ".header-alt-two", true);
  vP.style="filter: blur(20px);"
  document.body.style.overflow = 'hidden';
}

function hideContactSection() {
  ChangeCSS(".hover-section", ".hover-section-hidden", true);

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 10) {
    ChangeCSS(".header-alt-two", ".header-alt", true);
  }
  document.body.style.overflow = 'scroll';
  vP.style="filter: blur(0px);"
}
