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
  title: 'Art Printing Data 1',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 0,

},
{
  title: 'Art Printing Data 2',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 1,
},
{
  title: 'Art Printing Data 3',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 2,

},
{
  title: 'Art Printing Data 4',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 3,
},
{
  title: 'Art Printing Data 5',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 4,
},
{
  title: 'Art Printing Data 6',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 5,
},
{
  title: 'Art Printing Data 7',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See project',
  id: 6,
},
];

function displayCards() {
  let result = '';

  cards.filter((card) => card.id > 0).forEach((card) => {
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
const btn = document.getElementsByClassName('card-btn-open');
const popUpWrapper = document.getElementById('popup-wrap');
cards.forEach((card) => {
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => {
      if (i === card.id) {
        let res = '';
        popUpWrapper.style.display = 'block';
        res += `
        <div class="content-card-wrap">
         <div class="content-card">
          <div class="close-button card-x"><img src="./Images/X-d.svg" alt="X"></div>
          <div class="cc-h-wrap">
            <h2 class="card-h">${card.title}</h2>
            <ul class="card-lang-wrapper">
              <li>${card.tech1}</li>
              <li>${card.tech2}</li>
              <li>${card.tech3}</li>
            </ul>
          </div>
          <div class="card-content">
            <div class="card-img-w"></div>
            <div class="card-tb-wrap">
              <p class="card-p">
              ${card.description}
              </p>
              <div class="card-b-wrap">
                <a class="card-link">
                  <button class="card-button">See Live<img src="./Images/card-icon.svg" alt="" class="card-i"></button>
                </a>
                <a class="card-link">
                  <button class="card-button">See Source<img src="./Images/github-w.svg" alt=""></button>
                </a>
              </div>
            </div>
         </div>
        </div>
        </div>`;

        popUpWrapper.innerHTML = res;

        // close the card

        const cardX = document.getElementsByClassName('card-x');
        for (let j = 0; j < cardX.length; j += 1) {
          cardX[j].addEventListener('click', () => {
            popUpWrapper.style.display = 'none';
          });
        }
      }
    });
  }
});