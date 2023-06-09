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
    name: 'Fortnite New Cosmetics App',
    imgMobile: './assets/fortnite-api-app.pg.png',
    imgDesktop: './assets/fortnite-api-app.pg.png',
    techTags: ['Fortnite API', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://fortnite-api-new.netlify.app/',
    sourceLink: 'https://github.com/rudicarrilloypr/fortnite-api',
    description: 'Webb app that recieve updated data from the official Fortnite API and shows the upcoming cosmetics coming to the game',
    popupTitle: 'Fortnite New Cosmetics App',
  }, {
    name: 'To-Do List App',
    imgMobile: './assets/todo.png',
    imgDesktop: './assets/todo.png',
    techTags: ['CSS', 'JavaScript', 'HTML', 'Webpack'],
    liveLink: 'https://rudicarrilloypr.github.io/todo-list/dist/',
    sourceLink: 'https://github.com/rudicarrilloypr/todo-list',
    // eslint-disable-next-line no-multi-str
    description: 'an aesthetic basic To-Do List project',
    popupTitle: 'To-Do List',
  }, {
    name: 'R&B Music<br/>World Tour 2023',
    imgMobile: './assets/capstone.png',
    imgDesktop: './assets/capstone.png',
    techTags: ['CSS', 'JavaScript', 'HTML', 'Github Pages'],
    liveLink: 'https://rudicarrilloypr.github.io/capstone-module-1/main.html',
    sourceLink: 'https://github.com/rudicarrilloypr/capstone-module-1',
    // eslint-disable-next-line no-multi-str
    description: 'The R&B Music World Tour is an annual three-day outdoor music festival that features national and international Rythm & Blues, Jazz, soul artists and emerging talents.',
    popupTitle: 'R&B Music World Tour ',
  }, {
    name: 'Awesome Books App',
    imgMobile: './assets/addbooks.png',
    imgDesktop: './assets/addbooks.png',
    techTags: ['ES6', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://rudicarrilloypr.github.io/awesome-books-es6/',
    sourceLink: 'https://github.com/rudicarrilloypr/awesome-books-es6',
    description: 'basic website that allows users to add/remove books from a list.',
    popupTitle: 'Awesome Books App',
  }, {
    name: 'Leaderboard App',
    imgMobile: './assets/leaderboard.png',
    imgDesktop: './assets/leaderboard.png',
    techTags: ['API', 'CSS', 'JavaScript', 'HTML', 'Webpack', 'ES6'],
    liveLink: 'https://rudicarrilloypr.github.io/leaderboard-list/dist/',
    sourceLink: 'https://github.com/rudicarrilloypr/leaderboard-list',
    description: 'Leaderboard App project for the Leaderboard list app, using webpack and ES6 features, notably modules.',
    popupTitle: 'Leaderboard App',
  }, {
    name: 'My Pokedex App',
    imgMobile: './assets/pokemonapp.png',
    imgDesktop: './assets/pokemonapp.png',
    techTags: ['Webpack', 'CSS', 'JavaScript', 'API', 'HTML', 'ES6'],
    liveLink: 'https://gleeful-kitsune-465a87.netlify.app/',
    sourceLink: 'https://github.com/rudicarrilloypr/kanban-capstone-js-module2/tree/main',
    description: 'Capstone web application that sends and recieve Data from the Pokemon API',
    popupTitle: 'My Pokedex App',
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
          <img src="${project.imgDesktop}" alt="${project.name}" class="project__card__image">
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
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Webpack</li>
    `;
  } else {
    tagsHTML = `
      <li>HTML</li>
      <li>GitHub</li>
      <li>JavaScript</li>
      <li>CSS</li>
      <li>Terminal</li>
      <li>WebPack</li>
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

/* ———— contact validation ———— */
const mobileForm = document.querySelector('.contact__form.mobile__form');
const desktopForm = document.querySelector('.contact__form.desktop__form');

function validateEmail(event, emailId) {
  const emailInput = document.getElementById(emailId);
  const email = emailInput.value;

  if (email !== email.toLowerCase()) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = 'Please use lowercase letters';
    emailInput.parentNode.insertBefore(errorElement, emailInput.nextSibling);

    event.preventDefault();
  }
}

mobileForm.addEventListener('submit', (event) => {
  validateEmail(event, 'email-mobile');
});

desktopForm.addEventListener('submit', (event) => {
  validateEmail(event, 'email');
});

/* ———— preserve data ———— */

function saveFormData() {
  const formData = {
    fullName: document.getElementById('full-name').value,
    emailMobile: document.getElementById('email-mobile').value,
    messageMobile: document.getElementById('message-mobile').value,
    firstName: document.getElementById('firstname').value,
    lastName: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}
function loadFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));

  if (formData) {
    if (formData.fullName) {
      document.getElementById('full-name').value = formData.fullName;
    }
    if (formData.emailMobile) {
      document.getElementById('email-mobile').value = formData.emailMobile;
    }
    if (formData.messageMobile) {
      document.getElementById('message-mobile').value = formData.messageMobile;
    }
    if (formData.firstName) {
      document.getElementById('firstname').value = formData.firstName;
    }
    if (formData.lastName) {
      document.getElementById('lastname').value = formData.lastName;
    }
    if (formData.email) {
      document.getElementById('email').value = formData.email;
    }
    if (formData.message) {
      document.getElementById('message').value = formData.message;
    }
  }
}

document.getElementById('full-name').addEventListener('input', saveFormData);
document.getElementById('email-mobile').addEventListener('input', saveFormData);
document.getElementById('message-mobile').addEventListener('input', saveFormData);
document.getElementById('firstname').addEventListener('input', saveFormData);
document.getElementById('lastname').addEventListener('input', saveFormData);
document.getElementById('email').addEventListener('input', saveFormData);
document.getElementById('message').addEventListener('input', saveFormData);

window.addEventListener('load', loadFormData);
