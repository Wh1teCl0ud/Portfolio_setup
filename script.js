const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-wrap');
const cross = document.querySelector('#close-button');
const navWBtn = document.getElementsByClassName("nav-w-btn");

humberger.addEventListener("click", () => {
  document.getElementById("nav-wrap").style.left = 0;
});

cross.addEventListener("click", () => {
  document.getElementById("nav-wrap").style.left = '100%';
});


for(let item of navWBtn){
  item.addEventListener("click", () => {
  document.getElementById("nav-wrap").style.left = '100%';
});
}
