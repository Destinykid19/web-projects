const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


//display menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
 
menu.addEventListener('click', mobileMenu);

// show active menu when scrolling

const highlightMenu = () => {
    const ele = document.querySelector('.highlight');
    const home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const service = document.querySelector('#service-page');
    const contact = document.querySelector('#contact');
    let scrollPos = window.scrollY;

    // console.log(scrollPos); //checking Pos

    // when hightlight supose to work

    if ( window.innerWidth > 960 && scrollPos < 500) {
        home.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1350) {
        about.classList.add('highlight');
        home.classList.remove('highlight');
        service.classList.remove('highlight');
        return;
    }
     else if (window.innerWidth > 960 && scrollPos < 2100) {
        service.classList.add('highlight');
        about.classList.remove('highlight');
        contact.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2530) {
        contact.classList.add('highlight');
        service.classList.remove('highlight');
        return;
    }

    if ((ele && window.innerWidth < 960 && scrollPos < 600 ) || ele ) {
        ele.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu

const hideMobileMenu = () => {
    const menubar = document.querySelector('.is-active')
    if( window.innerWidth <= 768 && menubar) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);