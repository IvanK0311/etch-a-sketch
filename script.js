let drawBoard = document.getElementById("draw-board");
let mouseDown = false;

function generateGrid(num) {
  for (let i = 0; i < num*num; i++) {
    const div = document.createElement('div');
    div.style.width = `${640/num}px`;
    div.style.height = `${640/num}px`;
    div.style.border = 'none';
    div.style.margin = '0';
    div.style.padding = '0';

    // Add a click event listener to each div
    div.addEventListener('mousedown', () => {
      mouseDown = true;
    });

    drawBoard.appendChild(div);
    console.log("div created");
  }

  // Add a mousemove event listener to the drawBoard
  drawBoard.addEventListener('mousemove', (event) => {
    if (mouseDown) {
      const div = document.elementFromPoint(event.clientX, event.clientY);
      if (div && div.tagName === 'DIV') {
        div.style.backgroundColor = 'black';
      }
    }
  });

  // Add a mouseup event listener to the drawBoard
  drawBoard.addEventListener('mouseup', () => {
    mouseDown = false;
  });
}

generateGrid(128);
