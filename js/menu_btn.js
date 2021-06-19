const menuBtn = document.querySelector(".menu_btn");
const mobileNav = document.querySelector(".mobile_nav");
let menuOpen = false;

menuBtn.addEventListener('click', function(e){
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    if(menuOpen === false) {
        mobileNav.classList.add('invisible');
    } else {
        mobileNav.classList.remove('invisible');
    }
});