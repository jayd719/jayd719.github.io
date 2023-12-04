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
  document.body.style.background = "#242424";
  //ChangeCSS("#cover-image","cover-image",false).style.opacity="100%";
}
vP = document.getElementById('viewport')

function showContactSection() {
  ChangeCSS(".hover-section-hidden", ".hover-section", true);
  vP.style="filter: blur(20px);"
}

function hideContactSection() {
  ChangeCSS(".hover-section", ".hover-section-hidden", true);
  vP.style="filter: blur(0px);"
}
