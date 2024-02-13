const board = document.getElementById("board");
const cells = [];
let currentPlayer = "X";

for (let i = 0; i < 3; i++) {
  const row = document.createElement("div");
  row.className = "row";
  board.appendChild(row);

  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("div");
    cell.className = "cell clickable";
    cell.id = `${i}-${j}`;
    row.appendChild(cell);
    cells.push(cell);
  }
}


document.getElementById('board').setAttribute("style","width:500px");


function resetGame() {
  
  currentPlayer = "X";
  for (const cell of cells) {
    cell.textContent = "";
    cell.classList.remove("x");
    cell.classList.remove("o");
  }
  
}

let moves = 0;

function dealWithUserMove(event) {
  if (event.target.textContent !== "") return;
  event.target.textContent = currentPlayer;
  event.target.classList.add(currentPlayer.toLowerCase());
  moves++;

  if (checkForWin(currentPlayer)) {
    alert(`Player ${currentPlayer} wins!`);
    moves = 0;
    resetGame();
    return;
  }

  if (moves === 9) {
    alert("It's a draw!");
    moves = 0;
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

cells.forEach((cell) => cell.addEventListener("click", dealWithUserMove));

function checkForWin(player) {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if (
      (cells[3 * i].textContent === player &&
        cells[3 * i + 1].textContent === player &&
        cells[3 * i + 2].textContent === player) ||
      (cells[i].textContent === player &&
        cells[i + 3].textContent === player &&
        cells[i + 6].textContent === player)
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    (cells[0].textContent === player && cells[4].textContent === player && cells[8].textContent === player) ||
    (cells[2].textContent === player && cells[4].textContent === player && cells[6].textContent === player)
  ) {
    return true;
  }

  return false;
}