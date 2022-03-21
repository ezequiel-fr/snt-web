/**
 * @param {HTMLDivElement} caroussel
 */

export default (caroussel) => {
    const mainBox = caroussel.querySelector('div.content');
    const arrowLeft = caroussel.querySelector('div.arrow.left');
    const arrowRight = caroussel.querySelector('div.arrow.right');

    const updateContent = (e) => {
        const max = caroussel.querySelectorAll('article').length;
        var view = window.caroussel.view;

        if (e.path[0].nodeName === 'SPAN') {
            var el = e.path[0].parentElement;
        } else {
            var el = e.path[0];
        }

        if (el.classList.contains('right')) {
            var action = 1;
        } else if (el.classList.contains('left')) {
            var action = -1;
        } else return;

        view += action;
        view = view < 0 ? max - 1 : view >= max ? view = 0 : view;

        window.caroussel.view = view;
        mainBox.scroll(mainBox.clientWidth * view, 0);
    };

    window.caroussel = ({ caroussel: caroussel, view: 0 });

    arrowLeft.addEventListener('click', updateContent);
    arrowRight.addEventListener('click', updateContent);
};
