// JS for transparent navbar and bounce effect

const navbar = document.getElementById('navbar');
let scroll = false;

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scroll) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
}
