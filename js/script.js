console.log("scripts are loaded");

var burger = document.getElementById("burger");
var nav = document.getElementById("offscreen-nav");
var close = document.getElementById("close-btn");
var content = document.getElementById("content");
var info = document.getElementById("more-info");
var tip = document.getElementById("tool-tip");


burger.addEventListener('click', function(){
  console.log('button clicked');
  nav.classList.add("show");
  content.style.opacity = .2;
});

close.addEventListener('click', function(){
  console.log('button clicked');
  nav.classList.remove("show");
  content.style.opacity = 2;
});

info.addEventListener("mouseenter", function(event){
  console.log('entered');
  tip.style.opacity = 1;
  var x = event.clientX;
  var y = event.clientY;
  console.log(y);
  tip.style.top = y + 20 + "px";
  tip.style.left = x + "px";
});

info.addEventListener("mouseleave", function(event){
  console.log('left');
  tip.style.opacity = 0;
});