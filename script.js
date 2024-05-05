// relate to gridcontainer div in html
const gridContainer = document.querySelector("#gridcontainer");
const invalidInput = document.querySelector("#invalid");
const confirmButton = document.querySelector("#confirm");
const squareInput = document.querySelector("#quantity");

let gridQuantitySquares = 16;
createGrid(gridQuantitySquares);

function createGrid(squares) {
    // iterate 16 times to create 16 rows of containers
    for (i = 0; i < squares; i++) {
        const container = document.createElement("div");
        container.classList.add("container");
        gridContainer.appendChild(container);
        // iterate 16 times to create 16 children squares in each container
        for (j = 0; j < squares; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () => {
                square.classList.add("hover");
            });
            container.appendChild(square);
        }
    } 
}