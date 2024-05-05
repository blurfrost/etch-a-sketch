// relate to gridcontainer div in html
const gridContainer = document.querySelector("#gridcontainer");
const gridSize = document.querySelector("#gridsize");
const confirmButton = document.querySelector("#confirm");
const squareInput = document.querySelector("#quantity");
const clearButton = document.querySelector("#clear");

// set initial number of squares on each side
const gridQuantitySquares = 16;
displayGridSize(gridQuantitySquares);
createGrid(gridQuantitySquares);

// function to change text dynamically based on no. of squares on each side
function displayGridSize(squares) {
    if (!squares) {
        gridSize.textContent = "Invalid input! Please input a number from 1 to 100."
    }
    else {
        gridSize.textContent = "Current size of grid: " + squares + " x " + squares;
    }
}

// function to create grid when page initially loads, and when a valid input is entered in the text box
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

// event listener to change number of squares on each side of the grid, when confirm button is pressed
confirmButton.addEventListener("click", () => {
    newSquares = squareInput.value;
    // clear value of text box
    squareInput.value = "";
    console.log(newSquares);
    if (newSquares > 0 && newSquares <= 100) {
        removeGrid(newSquares);
    }
    else {
        newSquares = 0;
    }
    displayGridSize(newSquares);
});

// function to completely delete the old grid, then regenerate a new grid based on the input in the text box
function removeGrid(squares) {
    gridContainer.innerHTML = "";
    createGrid(squares);
}

// function to clear the grid for repeated use, which clears each square of the class "hover"
clearButton.addEventListener("click", () => {
    const hovers = document.querySelectorAll(".hover");
    console.log(hovers);
    hovers.forEach((hover) => {
        hover.classList.remove("hover");
    })
});