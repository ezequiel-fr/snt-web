/**
 * @param {HTMLDivElement} carousel
 */

export default (carousel) => {
    // load articles
    const articles = carousel.querySelectorAll('article');
    carousel.innerHTML = "";
    carousel.classList.add('carouselController', 'carousel-main');

    // style
    const style = document.createElement('style');
    // container
    style.innerHTML = `.carousel.carouselController {width: 100%; height: 100%; background: #f00; display: flex; flex-direction: row;}`;
    // arrows
    style.innerHTML += `.carousel.carouselController .carouselController.arrow {margin: 5px 0; width: 36px; height: 14px; transform: rotate(90deg); cursor: pointer; flex: 1;} .carousel.carouselController .carouselController.arrow.left {transform: rotate(270deg)} .carousel.carouselController .carouselController.arrow span, .carousel.carouselController .carouselController.arrow span::before {content: ''; display: block; position: relative; top: 6px; left: 0; width: 20px; height: 2px; background: #666; border-radius: 1px; transform: rotate(-30deg);} .carousel.carouselController .carouselController.arrow span::before {height: 2.75px; top: 7.9px; left: 13.5px; transform: rotate(59deg); background: #666;}`;
    // content
    style.innerHTML += `.carousel.carouselController .carousel-body {flex: 2;}`;

    // add arrows
    const arrow = (name) => {
        const arrow = document.createElement('div');

        arrow.appendChild(document.createElement('span'));
        arrow.classList.add('arrow', 'carouselController', name, 'carousel-el');

        return arrow;
    };

    carousel.appendChild(arrow('left'));

    // container
    const container = document.createElement('div');
    container.classList.add('content', 'carouselController', 'carousel-body');
    
    carousel.appendChild(container);

    // last arrow
    carousel.appendChild(arrow('right'));
    carousel.appendChild(style);
};
