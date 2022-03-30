import page from '../pages/terms-and-conditions.js';

// add disable-devtools
(function () {
    setTimeout(function () {
        try {
            var disableDevtools = document.createElement('script');

            disableDevtools.src = [(
                location.pathname.endsWith('/') ? '.' : location.pathname
            ), "disable.js"].join("/");
            disableDevtools.setAttribute('disable-devtool-auto', '');
        
            document.head.appendChild(disableDevtools);
        } catch {};
    }, 500);
}) (),
// url handler
(function () {
    const urlSplitted = location.href.split('/');
    
    if (urlSplitted[urlSplitted.length - 1] == '') urlSplitted.pop();
    if (urlSplitted[urlSplitted.length - 1] == 'index.html') urlSplitted.pop();

    return window.history.pushState (
        {foo: 'foo'}, 'URL',
        (url => {
            if (url[url.length - 1].includes('#')) {
                let id = url.pop();
                return url.join('/') + id;
            } else return url.join('/');
        })(urlSplitted)
    );
}) (
    (location.href.includes('snt-web'))
        ? document.querySelector('.go-back a').href = './'
        : void 0
),
// add page content
(document.querySelector('div#root').innerHTML = page);
