//Insertable bio text

const additionalBios = [
    {
        category: "performing",
        text: "I have been playing trombone for about 20 years, earning a Bachelor of Music in Jazz Studies from the Eastman School of Music and Masters of Music degrees in both Instrumental Music (Trombone) and Jazz Performance from the University of Louisville. In this time, I have studied with many exceptional teachers including Brett Shuster, Ansyn Banks, Mark Kellogg, Andy Rosza, and many more. While my main area of study is jazz, I love playing orchestral music, gospel, reggae, funk, hip hop, rock, pop - just about anything! Every now and then I will lead a band playing my own music; more often, I enjoy the laid back life of a sideman. Nothing beats playing with a good band - and I've been very fortunate to play with quite a few! Among the best (in no particular order) the Louisville Orchestra, Tommy Dorsey Orchestra, Gil Evans Centennial Project, Eastman Wind Ensemble, Dave Rivello Ensemble, and even a couple internationally reknowned bands: Blood, Sweat, and Tears and Earth, Wind, and Fire. <br><br> In case you're interested, I play a late 1970s King 3B Silversonic with a Giddings and Webster Elliot Mason mouthpiece and a vintage (N-series) Elkhart Conn 88H with a Doug Elliott LT101 E8 mouthpiece."
    },

    {
        category: "teaching",
        text: "I have always had a passion for teaching, getting my first opportunity to work with students at my old middle school when I was just a freshman in high school (in 2004!) In my undergraduate at the Eastman School of Music, under the tutelage of Drs. Christopher Azzara, Richard Grunow, and Kathy Liperote, I developed a passionate curiosity for how people learn music. Since then, I have maintained a private studio of trombone, euphonium, trumpet, and tuba students as well as tutoring in the fields of jazz and music theory. I am currently a Lecturer at the University of Louisville and have formerly held positions as Band Director at the (Rockland Country Day School in Congers, NY) and Adjunct Brass Faculty (at the Francis W Parker School in Chicago, IL). <br><br> In addition to these jobs, I am an active participant in the music education community. I have presented clinics at the Illinois Music Educators Conference (IMEC), the Indiana Music Educators Association (INMEA) Professional Development Conference, and the National Association for Music Education (NAfME) In-Service Conference. I have also written articles for several NAfME publications, including 'Teaching Music' magazine and several online publications."
    },

    {
        category: "composing-arranging",
        text: "I started writing music in high school for my AP Music Theory class and immediately fell in love with it. My high school jazz combo, 'The Freeloaders', performed my original music on my senior recital and I've been composing and arranging since. I especially enjoy writing music for unique instrumentation that combines attributes of many different genres. During my undergraduate studies, I wrote several such pieces - you can hear some clips of them on the <a href='media.html'>Media page</a> of this site. Since then, I have kept up my practice by writing pieces for octet, duodectet (string quartet and jazz octet), and even a piece for a jazz combo with full orchestra - hopefully they will get performed and recorded someday. <br><br>Along with these works of my own inspiration/creation, I stay fairly busy with commissioned arrangements, most recently several arragements for the University of Louisville Faculty Brass Quintet and mallet percussion soloist for an international tour of Japan. If you are interested in hiring me to compose or arrange anything for a project you are working on, please don't hesitate to reach out via the contact form on <a href='connect.html'>the Connect page</a>."
    },

    {
        category: "coding",
        text: "I have been making websites since I was in fifth grade but have recently started pursuing web development more seriously. In May 2021, I enrolled in Code Louisville, an incredible coding bootcamp aimed at job retraining to bolster Louisville's tech industry. Besides deepening my general knowledge of the front end languages HTML, CSS, and JavaScript, I have been enjoying expanding my skills to include Node.js, React, Git and GitHub, UX/UI design, Web Content Accessibility Guidelines, and PHP. <br><br> I'm fairly new to the coding community but you can see some of my recent projects and keep up with my progress by visiting <a href='www.csobrien90.github.io' target='_blank'>my GitHub portfolio page</a>."
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

//Connect to the DOM

const bioLinks = document.querySelectorAll(".elab-links li");
const elabText = document.getElementsByClassName("elab-text")[0];

//Event listeners for elab-bio selection and display

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