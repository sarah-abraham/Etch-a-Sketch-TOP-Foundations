
const container = document.querySelector(".container");
let selectedColor = '#000000';
let squareBox = document.querySelectorAll(".square-box")

function createInitialGrid(){
    const height = window.innerHeight;
    const width = window.innerWidth;
    console.log(height, width);

    const rows = Math.floor(window.innerHeight / 16);
    const cols = Math.floor(window.innerWidth / 16);


    let i, j;
    for(i=0; i<rows; i++){
        for(j=0; j<cols; j++){
            const squareBox = document.createElement("div");
            squareBox.className = "square-box";
            container.appendChild(squareBox);
        }
    }
    addHoverEffect()
}

createInitialGrid();

function gridCreator(gridSize){
    const oldSquares = document.querySelectorAll('.square-box');
    oldSquares.forEach(oldSquare => oldSquare.parentNode.removeChild(oldSquare));
    container.style.height = `${16*gridSize}px`;
    container.style.width = `${16*gridSize}px`;
    for(i=0; i<gridSize; i++){
        for(j=0; j<gridSize; j++){
            const squareBox = document.createElement("div");
            squareBox.className = "square-box";
            container.appendChild(squareBox);
        }
    }
    addHoverEffect();
}

function colorAdder(squareBox){
    squareBox.style.backgroundColor = selectedColor;
}



function addHoverEffect(){
    squareBox = document.querySelectorAll(".square-box");
    squareBox.forEach(squareBox => {
    squareBox.addEventListener('mouseover', () => {
        console.log("hovering");
        colorAdder(squareBox)
    });
});
}




const updateGridSize = document.querySelector(".update-grid-size");
updateGridSize.addEventListener('click', () => {
    let gridSize = Number(prompt("Enter grid size less than 100: "));
    if(gridSize > 100 || gridSize < 1 || isNaN(gridSize)){
        alert("Please enter a number from 1 to 100");
        return;
    }
    gridCreator(gridSize)
})


// const colorSetter = document.querySelector(".color-setter");
// colorSetter.addEventListener('change', (event) => {
//     selectedColor = event.target.value;
// })