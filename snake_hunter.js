let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let ball = {
    x: 20,
    y: 20,
    radius: 15,
    dx: 2,
    dy: 2,
};
// let rect = {
//     x:50,
//     y:50,
//     width: 50,
//     height: 50,
// };

function drawAplle() {
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI*2);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
// function drawRect() {
//     ctx.beginPath();
//     ctx.rect(rect.x,rect.y,rect.width,rect.height);
//     ctx.fillStyle = "red";
//     ctx.strokeStyle = "black";
//     ctx.fill();
//     ctx.stroke();
//     ctx.closePath();
// }
function startDraw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius){
        ball.dx = -ball.dx;
    }else if (ball.y < ball.radius ){
        ball.dy = -ball.dy;
    }
    ball.x += ball.dx;
    ball.y += ball.dy;

    drawAplle();


    setInterval(startDraw,200);
}
startDraw();