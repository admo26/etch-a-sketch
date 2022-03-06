const container = document.querySelector("#container");
let size = 4;

function drawGrid(size){
for (let step = 0; step < size; step++) {
  const row = document.createElement("div");
  row.classList.add("flex-grid");
  container.appendChild(row);
  for (let step = 0; step < size; step++) {
    const box = document.createElement("div");
    box.classList.add("col");
    row.appendChild(box);
  }
}
const boxes = Array.from(document.querySelectorAll('.col'));
boxes.forEach(box => box.addEventListener('mouseover', changeColour));
}

drawGrid(size);




function changeColour(e) {
    e.target.classList.add("selected");
};

const button = document.querySelector('.button');
button.addEventListener('mousedown',reset);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function reset(){
    const boxes = Array.from(document.querySelectorAll('.selected'));
    boxes.forEach(box => box.classList.remove('selected'));
    size = prompt("How many squares do you want?", "4");
    removeAllChildNodes(container);
    drawGrid(size);
}

