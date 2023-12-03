let mouseText = document.getElementById('moving-text');

const newspaperSpinning = [
    { transform: "scale(1)", opacity: 100 },
    { transform: "scale(10)", opacity: 0 },
  ];
  
  const newspaperTiming = {
    duration: 1000,
    iterations: 1,
  };
  // Creating function that will tell the position of cursor
  // PageX and PageY will getting position values and show them in P
  function tellPos(p) {
    info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;
  
    test.style.top = `${p.pageY}px`
    test.style.left = `${p.pageX}px`
  
   
  
    
  }
  addEventListener('mousemove', tellPos, false);
  
  cont.addEventListener("wheel", () => {
    test.animate(newspaperSpinning, newspaperTiming);
  })