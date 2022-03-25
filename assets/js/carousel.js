/**
 * @param {HTMLDivElement} carousel
 */

export default (carousel) => {
    // load articles
    const articles = carousel.querySelectorAll('article');
    carousel.innerHTML = "";
    carousel.classList.add('carouselController', 'carousel-main');

    // add arrows
    const arrow = (name) => {
        const box = document.createElement('div');
        const arrow = document.createElement('div');

        arrow.classList.add('arrow', 'carouselController', name);
        box.classList.add('arrow-box', 'carouselController', 'carousel-el');
        
        arrow.appendChild(document.createElement('span'));
        box.appendChild(arrow);

        return box;
    };

    var arrowLeft = arrow('left');
    var arrowRight = arrow('right');

    carousel.appendChild(arrowLeft);

    // container
    const container = document.createElement('div');
          container.classList.add('container', 'carouselController', 'carousel-body');
    
    const content = document.createElement('div'); // content
          content.classList.add('container', 'carouselController', 'carousel-body');
    
    const index = document.createElement('div'); // index
          index.classList.add('index', 'carouselController');    
    
    container.appendChild(content);
    container.appendChild(index);
    carousel.appendChild(container);

    // last arrow
    carousel.appendChild(arrowRight);

    // style
    const style = document.createElement('style');
    style.innerHTML = `.carousel.carouselController {display: flex; flex-direction: row; flex-wrap: nowrap; width: 720px; height: 480px; margin: 5px; border: 1px solid #222; border-radius: 5px; overflow: hidden;} .carousel.carouselController .arrow-box.carouselController {flex: 1; display: flex; flex-direction: row; justify-content: center; align-items: center;} .carousel.carouselController .arrow.carouselController {display: block; cursor: pointer; width: 20px; height: 34px; transition: all .2s; z-index: 3;} .carousel.carouselController .arrow.carouselController.left {transform: rotate(.5turn)} .carousel.carouselController .arrow.carouselController:hover {transform: scale(125%)} .carousel.carouselController .arrow.carouselController.left:hover {transform: rotate(.5turn) scale(125%)} .carousel.carouselController .arrow.carouselController span, .arrow span::after {position: relative; top: 8px; display: block; width: 20px; height: 2px; background: #333; border-radius: 2px; transform: rotate(60deg); cursor: pointer;} .carousel.carouselController .arrow.carouselController span::after {content: ''; left: calc(50% + 4px);} .carousel.carouselController .container.carouselController, .container.carouselController .content.carouselController {flex: 100%; width: 100%; height: 100%;} .carousel.carouselController .container.carouselController .content.carouselController {display: flex; position: relative; flex-direction: column; justify-content: center; align-items: center; z-index: 1; width: calc(100% + 40px); right: 20px;} .carousel.carouselController .container.carouselController .index.carouselController {display: inline-flex; position: relative; bottom: 24px; height: 14px; width: 100%; justify-content: center; z-index: 2;} .carousel.carouselController .container.carouselController .index.carouselController span {display: block; width: 10px; height: 10px; background: transparent; border: 2px solid var(--primary-color); border-radius: 10px; margin: 0 2px;} .carousel.carouselController .container.carouselController .index.carouselController span.filled {background: var(--primary-color)}`;
    
    try { document.head.appendChild(style); }
    catch { document.querySelector('body').appendChild(style); }

    // add events
    const updateCarousel = () => {
        // 
    };

    arrowLeft.addEventListener('click', updateCarousel);
    arrowRight.addEventListener('click', updateCarousel);
};
