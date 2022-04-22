const navbar = document.querySelector('#main-navbar');
const navbarToggler = document.querySelector('.navbar-toggler');

// Scroll functions 
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 0) {
        navbar.classList.add('active-scroll');
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('active-scroll');
        navbar.classList.remove('shadow');
    }
});

// Navbar Toggler custom function
navbarToggler.addEventListener('click', ()=> {
    navbar.classList.toggle('open');
})