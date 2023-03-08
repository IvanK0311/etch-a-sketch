let drawBoard = document.getElementById("draw-board");
let mouseDown = false;
let select16 = document.getElementById("select-16")
let select32 = document.getElementById("select-32")
let select64 = document.getElementById("select-64")
let select128 = document.getElementById("select-128")
let clearBtn = document.getElementById("clear")
let currentSize = 16
let colorPicker = document.getElementById("color-picker")
let eraserBtn = document.getElementById("eraser")
let color = 'black'

function setCurrentColor(newColor) {
    color = newColor
}

colorPicker.oninput = (e) => setCurrentColor(e.target.value)

function generateGrid(currentSize) {
    drawBoard.innerHTML = ''; // Removes all elements from the div

    for (let i = 0; i < currentSize*currentSize; i++) {
    const div = document.createElement('div');
    div.classList.add('draw-board-cell'); // add a specific class to each div
    div.style.width = `${600/currentSize}px`;
    div.style.height = `${600/currentSize}px`;
    div.style.border = 'none';
    div.style.margin = '0';
    div.style.padding = '0';

    // Add a mousedown event listener to each div
    div.addEventListener('mousedown', () => {
      mouseDown = true;
    });

    drawBoard.appendChild(div);
    console.log("div created");
  }

  // Add a mousemove event listener to the drawBoard
  drawBoard.addEventListener('mousemove', (event) => {
    if (mouseDown) {
      const div = event.target;
      if (div && div.classList.contains('draw-board-cell')) {
        div.style.backgroundColor = color; // change the background color of only the divs with the specific class
      }
    }
  });

  // Add a mouseup event listener to the drawBoard
  drawBoard.addEventListener('mouseup', () => {
    mouseDown = false;
  });

  // Add a mouseleave event listener to the document object
  document.addEventListener('mouseleave', () => {
    mouseDown = false;
  });
}

generateGrid(currentSize)

// Add erase function
function clear() {
    drawBoard.innerHTML = '';
    generateGrid(currentSize)
}

select16.addEventListener("click", () => {
    currentSize = 16;
    generateGrid(currentSize);
})

select32.addEventListener("click", () => {
    currentSize = 32;
    generateGrid(currentSize);
})

select64.addEventListener("click", () => {
    currentSize = 64;
    generateGrid(currentSize);
});

select128.addEventListener("click", () => {
    currentSize = 128;
    generateGrid(currentSize);
});

clearBtn.addEventListener("click", () => {
    clear()
})

eraserBtn.addEventListener("click", () => {
    color = 'white'
})