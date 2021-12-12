# snakeGame HTML5 Canvas
If you want to practice your javaScript gameDev skills you're in the right place! In this mini tutorial we build the core mechanics of the beloved oldschool snake game using HTML5 Canvas and javaScript. Have fun!

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

// add eventlistener
document.addEventListener("keydown", keyDownHandler);
```

## Step 04: Set up HTML5 Canvas

## Step 05: Grid based movement

## Step 06: Screenwrapping player

## Step 07: Draw multiple Game Objects

## Step 08: Grow tail based on last head position

## Step 09: Eat food and grow tail

## Step 10: Set up gameloop

## Step 11: Head<->Tail collision

## Step 12: Fix movement

