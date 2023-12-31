const scrollingDiv = document.getElementById("scrolling-div");
const content = document.getElementById("content");
const originalContent = content.innerHTML;
const itemCount = 4; // Number of items to show at a time
let scrollPosition = 0;
let scrolling = true;

function updateScrollPositionLeft() {
  if (scrollPosition >= content.offsetWidth - scrollingDiv.offsetWidth) {
    scrollPosition = 0;
    content.innerHTML += originalContent;
  }

  content.style.transform = `translateX(-${scrollPosition}px)`;
  scrollPosition += 0.5; // Adjust this value for the scrolling speed
  requestAnimationFrame(updateScrollPositionLeft);
}

updateScrollPositionLeft();
