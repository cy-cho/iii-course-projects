// clickToTop
const clickToTopBtn = document.querySelector("#clickToTopBtn");

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY < 500) {
        clickToTopBtn.style.display = "none";
    } else {
        clickToTopBtn.style.display = 'block';
    }
})

clickToTopBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})