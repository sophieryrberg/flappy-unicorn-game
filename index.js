/****************************************************
 * index.js
 *
 * Our predefined variables:
 *
 *  - unicorn       will contain an instance object of the class Unicorn located in our predefined file unicorn.js.
 *  - pipes          will contain an instance object of the class Pipe located in our predefined file pipe.js.
 *  - background     will contain an instance object of the class Background located in our predefined file background.js.
 *  - unicornImg    will contain an image object from images/unicorn.png.
 *  - backgroundImg  will contain an image object from images/background.png.
 *  - boidImg         will contain an image object from images/boid.png.
 *  - isOver         will contain a boolean if the player has lost the game or not.
 *  - score          will contain an integer with the players score.
 *  - CANVAS_HEIGHT  contains the canvas height.
 *  - CANVAS_WIDTH   contains the canvas width.
 *
 * Our predefined methods:
 *
 *  - preload()      a p5.js method.
 *  - setup()        a p5.js method.
 *  - draw()         a p5.js method.
 *  - keyPressed()   a p5.js method.
 *  - startGame()    a custom method.
 *  - gameOver()     a custom method.
 *  - showScores()   a custom method.
 *
 ****************************************************/

/****************************************************
 * This is all the variables we need in the game.
 * You can read more about them in the README.md.
 ****************************************************/
let unicorn;
let pipes = [];
let boids = [];
let background;
let unicornImg;
let backgroundImg;
let boidImg;
let isOver = false;
let score = 0;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 600;

/****************************************************
 * This is a magical p5 function.
 * preload() loads before setup() function and setup()
 * waits for it to complete
 *
 * @p5jsMethod
 ****************************************************/
function preload() {
  backgroundImg = loadImage("images/background.png");
  unicornImg = loadImage("images/unicorn.png");
  boidImg = loadImage("images/boid.png");
}

/****************************************************
 * setup() runs only once and is used to initialize "stuffs"
 * Use the createCanvas() to set the width and height. See p5.js
 *
 * @p5jsMethod
 ****************************************************/
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background = new Background();
  unicorn = new Unicorn();
}

/****************************************************
 * draw() is a magical p5 function which runs repeatedly and is used to draw graphics/stuffs
 * Draw our background image, then move it at the same speed as the pipes
 *
 * @p5jsMethod
 ****************************************************/
function draw() {
  background.show();
  background.update();
  unicorn.show();
  unicorn.update();

  if (frameCount % 100 === 0) {
    pipes.push(new Pipe());
  }

  for (let pipe of pipes) {
    pipe.show();
    pipe.update();
    if (pipe.hits(unicorn)) gameOver();
    if (pipe.pass(unicorn)) score++;
  }
  showScore();

  if (frameCount % 75 === 0) boids.push(new Boid());
  for (let boid of boids) {
    boid.show();
    boid.update();
    if (boid.hits(unicorn)) {
      score += 3;
      boids.splice(boids.indexOf(boid), 1);
    }
  }
}

/****************************************************
 * Set the space button to make the unicorn fly
 *
 * @p5jsMethod
 ****************************************************/
function keyPressed() {
  if (key === " ") {
    unicorn.up();
    if (isOver) startGame();
  }
}

/****************************************************
 * Create a new unicorn and new pipe
 * Reset the score to 0
 * Reset the moving background to the start poisition
 *
 * @customMethod
 ****************************************************/
function startGame() {
  background = new Background(); // Reset the background's x position.
  unicorn = new Unicorn(); // we create a new unicorn to original position.
  pipes = []; // We will need an empty pipes array to reset pipe positions.
  boids = []; // We will need an empty boids array. We will implement later.
  isOver = false; // Set isOver to false when starting the game again.
  loop(); // Start looping again (adding frames), else game will be paused.
  score = 0; // We set the score to 0. We will implement this in the next step!
}

/****************************************************
 * Display text on screen, using text function from p5
 * You can also fill to set paintbrush color and textSize
 *
 * @customMethod
 ****************************************************/
function gameOver() {
  textSize(50);
  fill(0o0);
  text("GAME OVER", 50, 300);
  isOver = true;
  noLoop();
}

/****************************************************
 * Display text on screen, using text function from p5
 * You can also use fill to set paintbrush color and textSize
 *
 * @customMethod
 ****************************************************/
function showScore() {
  fill(0o0);
  textSize(32);
  text("Score: " + score, 1, 32);
}
