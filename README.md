# snakeGame HTML5 Canvas
If you want to practice your javaScript gameDev skills you've come to the right place! In this mini tutorial we build the core mechanics of the beloved oldschool snake game using HTML5 Canvas and javaScript. Have fun!

Go ahead and play with the code on CodeSandbox -> https://codesandbox.io/s/snakegame-um42p

## Step 01: Basic structure
```javascript
// input

// processing

// output

// init program
```
## Step 02: Get user input
```javascript
// input
function keyDownHandler(e) {
  console.log(e.key);
}

// processing

// output

// init program

// add eventlistener
document.addEventListener("keydown", keyDownHandler);
```

## Step 03: Move Rectangle
```javascript
// input
function keyDownHandler(e) {
  update(e.key);
}

// processing
function update(key) {
  // move player
  if (key === "ArrowRight") {
    Rectangle.x += 1;
  }
  if (key === "ArrowLeft") {
    Rectangle.x -= 1;
  }
  if (key === "ArrowUp") {
    Rectangle.y -= 1;
  }
  if (key === "ArrowDown") {
    Rectangle.y += 1;
  }

  // output in console
  console.log(key);
  console.log(Rectangle);
}
// output

// init program

// objects
const Rectangle = {
  x: 0,
  y: 0
};

// add eventlistener
document.addEventListener("keydown", keyDownHandler);
```

## Step 04: Set up HTML5 Canvas
```javascript
//input
function keyDownHandler(e) {
  update(e.key);
}

// processing
function update(key) {
  console.log(key);
  // move player
  if (key === "ArrowRight") {
    Rectangle.x += 1;
  }
  if (key === "ArrowLeft") {
    Rectangle.x -= 1;
  }
  if (key === "ArrowUp") {
    Rectangle.y -= 1;
  }
  if (key === "ArrowDown") {
    Rectangle.y += 1;
  }
  // draw after updating
  draw();
}

// output
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.fillStyle = "#fff";
  ctx.fillRect(Rectangle.x, Rectangle.y, 50, 50);
}

// init program

// global variables

// objects
const Rectangle = {
  x: 0,
  y: 0
};

// HTML5 canvas init
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
canvas.style.background = "#000";
document.body.appendChild(canvas);

// add eventlistener
document.addEventListener("keydown", keyDownHandler);
```

## Step 05: Grid based movement
```javascript
//input
function keyDownHandler(e) {
  update(e.key)
}

// processing
function update(key) {
  // move player
  if (key === "ArrowRight") {
    Rectangle.col += 1;
  }
  if (key === "ArrowLeft") {
    Rectangle.col -= 1;
  }
  if (key === "ArrowUp") {
    Rectangle.row -= 1;
  }
  if (key === "ArrowDown") {
    Rectangle.row += 1;
  }
  // draw
  draw();
} 

// output
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(Rectangle.col * BASE, Rectangle.row * BASE, BASE, BASE);
}

// program init

// global variables

// map
const BASE = 32;
const COLS = 15;
const ROWS = 10;
const WIDTH = BASE * COLS;
const HEIGHT = BASE * ROWS;

// objects 
const Rectangle = {
  col: 0,
  row: 0
};

// HTML5 canvas init
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.background = "#000";
document.body.appendChild(canvas);

// add eventlistener
document.addEventListener("keydown", keyDownHandler);


// draw first frame
draw();
```

## Step 06: Screenwrapping player
```javascript
//input
function keyDownHandler(e) {
  update(e.key)
}

// processing
function update(key) {
  // move player
  if (key === "ArrowRight") {
    Rectangle.col += 1;
    if (Rectangle.col >= COLS) Rectangle.col = 0;
  }
  if (key === "ArrowLeft") {
    Rectangle.col -= 1;
    if (Rectangle.col <= -1) Rectangle.col = COLS - 1; 
  }
  if (key === "ArrowUp") {
    Rectangle.row -= 1;
    if (Rectangle.row <= -1) Rectangle.row = ROWS - 1; 
  }
  if (key === "ArrowDown") {
    Rectangle.row += 1;
    if (Rectangle.row >= ROWS) Rectangle.row = 0;
  }
  // draw
  draw();
} 

// output
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(Rectangle.col * BASE, Rectangle.row * BASE, BASE, BASE);
}

// program init

// global variables

// map
const BASE = 32;
const COLS = 15;
const ROWS = 10;
const WIDTH = BASE * COLS;
const HEIGHT = BASE * ROWS;

// objects 
const Rectangle = {
  col: 0,
  row: 0
};

// HTML5 canvas init
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.background = "#000";
document.body.appendChild(canvas);

// add eventlistener
document.addEventListener("keydown", keyDownHandler);


// draw first frame
draw();
```
## Step 07: Draw multiple Game Objects
```javascript
// input
function keyDownHandler(e) {
  update(e.key)
}

// update
function update(key) {
  // move player
  if (key === "ArrowRight") {
    head.col += 1;
    if (head.col >= COLS) head.col = 0;
  }
  if (key === "ArrowLeft") {
    head.col -= 1;
    if (head.col <= -1) head.col = COLS - 1; 
  }
  if (key === "ArrowUp") {
    head.row -= 1;
    if (head.row <= -1) head.row = ROWS - 1; 
  }
  if (key === "ArrowDown") {
    head.row += 1;
    if (head.row >= ROWS) head.row = 0;
  }
  
  // draw
  draw();
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

// global vars

// game arrays
const renderArray = [];

// map
const BASE = 32;
const COLS = 15;
const ROWS = 10;
const WIDTH = BASE * COLS;
const HEIGHT = BASE * ROWS;

// objects
const Rectangle = {
  col: 0,
  row: 0,
  color: "#fff"
};



// HTML5 canvas init
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.background = "#000";
document.body.appendChild(canvas);

// add eventlistener
document.addEventListener("keydown", keyDownHandler);

// create head
const head = Object.create(Rectangle);
head.col = 2;
head.row = 3;
renderArray.push(head);

// create tail
let tail = Object.create(Rectangle);
tail.col = - 2;
tail.row = - 2;
tail.color = "cornflowerblue";
tails.push(tail);
renderArray.push(tail);



// draw first frame
draw();
```

## Step 08: Grow tail based on last head position
```javascript
// input
function keyDownHandler(e) {
  update(e.key)
}

// processing
function update(key) {
  
  // get tail positions based on last head positions
  tailPositions.unshift({col: head.col, row: head.row});
  if (tailPositions > tails) tailPositions.length = tails.length;
  // update tail positions
  for (let i = 0; i < tails.length; i++) {
    tails[i].col = tailPositions[i].col;
    tails[i].row = tailPositions[i].row;
  }
  
  // move player
  if (key === "ArrowRight") {
    head.col += 1;
    if (head.col >= COLS) head.col = 0;
  }
  if (key === "ArrowLeft") {
    head.col -= 1;
    if (head.col <= -1) head.col = COLS - 1; 
  }
  if (key === "ArrowUp") {
    head.row -= 1;
    if (head.row <= -1) head.row = ROWS - 1; 
  }
  if (key === "ArrowDown") {
    head.row += 1;
    if (head.row >= ROWS) head.row = 0;
  }
  
  // draw
  draw();
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

// global variables

// game arrays
const renderArray = [];
const tailPositions = [];
const tails = [];

// map
const BASE = 32;
const COLS = 15;
const ROWS = 10;
const WIDTH = BASE * COLS;
const HEIGHT = BASE * ROWS;

// objects
const Rectangle = {
  col: 0,
  row: 0,
  color: "#fff"
};


// HTML5 canvas init
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.background = "#000";
document.body.appendChild(canvas);

// add eventlistener
document.addEventListener("keydown", keyDownHandler);

// create head
const head = Object.create(Rectangle);
head.col = 2;
head.row = 3;
renderArray.push(head);

// create tail
let tail = Object.create(Rectangle);
tail.col = - 2;
tail.row = - 2;
tail.color = "cornflowerblue";
tails.push(tail);
renderArray.push(tail);



// draw first frame
draw();
```

## Step 09: Eat food and grow tail

## Step 10: Set up gameloop

## Step 11: Head<->Tail collision

## Step 12: Fix movement

