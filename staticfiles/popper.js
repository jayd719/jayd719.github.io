function addInterSectionObserver() {
  // Select the grid element and filter child nodes to include only elements
  let tiles1 = Array.from(
    document.getElementById("sections").childNodes
  ).filter((node) => node.nodeType === Node.ELEMENT_NODE);

  // Create the Intersection Observer
  const inter = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("scale-0");
      } else {
        entry.target.classList.add("scale-0");
      }
    });

  });

  // Observe each tile
  tiles1.forEach((tile) => inter.observe(tile));
}