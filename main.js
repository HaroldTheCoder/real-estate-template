const navbar = document.querySelector('#main-navbar');
const navbarToggler = document.querySelector('.navbar-toggler');
const counters = document.querySelectorAll('.value');
const speed = 200;
let statsBox = document.querySelector('#section-7').offsetTop - 300;


// Scroll functions 
window.addEventListener('scroll', ()=> {
    /* Fixed Navbar function */
    if(window.scrollY > 0) {
        navbar.classList.add('active-scroll');
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('active-scroll');
        navbar.classList.remove('shadow');
    }

    /* Stats Counter function - triggers on if elements position equals viewport*/
    if(window.scrollY >= statsBox ) {
        counters.forEach( counter => {
            const animate = () => {
                const value = +counter.getAttribute('data-value');
                const data = +counter.innerText;
     
                const time = value / speed;
                if(data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 10);
                } else{
                    counter.innerText = value;
                }
            }
            animate();
        });
    }

});

// Navbar Toggler custom function
navbarToggler.addEventListener('click', ()=> {
    navbar.classList.toggle('open');
})






