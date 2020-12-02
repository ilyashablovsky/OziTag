/* eslint-disable indent */
/**
 * Choose element function
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */

const selectElement = (element) => document.querySelector(element);


document.addEventListener('DOMContentLoaded', () => {
  // Mouse up events for mobile-menu
  selectElement('.menu-btn').addEventListener('mouseup', () => {
    selectElement('.header').classList.toggle('is-active');
    document.body.classList.toggle('is-no-scrollbar');
  });

  selectElement('.menu').addEventListener('mouseup', (event) => {
    const target = event.target;

    if (target.matches('.arrow-btn') &&
      !target.nextElementSibling.matches('.is-open')) {
      // Add all menu elements into array
      const menuElements = target.closest('.js-parent-level')
        .querySelectorAll('.menu__group');

      // Reset opened menu elements and rerotated arrows
      menuElements.forEach((element) => {
        element.classList.remove('is-open');

        element.previousElementSibling.classList.remove('is-rotate');
      });

      // Open clicked menu item
      target.parentElement.querySelector('.menu__group')
        .classList.add('is-open');
      // Rotate arrow
      target.classList.add('is-rotate');
    } else {
      // Open clicked menu item
      target.parentElement.querySelector('.menu__group')
        .classList.remove('is-open');
      // Rotate arrow
      target.classList.remove('is-rotate');
    }
  });
});
