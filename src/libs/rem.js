
function initRem() {
    let cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
    window.document.documentElement.style.fontSize = `${100 * cale}px`
}

window.addEventListener('resize', function() {
    initRem()
})
