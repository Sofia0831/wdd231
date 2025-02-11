import { toggleMenu, updateFooter } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const footerElement = document.querySelector("footer");
  updateFooter(footerElement);

  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('#animate');
  if (hamButton && navigation) {
    toggleMenu(hamButton, navigation);
  } else {
    console.error("Hamburger button or navigation element not found.");
  }
});