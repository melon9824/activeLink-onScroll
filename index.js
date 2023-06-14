/**
 * ! active section on scroll
 */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__link');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav__link[href*=' + id + ']').classList.add('active');
            });
        };
    });
};