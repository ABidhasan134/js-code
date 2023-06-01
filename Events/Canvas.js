var c=document.querySelector("#myCanvas");
var vtx = c.getContext("2d");

vtx.linewidth=3;
vtx.strokeStyle="red";
vtx.strokeRect(10,10,380,280);
vtx.fillStyle="green";
vtx.fillRect(12,12,376,276);



var centerX=c.width/2;
console.log(centerX);
var centery=c.height/2;
console.log(centery);
vtx.beginPath();
vtx.arc(centerX,centery,50,0,2*Math.PI,false);
vtx.fillStyle="red";
vtx.fill();
vtx.stroke();
