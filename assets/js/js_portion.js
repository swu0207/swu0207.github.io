var canvas;

$(document).ready(function() { //when pg is ready, perform these actions


  canvas = document.getElementById("background");
  canvas.width = window.innerWidth;
  canvas.height = 350;

  var bigformbox = $("#bigformbox");
  console.log(bigformbox.width());
  var formbox = $("#formbox");
  console.log(formbox.width());


//keep in mind race conditions--must have necessary parts loaded before running this click result
  $("#enter_button").click(function() {

    console.log("updating name");
    updatename();
  }); 

});




function updatename() {

  inputname = document.getElementById("yourname").value;

  var ctx = document.querySelector("canvas").getContext("2d");
  var dashLen = 220;
  var dashOffset = dashLen;
  var speed = 10;
  var txt = inputname;
  var x = 50;
  var i = 0;


  ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif"; 
  ctx.lineWidth = 1; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
  ctx.strokeStyle = ctx.fillStyle = "#1f2f90";


  ctx.clearRect(0, 0, canvas.width, canvas.height);


  (function loop() {
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    ctx.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();

}