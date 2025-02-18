function generateIndex(containerId = "index") {
    const headings = document.querySelectorAll("h2,h3, h4, h5, h6");
    if (!headings.length) {
        console.warn("No headings found in the document.");
        return;
    }

    // Create the container for the index
    let container = document.getElementById(containerId);
    if (!container) {
        container = document.createElement("div");
        container.id = containerId;
        document.body.insertBefore(container, document.body.firstChild);
    }
    container.innerHTML = `<h3 style='margin-top:15px;'>Table of Contents</h3>`;

    const indexList = document.createElement("ul");
    indexList.className = "menu"
    container.appendChild(indexList);

    headings.forEach(heading => {
        const level = parseInt(heading.tagName[1]);
        const listItem = document.createElement("li");

        if (!heading.id) {
            heading.id = `91oz.-${Math.random().toString(36).substr(2, 9)}`;
        }
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.className = "m-0 p-0"
        link.textContent = heading.textContent;
        listItem.appendChild(link);
        listItem.style.marginLeft = `${(level - 1) * 10}px`;

        indexList.appendChild(listItem);
    });
    container.classList.add("lg:w-72", "overflow-y-scroll", "pl-2", "border", "print:border-0")
}

