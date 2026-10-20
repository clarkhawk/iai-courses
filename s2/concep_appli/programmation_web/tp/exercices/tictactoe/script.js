let player = 'X';

function handleClick(event) {
  if (event.target.textContent) {
    // cell already taken, ignore click
    return;
  }
event.target.textContent = '#';
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
}

const gameCells = document.querySelectorAll("#grid > div");

for (const cell of gameCells) {
  cell.addEventListener("click", handleClick)
}