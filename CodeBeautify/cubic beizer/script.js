const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawBezier() {
  const p0x = parseInt(document.getElementById('p0x').value);
  const p0y = parseInt(document.getElementById('p0y').value);
  const p1x = parseInt(document.getElementById('p1x').value);
  const p1y = parseInt(document.getElementById('p1y').value);
  const p2x = parseInt(document.getElementById('p2x').value);
  const p2y = parseInt(document.getElementById('p2y').value);
  const p3x = parseInt(document.getElementById('p3x').value);
  const p3y = parseInt(document.getElementById('p3y').value);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(p0x, p0y, 5, 0, Math.PI * 2);
  ctx.arc(p1x, p1y, 5, 0, Math.PI * 2);
  ctx.arc(p2x, p2y, 5, 0, Math.PI * 2);
  ctx.arc(p3x, p3y, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(p0x, p0y);
  ctx.bezierCurveTo(p1x, p1y, p2x, p2y, p3x, p3y);
  ctx.stroke();
}
