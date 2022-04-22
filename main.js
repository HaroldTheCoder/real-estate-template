const navbar = document.querySelector('#main-navbar');

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
