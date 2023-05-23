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
