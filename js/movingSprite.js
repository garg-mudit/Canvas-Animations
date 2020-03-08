document.addEventListener("DOMContentLoaded", () => {
  let character = document.getElementById("sprite");

  let canvas = document.getElementById("canvas_2");
  let ctx = canvas.getContext("2d");

  let x = 0,
    y = 0;
  let srcX, srcY;

  let dx = 4,
    dy = 4;

  let sheetWidth = character.naturalWidth;
  let sheetHeight = character.naturalHeight;

  let colFrameCount = 12;
  let rowFrameCount = 4;
  let frameWidth = sheetWidth / colFrameCount;
  let frameHeight = sheetHeight / rowFrameCount;

  let currentFrameX = 0;
  let currentFrameY = 0;

  function updateFrame() {
    currentFrameX = ++currentFrameX % colFrameCount;
    srcX = currentFrameX * frameWidth;
    srcY = currentFrameY * frameHeight;
  }

  function updatePosition() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (currentFrameY == 0 || currentFrameY == 3) {
      y += dy;
      if (y + frameHeight > canvas.height - 10) {
        dy *= -1;
        currentFrameY = 2;
      } else if (y < 0) {
        dy *= -1;
        currentFrameY = 1;
      }
    } else {
      x += dx;
      if (x + frameWidth > canvas.width) {
        dx *= -1;
        currentFrameY = 3;
      } else if (x < 0) {
        dx *= -1;
        currentFrameY = 0;
      }
    }
  }

  function drawImage() {
    updateFrame();
    updatePosition();
    ctx.drawImage(
      character, //img
      srcX, //clip Start X
      srcY, //clip Start Y
      frameWidth, //Clip Width
      frameHeight, //Clip Height
      x, // Canvas start X
      y, // Cancas start Y
      frameWidth, // width of img in canvas
      frameHeight // height of img in canvas
    );
  }
  setInterval(drawImage, 100);
});
