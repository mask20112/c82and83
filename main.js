var canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "";
var last_Xposition , Last_Yposition;

color="black";
line_width =1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentXposition = e.clientX - canvas.offsetLeft;
    currentYposition = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
console.log("lastx= " + last_Xposition + " lasty=" +  Last_Yposition);
ctx.moveTo(last_Xposition , Last_Yposition);
console.log("currentX= " + currentXposition + "currentY= " +  currentYposition );
ctx.lineTo(currentXposition , currentYposition);
ctx.stroke();

    }
    last_Xposition = currentXposition;
    Last_Yposition = currentYposition;

}
function clear_drawing() {
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
    
}