const hamburger = document.getElementById('hamburger-icon');
const navMenu = document.getElementsByTagName('nav')[0];
const topLine = document.getElementsByClassName('top')[0];
const bottomLine = document.getElementsByClassName('bottom')[0];
const middleLine = document.getElementsByClassName('middle')[0];

//open and close navMenu with hamburger button

hamburger.addEventListener('click', () => {
    if (navMenu.style.height == 0 || navMenu.style.height == '0px') {
        navMenu.style.height = '194px';
        
        //hamburger menu animation to 'x'
        middleLine.style.height = '0';
        topLine.style.transform = 'translateY(7.5px) rotate(45deg)';
        bottomLine.style.transform = 'translateY(-7.5px) rotate(-45deg)';

    } else {
        navMenu.style.height = 0;

        //hamburger menu 'x' animation back to original design
        topLine.style.transform = 'rotate(0) translateY(0)';
        bottomLine.style.transform = 'rotate(0) translateY(0)';
        setTimeout(() => {middleLine.style.height = '5px';}, 100);
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