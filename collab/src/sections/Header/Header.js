// styles
import './Header.scss';

// show the navigation menu
const header = document.querySelector('.header');
const navMenu = header.querySelector('.header__nav');

const showMenuBtn = header.querySelector('.header__nav-menu-btn--show');
const hideMenuBtn = header.querySelector('.header__nav-menu-btn--hide');

let isActive = false;

function showMenu() {
    isActive = true;

    document.body.style.overflow = 'hidden';

    header.style.bottom = 0;

    navMenu.classList.add('header__nav--active');
}

function hideMenu() {
    isActive = false;

    setTimeout(() => {
        document.body.style.overflow = 'auto';

        header.style.bottom = 'auto';
    }, 200);

    navMenu.classList.remove('header__nav--active');
}

showMenuBtn.addEventListener('click', showMenu);
hideMenuBtn.addEventListener('click', hideMenu);

// hide the menu on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isActive) {
        hideMenu();
    }
});

// hide/show the header during scroll
let scrollValue = null;

if (!isActive) {
    document.addEventListener('scroll', (e) => {
        if (!scrollValue) {
            scrollValue = window.scrollY;
        } else {
            if (window.scrollY > scrollValue) {
                // scrolling down
                header.style.transform = `translate3d(0, -100%, 0)`;
            } else {
                // scrolling up
                header.style.transform = `translate3d(0, 0, 0)`;
            }
            scrollValue = window.scrollY;
        }
    });
}
