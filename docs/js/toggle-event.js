//Connect to the DOM

const eventHeading = document.getElementsByClassName('event-heading')

//Expand and retract event description on click

for (let i = 0; i < eventHeading.length; i++) {
    eventHeading[i].addEventListener('click', (event) => {
        
            var heading = event.target.parentElement;
            var description = event.target.parentElement.nextElementSibling;
            
            if (description.style.maxHeight == 0 || description.style.maxHeight == "0px") {
                description.style.padding = "10px 15px 15px";
                description.style.maxHeight = "200px";
                heading.style.borderRadius = "10px 10px 0 0";
            } else {
                description.style.padding = "0 15px";
                description.style.maxHeight = 0;
                setTimeout(() => {heading.style.borderRadius = "10px"}, 200);
            }
        })
    }