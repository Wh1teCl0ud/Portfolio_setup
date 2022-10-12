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

// Opening the window
let btn = document.getElementsByClassName('sp-button');
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', () => {
    let div1 = document.createElement('div');
    div1.className = 'content-card-wrap';
    let worksSection = document.getElementById('works');
    document.body.appendChild(div1);
    document.body.insertBefore(div1, worksSection);

    // div2
    let div2 = document.createElement('div');
    div2.className = 'content-card';
    div1.appendChild(div2);

    // div3
    let div3 = document.createElement('div');
    div3.className = 'close-button';
    div3.id = 'card-x';
    div3.innerHTML = '<img src="./Images/X-d.svg" alt="X">'
    div2.appendChild(div3);

    // div4
    let div4 = document.createElement('div');
    div4.className = 'cc-h-wrap';
    div2.appendChild(div4);
    let h2 = document.createElement('h2');
    h2.className = 'card-h';
    h2.textContent = 'Multi Post Stories';
    div4.appendChild(h2);
    let ul1 = document.createElement('ul');
    ul1.className = 'card-lang-wrapper';
    div4.appendChild(ul1);
    let li1 = document.createElement('li');
    li1.innerText = 'css';
    ul1.appendChild(li1);
    let li2 = document.createElement('li');
    li2.innerText = 'html';
    ul1.appendChild(li2);
    let li3 = document.createElement('li');
    li3.innerText = 'bootstrap';
    ul1.appendChild(li3);
    let li4 = document.createElement('li');
    li4.innerText = 'Ruby';
    ul1.appendChild(li4);

    // div5
    let div5 = document.createElement('div');
    div5.className = 'card-content';
    div2.appendChild(div5);

    // div6
    let div6 = document.createElement('div');
    div6.className = 'project-img-w';
    // div6.innerHTML = ' <img src="./Images/card-img.svg" alt="project-preview" class="project-img">';
    div5.appendChild(div6);

    // div7
    let div7 = document.createElement('div');
    div7.className = 'card-cb-wrap';
    div5.appendChild(div7);
    let p = document.createElement('p');
    p.className = 'card-p';
    p.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos fuga deleniti, rerum officiis ducimus labore ut quo soluta odit consequuntur, neque aspernatur iste autem nihil eum maiores rem saepe! Natus quia voluptatum ipsam, eos doloremque facere, accusantium perferendis, ut vero minima maxime rerum quasi iusto tempora dolore. Eveniet, eligendi est?';
    div7.appendChild(p);

    // div8
    let div8 = document.createElement('div');
    div8.className = 'card-b-wrap';
    div7.appendChild(div8);
    let a1 = document.createElement('a');
    a1.className = 'card-link';
    a1.href = '';
    a1.innerHTML = ' <button class="card-button">See Live <img src="./Images/card-icon.svg" alt="" class="card-i"></button>';
    div8.appendChild(a1);
    let a2 = document.createElement('a');
    a2.className = 'card-link';
    a2.href = '';
    a2.innerHTML = '<button class="card-button">See Source<img src="./Images/github-w.svg" alt=""></button>';
    div8.appendChild(a2);

    let cardX = document.getElementById('card-x');
    cardX.addEventListener('click', () => {
      document.body.removeChild(div1);
      document.getElementsByClassName('content-card-wrap').style.visibility = 'visible';
    });
  });
}

// Closing the window
let cardX = document.getElementById('card-x');
cardX.addEventListener('click', () => {
  document.body.removeChild(div1);
  document.getElementsByClassName('content-card-wrap').style.visibility = 'visible';
});




let proj1 = {
  name: 'Multi Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredImg: './Images/gymfit.svg',
  technologies: ['html', 'css', 'bootstrap', 'Ruby'],
  link: 'https://wh1tecl0ud.github.io/Portfolio_setup/',
}

let proj2 = {
  name: 'Multi Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredImg: './Images/sp-back.png',
  technologies: ['html', 'css', 'bootstrap', 'Ruby'],
  link: 'https://wh1tecl0ud.github.io/Portfolio_setup/',
}

let proj3 = {
  name: 'Multi Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredImg: './Images/sp-back.png',
  technologies: ['html', 'css', 'bootstrap', 'Ruby'],
  link: 'https://wh1tecl0ud.github.io/Portfolio_setup/',
}

let pro4 = {
  name: 'Multi Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredImg: './Images/sp-back.png',
  technologies: ['html', 'css', 'bootstrap', 'Ruby'],
  link: 'https://wh1tecl0ud.github.io/Portfolio_setup/',
}

let proj5 = {
  name: 'Multi Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredImg: './Images/sp-back.png',
  technologies: ['html', 'css', 'bootstrap', 'Ruby'],
  link: 'https://wh1tecl0ud.github.io/Portfolio_setup/',
}

let proj6 = {
  name: 'Multi Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredImg: './Images/sp-back.png',
  technologies: ['html', 'css', 'bootstrap', 'Ruby'],
  link: 'https://wh1tecl0ud.github.io/Portfolio_setup/',
}

let proj7 = {
  name: 'Multi Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredImg: './Images/sp-back.png',
  technologies: ['html', 'css', 'bootstrap', 'Ruby'],
  link: 'https://wh1tecl0ud.github.io/Portfolio_setup/',
}



