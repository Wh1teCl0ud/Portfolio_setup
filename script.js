const hamburger = document.querySelector('#hamburger');
const cross = document.querySelector('#close-button');
let navWBtn = document.getElementsByClassName('nav-w-btn');
// navWBtn = Array.from(navWBtn);

hamburger.addEventListener('click', () => {
  document.getElementById('nav-wrap').style.left = 0;
});

cross.addEventListener('click', () => {
  document.getElementById('nav-wrap').style.left = '100%';
});

// navWBtn.forEach(element => {
//   element.addEventListener('click', () => {
//     document.getElementById('nav-wrap').style.left = '100%';
//   });
// });

for (let i = 0; i < navWBtn.length; i += 1) {
  navWBtn[i].addEventListener('click', () => {
    document.getElementById('nav-wrap').style.left = '100%';
  });
}
