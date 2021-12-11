// input
function keyDownHandler(e) {
  key = e.key;
}

// processing
function update() {
  // get tail positions
  tailPositions.unshift({ col: head.col, row: head.row });
  if (tailPositions.length > tails.length) tailPositions.length = tails.length;
  // update tail tailPositions
  for (let i = 0; i < tails.length; i++) {
    tails[i].col = tailPositions[i].col;
    tails[i].row = tailPositions[i].row;
  }

  // validate movement
  if (key === "ArrowRight") {
    if (head.dir !== "left") {
      head.dir = "right";
    } else {
      head.dir = "left";
    }
  }

  if (key === "ArrowLeft") {
    if (head.dir !== "right") {
      head.dir = "left";
    } else {
      head.dir = "right";
    }
  }

  if (key === "ArrowUp") {
    if (head.dir !== "down") {
      head.dir = "up";
    } else {
      head.dir = "down";
    }
  }

  if (key === "ArrowDown") {
    if (head.dir !== "up") {
      head.dir = "down";
    } else {
      head.dir = "up";
    }
  }

  // update head position
  if (head.dir === "right") {
    head.col += 1;
    if (head.col >= COLS) head.col = 0;
  }
  if (head.dir === "left") {
    head.col -= 1;
    if (head.col <= -1) head.col = COLS - 1;
  }
  if (head.dir === "down") {
    head.row += 1;
    if (head.row >= ROWS) head.row = 0;
  }
  if (head.dir === "up") {
    head.row -= 1;
    if (head.row <= -1) head.row = ROWS - 1;
  }

  // collision head<-->food
  if (head.col === food.col && head.row === food.row) {
    // grow tail
    const tail = Object.create(Rectangle);
    tail.col = -2;
    tail.row = -2;
    tail.color = "cornflowerblue";
    renderArray.push(tail);
    tails.push(tail);

    // respawn food
    food.col = getRndInteger(0, COLS - 1);
    food.row = getRndInteger(0, ROWS - 1);
  }

  // collision head<-->tail
  for (let i = 0; i < tails.length; i++) {
    if (head.col === tails[i].col && head.row === tails[i].row) {
      clearInterval(snakeGame);
    }
  }

  draw();
}

// get Random Integer
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// output
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (renderArray.length != 0) {
    for (let i = 0; i < renderArray.length; i++) {
      ctx.fillStyle = renderArray[i].color;
      ctx.fillRect(renderArray[i].col * BASE, renderArray[i].row * BASE, BASE, BASE);
    }
  }
}

// init program

// input
let key = "";

// game arrays
const renderArray = [];
const tailPositions = [];
const tails = [];

// map
const BASE = 8;
const COLS = 100;
const ROWS = 100;
const WIDTH = BASE * COLS;
const HEIGHT = BASE * ROWS;


// objects
const Rectangle = {
  col: 0,
  row: 0,
  color: "white",
  dir: ""
};

// html5 canvas config and init
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.background = "black";
document.body.appendChild(canvas);


// add eventlistener
document.addEventListener("keydown", keyDownHandler);

// create head
const head = Object.create(Rectangle);
head.col = 3;
head.row = 3;
head.color = "white";
renderArray.push(head);


// create food
const food = Object.create(Rectangle);
food.col = getRndInteger(0, COLS - 1);
food.row = getRndInteger(0, ROWS - 1);
food.color = "tomato";
renderArray.push(food);



// draw first frame
draw();


// start gameLoop
const snakeGame = setInterval(update, 60);