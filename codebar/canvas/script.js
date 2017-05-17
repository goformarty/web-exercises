/** Canvas playground for Codebar's tutorial Drawing in Canvas **/

function draw() {
	var canvas = document.getElementById('canvas-id');
	var context = canvas.getContext("2d");

 //draw items
 context.fillStyle = 'yellow';
 context.strokeStyle = 'purple';
 context.lineWidth = '3';
 context.fillRect(100, 100, 50, 100);
 context.strokeRect(300,100,50, 100);
 context.lineWidth = '1';
 context.fillRect(250, 300, 120, 150);
 context.strokeRect(250, 300, 120, 150);
 context.moveTo(0,300);
 context.lineTo(400,500);

 context.lineWidth = 1;
 context.strokeStyle = 'purple';

 context.moveTo(10,10);
 context.lineTo(10,200);
 context.lineTo(200,200);
 context.lineTo(200,10);
 context.lineTo(10,10);
 context.stroke();

 context.beginPath();
 context.arc(200, 100, 50, 0, Math.PI*2, true);
 context.closePath();
 context.lineWidth = 4;
 context.stroke();
 context.fill();

 context.rotate(10*Math.PI/180);

}

function reset() {
	var canvas = document.getElementById('canvas-id');
	var context = canvas.getContext("2d");

  // reset canvas
  context.clearRect(0,0,canvas.width, canvas.height);
}
