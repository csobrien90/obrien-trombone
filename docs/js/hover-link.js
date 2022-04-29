//Connect to the DOM

const links = document.querySelectorAll("a");

//Event listeners for hover effect that expands link descriptions

links.forEach(link => {
    
    link.addEventListener('mouseover', (event) => {
        if (event.target.parentElement.localName == "nav" && window.innerWidth > 799) {
            event.target.lastElementChild.style.maxHeight = "100px";
            setTimeout(() => {event.target.lastElementChild.style.padding = "0 20px 20px";}, 100);
        }
    })

    link.addEventListener('mouseleave', (event) => {
        if (window.innerWidth > 799) {
            event.target.lastElementChild.style.maxHeight = "0";
            setTimeout(() => {event.target.lastElementChild.style.padding = "0 20px";}, 100);
        }
    })

    link.addEventListener('focusin', (event) => {
        if (event.target.parentElement.localName == "nav" && window.innerWidth > 799) {
            event.target.lastElementChild.style.maxHeight = "100px";
            setTimeout(() => {event.target.lastElementChild.style.padding = "0 20px 20px";}, 100);
        }
    })

    link.addEventListener('focusout', (event) => {
        if (window.innerWidth > 799) {
            event.target.lastElementChild.style.maxHeight = "0";
            setTimeout(() => {event.target.lastElementChild.style.padding = "0 20px";}, 100);
        }
    })

});

//Compensate for hover style changes when resizing browser

window.addEventListener('resize', () => {
    if (window.innerWidth < 800) {
        for (let i = 0; i < links.length; i++) {
            links[i].lastElementChild.style.maxHeight = "initial";
        }
    } else if (window.innerWidth > 799) {
        for (let i = 0; i < links.length; i++) {
            links[i].lastElementChild.style.maxHeight = "0";
        }
    }
})