const answersDiv = document.querySelector("#game-answer");

const colors = ["peg-1", "peg-2", "peg-3", "peg-4", "peg-5", "peg-6"];

function randomColor() {
  const n = Math.floor(Math.random() * colors.length);
  return colors[n];
}

window.addEventListener("load", function () {
  console.log("window loaded!");
  for (let i = 0; i < answersDiv.children.length; i++) {
    const color = randomColor();
    answersDiv.children[i].classList.add(color);
  }
});

function dragStart(e) {
  e.dataTransfer.setData("Text", e.target.title);
}

function dragging(e) {
  console.log(`I am dragging`);
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("Text");
  e.target.classList.add(data);
}

console.log(answersDiv.children.length);
