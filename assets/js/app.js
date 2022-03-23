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

    // reload footer
    if (document.querySelector('footer').classList.contains('auto-reload')) {
        document.header = document.querySelector('header');
        document.footer = document.querySelector('footer');
        document.main = document.querySelector('main');
        
        document.height = document.documentElement.clientHeight;

        const refreshSizes = () => {
            var bottom = document.height - document.main.clientHeight - 100;
            document.footer.style.bottom = `${((bottom <= 0) ? bottom : 0)}px`;

            var mainMinHeight = document.height - document.header.clientHeight - document.footer.clientHeight;
            document.main.style.minHeight = `${Math.abs(mainMinHeight)}px`;
        };

        setInterval(refreshSizes, 500);
    }
};
