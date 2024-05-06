/****************************************************
 * unicorn.js
 *
 * Our predefined variables:
 *
 *  - speed     we will animate the unicorn to move so it will have a speed.
 *  - x         the unicorn's x-axis position.
 *  - y         the unicorn's y-axis position.
 *  - width     the unicorn's width.
 *  - height    the unicorn's height.
 *  - gravity   the unicorn will have a gravity for "falling" animation.
 *  - lift      the unicorn will have a lift for "jumping" animation.
 *
 * Our predefined methods:
 *
 *  - show()    that we will use for drawing the image.
 *  - update()  that we will use for animation, in this case, creating gravity.
 *  - up()      that we will use for creating jump animation when user press `Space Bar`.
 *
 ****************************************************/

class Unicorn {
  speed = 0;
  x = 64;
  y = CANVAS_HEIGHT / 2;
  height = 64;
  width = 46;
  gravity = 0.2;
  lift = -7;

  /****************************************************
   * Show the unicorn by using the image() from p5,
   * which takes img, x, y and size
   * @custom
   ****************************************************/
  show() {}

  /****************************************************
   * Create gravity
   * @custom
   ****************************************************/
  update() {}

  /****************************************************
   * Make the unicorn go upwards
   * @custom
   ****************************************************/
  up() {}
}
