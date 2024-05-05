// relate to gridcontainer div in html
const gridContainer = document.querySelector("#gridcontainer");
const gridSize = document.querySelector("#gridsize");
const confirmButton = document.querySelector("#confirm");
const squareInput = document.querySelector("#quantity");
const clearButton = document.querySelector("#clear");

// set initial number of squares on each side
let gridQuantitySquares = 16;
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
            let darken = 0;
            square.addEventListener("mouseover", () => {
                // with each hover, the grid square gets gradually more black (up to an opacity of 1)
                square.style.backgroundColor = "black";
                if (darken < 11) {
                    darken += 1;
                    square.style.opacity = 0.3 + (darken - 1) * 0.07;
                } 
            });
            container.appendChild(square);
        }
    } 
}

// event listener to change number of squares on each side of the grid, when confirm button is pressed
confirmButton.addEventListener("click", () => {
    let newSquares = squareInput.value;
    // clear value of text box
    squareInput.value = "";
    if (newSquares > 0 && newSquares <= 100) {
        gridQuantitySquares = newSquares;
        restartGrid(newSquares);
    }
    else {
        newSquares = 0;
    }
    displayGridSize(newSquares);
});

// function to clear the grid for repeated use
clearButton.addEventListener("click", () => {
    restartGrid(gridQuantitySquares);
});

// creates new grid based on input number of squares on each side
function restartGrid(squares) {
    gridContainer.innerHTML = "";
    createGrid(squares);
}
