// You can add a list of files
function importAll(r) {
   return r.keys().map(r);
}
importAll(require.context('./static/img', false, /\.(png|jpe?g|svg)$/));

// ... or, add files individually
import './vendors/normalize/normalize.css';
import './styles/main.css';
import './styles/header.css';

document.addEventListener('click', (e) => {
   const isDropdownButton = e.target.matches('[data-dropdown-button]');
   if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

   let currentDropdown;
   if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
   }

   document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
   });
});