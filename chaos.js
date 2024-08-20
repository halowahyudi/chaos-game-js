const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const vertices = [
  { x: canvas.width / 2, y: 0 },
  { x: canvas.width, y: canvas.height },
  { x: 0, y: canvas.height },
];

const dots = [];

function startDrawing() {
  dots.push({ x: canvas.width / 2, y: canvas.height / 2 });
  requestAnimationFrame(draw);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let dot of dots) {
    ctx.fillRect(dot.x, dot.y, 2, 2);
  }

  if (dots.length < 10000) {
    const vertex = vertices[Math.floor(Math.random() * vertices.length)];
    const currentPoint = dots[dots.length - 1];
    const newPoint = {
      x: (currentPoint.x + vertex.x) / 2,
      y: (currentPoint.y + vertex.y) / 2,
    };
    dots.push(newPoint);
    requestAnimationFrame(draw);
  }
}

startDrawing();
