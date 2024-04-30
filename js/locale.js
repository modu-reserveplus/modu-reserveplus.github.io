const updateLinks = (path) => {
    const lang = document.querySelector("html").getAttribute('lang')
    const link = document.querySelector(lang === 'en-US' ? '.locale-ua' : '.locale-en')
    if (lang === 'en-US') {
        path = path.substring( 3 )
    } 
    else {
        path = "/en" + path
    }
    if (link) link.setAttribute('href', path)
}

window.history.pushState = new Proxy(window.history.pushState, {
    apply: (target, thisArg, argArray) => {
        updateLinks(argArray[2])
        return target.apply(thisArg, argArray);
    },
});

window.addEventListener("load", () => {
    updateLinks(window.location.pathname)
})