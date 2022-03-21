import Carousel from './carousel.js';

window.onload = () => {
    // Carousel(document.querySelector('section .carousel'));

    const menuIcon = document.querySelector('header .icon-menu');
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        
        document.querySelector('header .second-part').classList[
            menuIcon.classList.contains('active') ? 'add' : 'remove'
        ]('active');
    });
};
