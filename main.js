const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// MENU SHOW

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MOBILE MENU
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ROTATING MENU

var titles = ["student", "programmer", "creator", "learner"];
var currentTitleIndex = 0;
var currentCharIndex = 0;
var isDeleting = false;
var el = document.getElementById('rotating-title');

function rotateTitle() {
    var currentTitle = titles[currentTitleIndex];
    if (isDeleting) {
        // Remove a character
        el.textContent = currentTitle.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        // If all characters are deleted, move to the next title and start typing
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        }
    } else {
        // Add a character
        el.textContent = currentTitle.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        // If all characters are typed, start deleting after a delay
        if (currentCharIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(rotateTitle, 2000); // Delay before start deleting
            return;
        }
    }
    // Schedule the next update
    var delay = isDeleting ? 100 : 200; // Deleting is faster than typing
    setTimeout(rotateTitle, delay);
}

// Start typing
rotateTitle();

const skillsContent = document.getElementsByClassName('skills_content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
    if (itemClass === 'skills__content skills__open'){
        this.parentNode.className = 'skills__content skills__close'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

// PORTFOLIO SWIPER

let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

var nextButton = document.querySelector('.swiper-button-next');
var prevButton = document.querySelector('.swiper-button-prev');

// Add event listeners for the click event on these buttons
nextButton.addEventListener('click', function() {
  swiper.autoplay.stop(); // stop autoplay
});

prevButton.addEventListener('click', function() {
  swiper.autoplay.stop(); // stop autoplay
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header') 
}
window.addEventListener('scroll', scrollHeader)

// SHOW SCROLL UP
function scrollTop(){
    const scrollTop = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

//DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon':'uil-sun'

if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})

// ANIMATE DROP DOWNS
var progressBars = [
    { element: document.getElementById('bar1'), width: '30%' },
    { element: document.getElementById('bar2'), width: '30%' },
    { element: document.getElementById('bar3'), width: '50%' },
    { element: document.getElementById('bar4'), width: '10%' },
    { element: document.getElementById('bar5'), width: '65%' },
    { element: document.getElementById('bar6'), width: '40%' },
    { element: document.getElementById('bar7'), width: '50%' },
    { element: document.getElementById('bar8'), width: '60%' },
    { element: document.getElementById('bar9'), width: '30%' },
    { element: document.getElementById('bar10'), width: '50%' },
    { element: document.getElementById('bar11'), width: '20%' }
  ];
  
  // Map button IDs to arrays of progress bar indices.
  var buttonMapping = {
    'button1': [0, 1, 2, 3],
    'button2': [4, 5, 6],
    'button3': [7, 8, 9, 10]
  };
  
  // Get all the buttons.
  var buttons = document.querySelectorAll('.skills__arrow');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the IDs of the progress bars this button should animate.
      var button_id = button.getAttribute('id');
      var progressBarIndices = buttonMapping[button_id];
      
      // Slice out the relevant progress bars and animate them.
      progressBarIndices.forEach(index => {
        var progressBar = progressBars[index];
        var animation = progressBar.element.animate(
          [
            { width: '0%' },
            { width: progressBar.width }
          ], 
          {
            duration: 400, 
            fill: 'forwards', 
            easing: 'ease-out'
          }
        );
        animation.cancel();
        animation.play();
      });
    });
  });

 
  
  
  
  
  
  
  