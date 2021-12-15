function importAll(r) {
   return r.keys().map(r);
}
importAll(require.context('./static/img', false, /\.(png|jpe?g|svg)$/));

import './vendors/normalize/normalize.css';
import './styles/main.css';
import './styles/header.css';
import './styles/first-section.css';
import './styles/second-section.css';
import './styles/third-section.css';
import './styles/footer.css';
import './styles/github.css';

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

document.addEventListener('click', (e) => {
   const isDropdownButton = e.target.matches('[data-dropdown-button]');
   const isDropdownButtonP = e.target.matches('[data-dropdown-button-product]');

   if (!isDropdownButtonP) {
      if (!(window.innerHeight <= 1000)) {
         if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;
      }
   }

   let currentDropdown;
   if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
      try {
         currentDropdown.childNodes[0].childNodes[1].classList.toggle('icon-arrow-active');
      } catch (e) {
         console.info('Info: We avoid stopping the flow of execution.');
      }
   }

   if (isDropdownButtonP) {
      currentDropdown = e.target.closest('[data-dropdown-inside]');
      currentDropdown.classList.toggle('active');
      currentDropdown.childNodes[0].childNodes[1].classList.toggle('icon-arrow-active');

      document.querySelectorAll('[data-dropdown-inside].active').forEach((dropdown) => {
         if (dropdown === currentDropdown) return;
         dropdown.classList.remove('active');
      });

      return;
   }

   document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
   });

   document.querySelectorAll('[data-dropdown-inside].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
   });

   if (!isDropdownButton && !menuOpen) return;

   if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
   } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
   }
});
