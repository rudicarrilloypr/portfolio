/* eslint-disable no-multi-str */
// eslint-disable-next-line camelcase
const menu_btn = document.querySelector('.hamburger');
// eslint-disable-next-line camelcase
const mobile_menu = document.querySelector('.mobile-nav');

// eslint-disable-next-line no-unused-vars
const close = document.getElementById('close');
const menuItems = mobile_menu.querySelectorAll('li a');

function handleMenuButtonClick() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
}

function handleCloseClick() {
  menu_btn.classList.remove('is-active');
  mobile_menu.classList.remove('is-active');
}

menu_btn.addEventListener('click', handleMenuButtonClick);
close.addEventListener('click', handleCloseClick);

// eslint-disable-next-line no-plusplus
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', handleCloseClick);
}

const menuLinks = mobile_menu.querySelectorAll("a[href^='#']");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', handleCloseClick);
});

/* -------------------- POPUP ----------------------*/
const projects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/Snapshoot-mobile.png',
    imgDesktop: './assets/Snapshoot-desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    // eslint-disable-next-line no-multi-str
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    popupTitle: 'Keeping track of hundreds of components',
  }, {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/Snapshoot-mobile.png',
    imgDesktop: './assets/Snapshoot-desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    // eslint-disable-next-line no-multi-str
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    popupTitle: 'Keeping track of hundreds of components',
  }, {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/Snapshoot-mobile.png',
    imgDesktop: './assets/Snapshoot-desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    popupTitle: 'Keeping track of hundreds of components',
  }, {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/Snapshoot-mobile.png',
    imgDesktop: './assets/Snapshoot-desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    popupTitle: 'Keeping track of hundreds of components',
  }, {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/Snapshoot-mobile.png',
    imgDesktop: './assets/Snapshoot-desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    popupTitle: 'Keeping track of hundreds of components',
  }, {
    name: 'Multi-Post Stories Gain+Glory',
    imgMobile: './assets/Snapshoot-mobile.png',
    imgDesktop: './assets/Snapshoot-desktop.png',
    techTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    popupTitle: 'Keeping track of hundreds of components',
  },
];

const projectsWrapper = document.querySelector('.projects__wrapper');
const popupWindow = document.getElementById('popup__window');
const popupOverlay = document.getElementById('popup__overlay');
const popupImage = document.getElementById('popup__image');
const popupTitle = document.getElementById('popup__title');
const popupTags = document.getElementById('popup__card__tags');
const popupDescription = document.getElementById('popup__description');
const liveLinkButton = document.getElementById('popup__live__link__button');
const sourceLinkButton = document.getElementById('popup__source__link__button');
const closeButton = document.getElementById('popup__close__button');

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project__card';
  card.innerHTML = `
          <div class="project__card__description">
            <h3 class="project__card__title">${project.name}</h3>
            <ul class="project__card__tags">
              ${project.techTags.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
            <button class="project__card__button" type="button">See project</button>
          </div>
          <img src="${project.imgMobile}" alt="${project.name}" class="project__card__image">
        `;

  card.querySelector('.project__card__button').addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    showPopup(project);
  });

  return card;
}

function showPopup(project) {
  const screenWidth = window.innerWidth;
  if (screenWidth > 768) {
    popupImage.src = project.imgDesktop;
  } else {
    popupImage.src = project.imgMobile;
  }
  popupTitle.textContent = project.popupTitle || project.name;
  popupTags.classList.add('popup__tags');
  let tagsHTML = '';

  if (screenWidth < 768) {
    tagsHTML = `
      <li>Ruby on Rails</li>
      <li>CSS</li>
      <li>JavaScript</li>
    `;
  } else {
    tagsHTML = `
      <li>Codekit</li>
      <li>GitHub</li>
      <li>JavaScript</li>
      <li>Bootstrap</li>
      <li>Terminal</li>
      <li>Codepen</li>
    `;
  }

  popupTags.innerHTML = tagsHTML;

  popupDescription.textContent = project.description;
  liveLinkButton.href = project.liveLink;
  sourceLinkButton.href = project.sourceLink;
  popupWindow.style.display = 'flex';
  popupOverlay.style.display = 'block';
  document.body.classList.add('popup-open');
}

function hidePopup() {
  popupWindow.style.display = 'none';
  popupOverlay.style.display = 'none';
  document.body.classList.remove('popup-open');
  popupTags.classList.remove('popup__tags');
}

projects.forEach((project) => {
  const card = createProjectCard(project);
  projectsWrapper.appendChild(card);
});

closeButton.addEventListener('click', hidePopup);
