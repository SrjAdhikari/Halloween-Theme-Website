/* ********************** SHOW MENU ********************** */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

    
// Show Menu when the navToggle button is clicked
if (navToggle) {
    navToggle.addEventListener('click', () => {
        // Add the 'show-menu' class to the menu to make it visible
        navMenu.classList.add('show-menu')
    })
}


// Hide Menu when the navClose button is clicked
if (navClose) {
    navClose.addEventListener('click', () => {
        // Remove the 'show-menu' class to hide the menu
        navMenu.classList.remove('show-menu')
    })
}


/* ********************** REMOVE MENU ON MOBILE ********************** */
const navLink = document.querySelectorAll('.nav__link');

// Function to remove the menu when any nav link is clicked
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When any navigation link is clicked, remove the 'show-menu' class to hide the menu
    navMenu.classList.remove('show-menu');
}

// Add click event listener to each navigation link to trigger the linkAction function
navLink.forEach(link => link.addEventListener('click', linkAction));


/* ********************** HOME SWIPER ********************** */
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/* ********************** CHANGE BACKGROUND HEADER ********************** */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    // When the scroll position is greater than 50 viewport height, add the scroll-header class to the header tag
    if(window.scrollY >= 50) 
        header.classList.add('scroll-header'); 
    else 
        header.classList.remove('scroll-header');
});


/* ********************** NEW ARRIVALS SWIPER ********************** */
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});


/* ********************** Show Go To Top Button ********************** */
// Function to show the Go To Top button
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll position is higher than 350px from the top, show the scroll-up button
    if(window.scrollY >= 350)
        scrollUp.classList.add('show-scroll');          // Add the 'show-scroll' class to display the Go To Top button
    else
        scrollUp.classList.remove('show-scroll');       // Remove the 'show-scroll' class to hide the Go To Top button
});


/* ********************** SCROLL REVEAL ANIMATION ********************** */
const scrollUp = ScrollReveal({
    origin: 'top',          // The animation will start from the top of the element
    distance: '60px',       // The element will move 60px during the reveal animation
    duration: 2500,         // The animation will take 2500ms to complete
    delay: 300,             // The animation will start after 300ms
});

// Reveal specific elements when they come into view with the ScrollReveal configuration
scrollUp.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
scrollUp.reveal(`.category__data, .trick__content, .footer__content`, {interval: 100})
scrollUp.reveal(`.about__data, .discount__img`, {origin: 'left'})
scrollUp.reveal(`.about__img, .discount__data`, {origin: 'right'})