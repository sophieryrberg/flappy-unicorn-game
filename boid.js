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
  show() {
    image(boidImg, this.x, this.y, this.width, this.height);
  }

  /****************************************************
   * Make the boid start outside of the canvas to the right and
   * move to the left.
   * Use x and speed.
   ****************************************************/
  update() {
    this.x -= this.speed;
  }

  /****************************************************
   * Here you want the unicorn to hit the boid
   ****************************************************/
  hits(unicorn) {
    if (
      this.y < unicorn.y + unicorn.height &&
      this.y + this.height > unicorn.y
    ) {
      if (
        this.x < unicorn.x + unicorn.width &&
        this.x + this.width > unicorn.x
      ) {
        if (!this.taken) {
          this.taken = true;
          return true;
        }
      }
    }
    return false;
  }
}
