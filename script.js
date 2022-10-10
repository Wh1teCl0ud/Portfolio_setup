const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-wrap');
const cross = document.querySelector('#close-button');

humberger.addEventListener("click", () =>{
  document.getElementById("nav-wrap").style.left = 0;
  document.getElementById("header-menu").style.display = 'none';
});

cross.addEventListener("click", () =>{
  document.getElementById("nav-wrap").style.left = '100%';
  document.getElementById("header-menu").style.display = 'block';
})