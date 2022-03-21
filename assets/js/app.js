import Carousel from './carousel.js';

window.onload = () => {
    // Carousel(document.querySelector('section .carousel'));

    const menuIcon = document.querySelector('.menu .icon');
    menuIcon.addEventListener('click', () => menuIcon.classList.toggle('active'));
};
