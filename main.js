// eslint-disable-next-line camelcase
const menu_btn = document.querySelector('.hamburger');
// eslint-disable-next-line camelcase
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});
