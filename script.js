//Var declaration
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Listener to wait for resize and add some responsive logic
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
//Mouse object to use on mouse events
const mouse = {
  x: 100,
  y: 100,
};
//Listerner to do change render point on mouse click
canvas.addEventListener("click", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
});
//Function to draw circle on canvas
function drawCircle() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fill();
}
//Function instance
drawCircle();
