const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
    
    links[i].addEventListener('mouseover', (event) => {
        if (event.target.parentElement.localName == "nav" && window.innerWidth > 799) {
            event.target.lastElementChild.style.maxHeight = "100px";
            setTimeout(() => {event.target.lastElementChild.style.padding = "0 20px 20px";}, 100);
        }
    })

    links[i].addEventListener('mouseleave', (event) => {
        if (window.innerWidth > 799) {
            event.target.lastElementChild.style.maxHeight = "0";
            setTimeout(() => {event.target.lastElementChild.style.padding = "0 20px";}, 100);
        }
    })
}

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