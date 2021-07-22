//Connect to the DOM

const eventHeading = document.getElementsByClassName('event-heading')

//Expand and retract event description on click

for (let i = 0; i < eventHeading.length; i++) {
    eventHeading[i].addEventListener('click', (event) => {
        
            var heading = event.target.parentElement;
            var description = event.target.parentElement.nextElementSibling;
            
            if (description.style.height == 0 || description.style.height == "0px") {
                heading.style.borderRadius = "10px 10px 0 0";
                description.style.height = "unset";
                description.style.padding = "10px 15px 15px";
            } else {
                heading.style.borderRadius = "10px";
                description.style.height = 0;
                description.style.padding = 0;  
            }
        })
    }