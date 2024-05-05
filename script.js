// relate to gridcontainer div in html
const gridContainer = document.querySelector("#gridcontainer");

// iterate 16 times to create 16 rows of containers
for (i = 0; i < 16; i++) {
    const container = document.createElement("div");
    container.classList.add("container");
    gridContainer.appendChild(container);
    // iterate 16 times to create 16 children squares in each container
    for (j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener('mouseover', ()=> {
            square.classList.add("hover");
        })
        container.appendChild(square);
        
    }
} 
