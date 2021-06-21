/*Defining variables for the menu button element and the mobile nav*/
const menuBtn = document.querySelector(".menu_btn");
const mobileNav = document.querySelector(".mobile_nav");

/*setting a variable to false that will be used later to check if the menu button is opened*/
let menuOpen = false;

menuBtn.addEventListener('click', function(e){
    /*If not open, add open class and set value to true*/
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        /*else hide the button*/
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    /*If the button is not open, add invisible class to the mobile nav*/
    if(menuOpen === false) {
        mobileNav.classList.add('invisible');
        /*If button is open, show the mobile menu*/
    } else {
        mobileNav.classList.remove('invisible');
    }
});