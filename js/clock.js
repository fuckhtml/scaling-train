const canvasElement = document.querySelector('#canvas');
const ctx = canvasElement.getContext('2d');

canvas.width = '100';                 
canvas.height = '100';                
canvas.style.border = '2px solid red';

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
ctx.moveTo(canvas.width / 2, canvas.height / 2);
ctx.lineTo(100, 50);
ctx.closePath();
ctx.stroke();


// ctx.clearRect(0, 0, canvas.width, canvas.height);