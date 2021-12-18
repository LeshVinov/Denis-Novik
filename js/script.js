const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

const navBtn = document.querySelector('.navigation');
let navOpen = false;

const titleName = document.querySelector('.section_title');
let titleNone = false;

const flexEnd = document.querySelector('.name-and-burger');
let endFlex = false;

const descNone = document.querySelector('.desc_promo');
let noneDesc = false;

const rotationText = document.querySelector('.rotation_text-container')
let textRotation = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navBtn.classList.add('nav-open');
        navOpen = true;
        titleName.classList.add('nameNone');
        titleNone = true;
        flexEnd.classList.add ('flex_end');
        endFlex = true;
        descNone.classList.add ('desc_none');
        noneDesc = true;
        rotationText.classList.add ('text-appear');
        textRotation = true;
    } else {
        menuBtn.classList.remove ('open');
        menuOpen = false;
        navBtn.classList.remove ('nav-open');
        navOpen = false;
        titleName.classList.remove ('nameNone');
        titleNone = false ;
        flexEnd.classList.remove ('flex_end');
        endFlex = false ;
        descNone.classList.remove ('desc_none');
        noneDesc = false;
        rotationText.classList.remove ('text-appear');
        textRotation = false;
    };
});


