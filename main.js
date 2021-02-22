canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d")
 var mouseEvent="";

 var color="red";
 var width=1;
 var lastx,lasty;
  var width = screen.width;
  new_width= screen.width-200;
  new_height = screen.height-300;

  if (new_width < 992){
     document.getElementById("myCanvas").width=new_width;
     document.getElementById("myCanvas").height=new_height;
     document.body.style.overflow="hidden";
  }

 canvas.addEventListener("mousedown" , mymousedown);

 function mymousedown(e) {
mouseEvent="down";
color=document.getElementById("color").value;
width=document.getElementById("width").value;
 }
 canvas.addEventListener("mouseup" , mymouseup);

 function mymouseup(e) {
mouseEvent="up";
 }
     
 canvas.addEventListener("mouseleave" , mymouseleave);

 function mymouseleave(e) {
mouseEvent="leave";
 }

 canvas.addEventListener("mousemove" , mymousemove);

 function mymousemove(e) {
 currentx=e.clientX - canvas.offsetLeft;
 currenty=e.clientY - canvas.offsetTop;

 if (mouseEvent == "down"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width ;

console.log("last x = " + lastx + ",last y = "+lasty);
ctx.moveTo(lastx , lasty);

console.log("current x = "+currentx +", current y = "+currenty);
ctx.lineTo(currentx , currenty);

ctx.stroke();
 }
 lastx=currentx;
 lasty=currenty;
 }

 function clean(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }

 canvas.addEventListener("touchstart" , mytouchstart);

 function mytouchstart(e){
 lastx=e.touches[0].clientX-canvas.offsetLeft;
 lasty=e.touches[0].clientY-canvas.offsetTop;
 }
 
 canvas.addEventListener("touchmove" , mytouch);

 function mytouch(e){
   currentx=e.touches[0].clientX-canvas.offsetLeft;
   currenty=e.touches[0].clientY-canvas.offsetTop;

   ctx.beginPath();
   ctx.strokeStyle=color;
   ctx.lineWidth=width;

   console.log("last x = "+lastx+",last y = "+lasty);
   ctx.moveTo(lastx,lasty);

   console.log("current x = "+currentx+",current y = "+currenty);
   ctx.lineTo(currentx,currenty);
   ctx.stroke();

   lastx= currentx;
   lasty=currenty;
 }