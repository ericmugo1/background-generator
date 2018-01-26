var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient");
var btn =document.querySelector("button");

function setGradient(){
  body.style.background =
  	"linear-gradient(to right, "
  	+ color1.value
  	+ ", "
  	+ color2.value
  	+ ")";
    css.textContent= body.style.background+ ";";
}
function randomColor() {
  var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);


  return color;
}
function RandomiseColors(){
  color1.value= randomColor();
  color2.value= randomColor();
setGradient();
}
body.addEventListener("onload", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

btn.addEventListener("click",RandomiseColors, RandomiseColors());
