import '../css/main.scss';

// Toogle menu
// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

const toggleMenu = () => {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
    
        // Set Menu State
        showMenu = true;
      } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
    
        // Set Menu State
        showMenu = false;
      }
}

menuBtn.addEventListener('click', toggleMenu);
// end of toogle menu


// add current class

navItems.forEach(el => {
    el.addEventListener('click', (current) => {
        const item = current;
        const parent = el.parentElement.children;
        Array.from(parent).forEach(child => {
            if (child.classList.contains('current')) {
                child.classList.remove('current');
            }
        })
        item.target.parentElement.classList.add("current");
    })
})

// end of add transition


// add transition
const slideDown =  document.querySelectorAll('.slideDown');
const slideLeft =  document.querySelectorAll('.slideLeft');
const slideRight =  document.querySelectorAll('.slideRight');

const timeOut = (el) => {
    setTimeout(() => {
        el.classList.remove('animated', 'slideInDown');
        el.classList.remove('animated', 'slideInLeft');
        el.classList.remove('animated', 'slideInRight');
    },1000)
    
}

const down = () => {
    slideDown.forEach((el) => {
        el.classList.add('animated', 'slideInDown');
        timeOut(el);
    })
}

const left = () => {
    slideLeft.forEach((el) => {
        el.classList.add('animated', 'slideInLeft');
        timeOut(el);
    })
}

const right = () => {
    slideRight.forEach((el) => {
        el.classList.add('animated', 'slideInRight');
        timeOut(el);
    })
}

const addSlide = () => {
    down();
    left();
    right();
}

addSlide();

var resizeTimer;
const resizeSlide = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        addSlide();
        left();
        right();
    }, 500);
}

window.addEventListener("resize", resizeSlide);
//window.addEventListener("scroll", resizeSlide);

// end of add transition


// fixed nav
const nav = document.querySelector('header');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}
window.addEventListener('scroll', fixNav);
// end of fixed nav


// progress bar
const progress = document.querySelectorAll('#our-expertise .progress-wrap');
const classprogress = ['branding','design','development'];
var counter = 0;
var width = 0;

const percentprogress = function(el,percentvalue) {
    const bar = el.querySelector('.progress-bar');
            const percent = el.querySelector('.content .percent');
            width = 0;
            var id = setInterval(frame, 50);
            function frame() {
              if (width >= percentvalue) {
                clearInterval(id);
              } else {
                width++; 
                bar.style.width = width + '%'; 
                percent.innerText = width + '%';
                percent.style.left = width + 5 + '%';
              }
            }
}

progress.forEach(el => {
    if (counter >= 3) {
        counter = 1
    } else {
        let elclass = classprogress[counter];
        el.classList.add(elclass);

        if (el.classList.contains('branding')) {
            var percentvalue = 90;
            percentprogress(el,percentvalue)
        } else if (el.classList.contains('design')) {
            var percentvalue = 80;
            percentprogress(el,percentvalue)
        } else if (el.classList.contains('development')) {
            var percentvalue = 85;
            percentprogress(el,percentvalue)
        } 
        counter++;
    }
})
// end of progress bar

// contact form validation
const formsubmit = document.querySelector('#form');

class UI {
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('#contact-form .slideLeft');
        const form = document.querySelector('#form');
        container.insertBefore(div, form);
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
      }
      
    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
      }
}

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  if (formsubmit) {
    formsubmit.addEventListener('submit', (e) => {
        e.preventDefault();
      
        // Get form values
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
    
        
        if (name === '' || email === '' || message === '') {
            UI.showAlert('Please fill in all fields', 'danger');
        } else if(!validateEmail(email)) {
            UI.showAlert('Email not valid', 'danger');
            //document.querySelector('#email').value = '';
    
        } else {
            UI.clearFields();
    
            // Show success message
            UI.showAlert('Email sent', 'success');
        }
    
    })
}
// end of contact form validation



