document.addEventListener("DOMContentLoaded", () => {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let canvas = document.getElementById("canvas_1");
  let ctx = canvas.getContext("2d");

  function drawSquare(x, y, fillStyle = "black") {
    ctx.beginPath();
    ctx.moveTo(x + 10, y);
    ctx.lineTo(x + 70, y);
    ctx.quadraticCurveTo(x + 80, y, x + 80, y + 10);
    ctx.lineTo(x + 80, y + 70);
    ctx.quadraticCurveTo(x + 80, y + 80, x + 70, y + 80);
    ctx.lineTo(x + 10, y + 80);
    ctx.quadraticCurveTo(x, y + 80, x, y + 70);
    ctx.lineTo(x, y + 10);
    ctx.quadraticCurveTo(x, y, x + 10, y);
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let x = 0;
    while (x < 10 || x > canvas.width - 100) {
      x = Math.floor(Math.random() * canvas.width);
    }
    let y = 0;
    while (y < 10 || y > canvas.height - 100) {
      y = Math.floor(Math.random() * canvas.height);
    }
    drawSquare(x, y, getRandomColor());
  }

  setInterval(update, 100);
});
