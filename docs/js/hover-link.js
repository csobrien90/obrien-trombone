const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
    
    links[i].addEventListener('mouseover', (event) => {
        if (event.target.parentElement.localName == "nav") {
            event.target.lastElementChild.style.maxHeight = "100px";
            setTimeout(() => {event.target.lastElementChild.style.padding = "0 20px 20px";}, 100);
        }
    })

    links[i].addEventListener('mouseleave', (event) => {
        event.target.lastElementChild.style.maxHeight = "0";
        setTimeout(() => {event.target.lastElementChild.style.padding = "0 20px";}, 100);
    })
}