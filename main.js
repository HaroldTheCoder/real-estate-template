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

// Stats Counter function
const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('data-value');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});
