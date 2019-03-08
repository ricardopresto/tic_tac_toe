let s0 = document.getElementById("s0");
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
let s54 = document.getElementById("s5");
let s6 = document.getElementById("s6");
let s7 = document.getElementById("s7");
let s8 = document.getElementById("s8");
let gameboard = document.getElementById("gameboard");

gameboard.addEventListener("click", clickFunction);

let playerOne = true;

let board = ["", "", "", "", "", "", "", "", ""];

let rows = [
  [board[0], board[1], board[2]],
  [board[3], board[4], board[5]],
  [board[6], board[7], board[8]],
  [board[0], board[3], board[6]],
  [board[1], board[4], board[7]],
  [board[2], board[5], board[8]],
  [board[0], board[4], board[8]],
  [board[2], board[4], board[6]]
];

function render() {
  let squares = gameboard.children;
  for (x = 0; x < board.length; x++) {
    squares[x].textContent = board[x];
  }
}

function clickFunction() {
  let clicked = String(event.srcElement.id).slice(1);
  if (board[clicked] == "") {
    if (playerOne == true) {
      board[clicked] = "O";
      playerOne = false;
    }
    else {
      board[clicked] = "X";
      playerOne = true;
    }
    render();
    updateRows();
    checkRows();
  }
}

function updateRows() {
  rows = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]]
  ];
}

function checkRows() {
  for (x = 0; x < rows.length; x++) {
    if (String(rows[x]) == "O,O,O" || String(rows[x]) == "X,X,X") {
      if (x == 0) {
        s0.style.color = "red";
        s1.style.color = "red";
        s2.style.color = "red";
      }
      if (x == 1) {
        s3.style.color = "red";
        s4.style.color = "red";
        s5.style.color = "red";
      }
      if (x == 2) {
        s6.style.color = "red";
        s7.style.color = "red";
        s8.style.color = "red";
      }
      if (x == 3) {
        s0.style.color = "red";
        s3.style.color = "red";
        s6.style.color = "red";
      }
      if (x == 4) {
        s1.style.color = "red";
        s4.style.color = "red";
        s7.style.color = "red";
      }
      if (x == 5) {
        s2.style.color = "red";
        s5.style.color = "red";
        s8.style.color = "red";
      }
      if (x == 6) {
        s0.style.color = "red";
        s4.style.color = "red";
        s8.style.color = "red";
      }
      if (x == 7) {
        s2.style.color = "red";
        s4.style.color = "red";
        s6.style.color = "red";
      }
    }
  }
}
