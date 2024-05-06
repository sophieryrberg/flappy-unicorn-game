/****************************************************
 * boid.js
 *
 ****************************************************/

class Boid {
  y = random(height);
  speed = 2;
  x = width;
  height = 32;
  width = 32;

  /****************************************************
   * Show the boid image by using image() from p5,
   * together with x, y, width and height
   * @custom
   ****************************************************/
  show() {}

  /****************************************************
   * Make the boid start outside of the canvas to the right and
   * move to the left.
   * Use x and speed.
   ****************************************************/
  update() {}

  /****************************************************
   * Here you want the unicorn to hit the boid
   ****************************************************/
  hits(unicorn) {}
}
