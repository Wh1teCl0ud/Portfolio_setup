/* eslint-disable max-len */
const hamburger = document.querySelector('#hamburger');
const cross = document.querySelector('.close-button');
const navWBtn = document.getElementsByClassName('nav-w-btn');

hamburger.addEventListener('click', () => {
  document.getElementById('nav-wrap').style.left = 0;
});

cross.addEventListener('click', () => {
  document.getElementById('nav-wrap').style.left = '100%';
});

for (let i = 0; i < navWBtn.length; i += 1) {
  navWBtn[i].addEventListener('click', () => {
    document.getElementById('nav-wrap').style.left = '100%';
  });
}

// dynamic preview-cards
const cards = [{
  title: 'Art Printing Data2',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See project',

},
{
  title: 'Art Printing Data3',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See project',
},
{
  title: 'Art Printing Data4',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See project',

},
{
  title: 'Art Printing Data5',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See project',
},
{
  title: 'Art Printing Data6',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See project',
},
{
  title: 'Art Printing Data7',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See project',
},
];

function displayCards() {
  let result = '';

  cards.forEach((card) => {
    result += `<div class="simple-post">
      <div class="sp-content">
        <div class="sp-h-wrapper">
          <h3>${card.title}</h3>
        </div>
        <p>${card.description}</p>
        <ul class="sp-lang-wrapper"> 
          <li>${card.tech1}</li> 
          <li>${card.tech2}</li> 
          <li>${card.tech3}</li>
        </ul>
      </div>
      <a class="sp-link">
        <button class="sp-button card-btn-open">${card.btnText}</button> 
      </a>
    </div>`;
  });

  document.getElementById('simple-posts-wrapper').innerHTML = result;
}

displayCards();

// Opening the window
// const btn = document.getElementsByClassName('sp-button');
// for (let i = 0; i < btn.length; i += 1) {
//   btn[i].addEventListener('click', () => {
//     const div1 = document.createElement('div');
//     div1.className = 'content-card-wrap';
//     const worksSection = document.getElementById('works');
//     document.body.appendChild(div1);
//     document.body.insertBefore(div1, worksSection);

//     // div2
//     const div2 = document.createElement('div');
//     div2.className = 'content-card';
//     div1.appendChild(div2);

//     // div3
//     const div3 = document.createElement('div');
//     div3.className = 'close-button';
//     div3.id = 'card-x';
//     div3.innerHTML = '<img src="./Images/X-d.svg" alt="X">';
//     div2.appendChild(div3);

//     // div4
//     const div4 = document.createElement('div');
//     div4.className = 'cc-h-wrap';
//     div2.appendChild(div4);
//     const h2 = document.createElement('h2');
//     h2.className = 'card-h';
//     // h2.textContent = 'Multi Post Stories';
//     div4.appendChild(h2);
//     const ul1 = document.createElement('ul');
//     ul1.className = 'card-lang-wrapper';
//     div4.appendChild(ul1);
//     const li1 = document.createElement('li');
//     // li1.innerText = 'css';
//     ul1.appendChild(li1);
//     const li2 = document.createElement('li');
//     // li2.innerText = 'html';
//     ul1.appendChild(li2);
//     const li3 = document.createElement('li');
//     // li3.innerText = 'bootstrap';
//     ul1.appendChild(li3);
//     const li4 = document.createElement('li');
//     // li4.innerText = 'Ruby';
//     ul1.appendChild(li4);

//     // div5
//     const div5 = document.createElement('div');
//     div5.className = 'card-content';
//     div2.appendChild(div5);

//     // div6
//     const div6 = document.createElement('div');
//     div6.className = 'project-img-w';
//     // div6.innerHTML = ' <img src="./Images/card-img.svg" alt="project-preview" class="project-img">';
//     div5.appendChild(div6);

//     // div7
//     const div7 = document.createElement('div');
//     div7.className = 'card-cb-wrap';
//     div5.appendChild(div7);
//     const p = document.createElement('p');
//     p.className = 'card-p';
//     p.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fuga deleniti.";
//     div7.appendChild(p);

//     // div8
//     const div8 = document.createElement('div');
//     div8.className = 'card-b-wrap';
//     div7.appendChild(div8);
//     const a1 = document.createElement('a');
//     a1.className = 'card-link';
//     // a1.href = '';
//     a1.innerHTML = ' <button class="card-button">See Live <img src="./Images/card-icon.svg" alt="" class="card-i"></button>';
//     div8.appendChild(a1);
//     const a2 = document.createElement('a');
//     a2.className = 'card-link';
//     // a2.href = '';
//     a2.innerHTML = '<button class="card-button">See Source<img src="./Images/github-w.svg" alt=""></button>';
//     div8.appendChild(a2);

// // close the card
// const cardX = document.getElementById('card-x');
// cardX.addEventListener('click', () => {
//   document.body.removeChild(div1);
//   document.getElementsByClassName('content-card-wrap').style.visibility = 'visible';
// });
// });
// }

let proj1 = {};
let proj2 = {};
let proj3 = {};
let proj4 = {};
let proj5 = {};
let proj6 = {};
let proj7 = {};

// project data
const projectsData = [
  proj1 = {
    id: 1,
    title: 'Multi Post Stories 1',
    description: "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fuga deleniti.",
    image: '',
    tech1: 'css',
    tech2: 'html',
    tech3: 'bootstrap',
    liveLink: '',
    sourceLink: '',
  },
  proj2 = {
    id: 2,
    title: 'Multi Post Stories 2',
    description: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fuga deleniti.",
    image: '',
    tech1: 'css',
    tech2: 'html',
    tech3: 'bootstrap',
    liveLink: '',
    sourceLink: '',
  },
  proj3 = {
    id: 3,
    title: 'Multi Post Stories 3',
    description: "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fuga deleniti.",
    image: '',
    tech1: 'css',
    tech2: 'html',
    tech3: 'bootstrap',
    liveLink: '',
    sourceLink: '',
  },
  proj4 = {
    id: 4,
    title: 'Multi Post Stories 4',
    description: "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fuga deleniti.",
    image: '',
    tech1: 'css',
    tech2: 'html',
    tech3: 'bootstrap',
    liveLink: '',
    sourceLink: '',
  },
  proj5 = {
    id: 5,
    title: 'Multi Post Stories 5',
    description: "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fuga deleniti.",
    image: '',
    tech1: 'css',
    tech2: 'html',
    tech3: 'bootstrap',
    liveLink: '',
    sourceLink: '',
  },
  proj6 = {
    id: 6,
    title: 'Multi Post Stories 6',
    description: "6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fuga deleniti.",
    image: '',
    tech1: 'css',
    tech2: 'html',
    tech3: 'bootstrap',
    liveLink: '',
    sourceLink: '',
  },
  proj7 = {
    id: 7,
    title: 'Multi Post Stories 7',
    description: "7 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fuga deleniti.",
    image: '',
    tech1: 'css',
    tech2: 'html',
    tech3: 'bootstrap',
    liveLink: '',
    sourceLink: '',
  },
];

// const btn = document.getElementsByClassName('card-btn-open');
// for (let i = 1; i < btn.length; i += 1) {
//   btn[i].addEventListener('click', () => {
const popupWrap = document.createElement('div');
popupWrap.className = 'content-card-wrap';

let result = '';

document.getElementsByClassName('content-card-wrap').innerHTML = result;

function modal(obj) {
  result += `
        <div class="content-card">
          <div class="close-button card-x"><img src="./Images/X-d.svg" alt="X"></div>
          <div class="cc-h-wrap">
            <h2 class="card-h">${obj.title}</h2>
            <ul class="card-lang-wrapper">
              <li>${obj.tech1}</li>
              <li>${obj.tech2}</li>
              <li>${obj.tech3}</li>
            </ul>
          </div>
          <div class="card-content">
            <div class="obj-img-w">
              <img src="${obj.image}" alt="obj-preview" class="obj-img">
            </div>
            <div class="card-cb-wrap">
              <p class="card-p">
              ${obj.description}
              </p>
              <div class="card-b-wrap">
                <a class="card-link">
                  <button class="card-button">See Live<img src="./Images/card-icon.svg" alt="" class="card-i"></button>
                </a>
                <a class="card-link">
                  <button class="card-button">See Source<img src="./Images/github-w.svg" alt="" class="card-i></button>
                </a>
              </div>
            </div>
          </div>
        </div>`;

  // close the card
  const cardX = document.getElementsByClassName('card-x');
  cardX.addEventListener('click', () => {
    document.body.removeChild(popupWrap);
  });
}

modal(projectsData[1]);
// modal(projectsData[i]);
//   });
// }

// function displayPopup() {
//   const popupWrap = document.createElement('div');
//   popupWrap.className = 'content-card-wrap';

//   let result = '';

//   projectsData.forEach((project) => {
//     result += `
//       <div class="content-card">
//         <div class="close-button card-x"><img src="./Images/X-d.svg" alt="X"></div>
//         <div class="cc-h-wrap">
//           <h2 class="card-h">${project.title}</h2>
//           <ul class="card-lang-wrapper">
//             <li>${project.tech1}</li>
//             <li>${project.tech2}</li>
//             <li>${project.tech3}</li>
//           </ul>
//         </div>
//         <div class="card-content">
//           <div class="project-img-w">
//             <img src="${project.image}" alt="project-preview" class="project-img">
//           </div>
//           <div class="card-cb-wrap">
//             <p class="card-p">
//             ${project.description}
//             </p>
//             <div class="card-b-wrap">
//               <a class="card-link">
//                 <button class="card-button">See Live<img src="./Images/card-icon.svg" alt="" class="card-i"></button>
//               </a>
//               <a class="card-link">
//                 <button class="card-button">See Source<img src="./Images/github-w.svg" alt="" class="card-i></button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>`;
//   });

//   document.getElementsByClassName('content-card-wrap').innerHTML = result;
// }
// displayPopup();