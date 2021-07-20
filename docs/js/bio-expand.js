const additionalBios = [
    {
        category: "performing",
        text: "performing bio goes here..."
    },

    {
        category: "teaching",
        text: "teaching bio goes here..."
    },

    {
        category: "composing-arranging",
        text: "comp and arranging bio goes here..."
    },

    {
        category: "coding",
        text: "coding bio goes here..."
    },

    {
        category: "activism",
        text: "activism bio goes here..."
    },

    {
        category: "urban-farming",
        text: "urban farming bio goes here..."
    }
]

const bioLinks = document.querySelectorAll(".elab-links li");
const elabText = document.getElementsByClassName("elab-text")[0];

for (let i = 0; i < bioLinks.length; i++) {
    
    bioLinks[i].addEventListener('click', (event) => {
    
        var clicked = event.target.id;
        
        for (let j=0; j < additionalBios.length; j++) {
        
            if (additionalBios[j]['category'] !== clicked) {
                bioLinks[j].className = "inactive";
            } else if (additionalBios[j]['category'] == clicked && bioLinks[j].className !== "active") {
                elabText.innerHTML = additionalBios[j]['text'];
                bioLinks[j].className = "active";
            }

        }
    })
}