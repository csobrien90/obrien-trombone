const hamburger = document.getElementById('hamburger-icon');
const navMenu = document.getElementsByTagName('nav')[0];

//open and close navMenu with hamburger button

hamburger.addEventListener('click', () => {
    if (navMenu.style.height == 0 || navMenu.style.height == '0px') {
        navMenu.style.height = '194px';
        //hamburger menu animation to 'x' will go here
    } else {
        navMenu.style.height = 0;
        //hamburger menu 'x' animation back to original design will go here
    }
})

//reset navMenu height on resize

window.addEventListener('resize', () => {
    if (window.innerWidth > 599) {
        navMenu.style.height = 'unset';
    } else if (window.innerWidth < 600 && navMenu.style.height !== 0) {
        navMenu.style.height = 0;
    }
})