//Insertable bio text

const additionalBios = [
    {
        category: "performing",
        text: "I have been playing trombone for about 20 years, earning a Bachelor of Music in Jazz Studies from the Eastman School of Music and Masters of Music degrees in both Instrumental Music (Trombone) and Jazz Performance from the University of Louisville. In this time, I have studied with many exceptional teachers including Brett Shuster, Ansyn Banks, Mark Kellogg, Andy Rosza, and many more. While my main area of study is jazz, I love playing orchestral music, gospel, reggae, funk, hip hop, rock, pop - just about anything! Every now and then I will lead a band playing my own music; more often, I enjoy the laid back life of a sideman. Nothing beats playing with a good band - and I've been very fortunate to play with quite a few! Among the best (in no particular order) are the Louisville Orchestra, Tommy Dorsey Orchestra, Gil Evans Centennial Project, Eastman Wind Ensemble, Dave Rivello Ensemble, and even a couple internationally reknowned bands: Blood, Sweat, and Tears and Earth, Wind, and Fire. <br><br> In case you're interested, I play a late 1970s King 3B Silversonic with a Giddings and Webster Elliot Mason mouthpiece and a vintage (N-series) Elkhart Conn 88H with a Doug Elliott LT101 E8 mouthpiece."
    },

    {
        category: "teaching",
        text: "I have always had a passion for teaching, getting my first opportunity to work with students at my old middle school when I was just a freshman in high school (in 2004). In my undergraduate at the Eastman School of Music, under the tutelage of Drs. Christopher Azzara, Richard Grunow, and Kathy Liperote, I developed a passionate curiosity for how people learn music. Since then, I have maintained a private studio of trombone, euphonium, trumpet, and tuba students as well as tutoring in the fields of jazz and music theory. I am currently a Lecturer at the University of Louisville and have formerly held positions as Band Director at the Rockland Country Day School (in Congers, NY) and Adjunct Brass Faculty at the Francis W Parker School (in Chicago, IL). <br><br> In addition to these jobs, I am an active participant in the music education community. I have presented clinics at the Illinois Music Educators Conference (IMEC), the Indiana Music Educators Association (INMEA) Professional Development Conference, and the National Association for Music Education (NAfME) In-Service Conference. I have also written articles for NAfME publications, including 'Teaching Music' magazine and several online publications."
    },

    {
        category: "writing",
        text: "I started writing music in high school for my AP Music Theory class and immediately fell in love with it. My high school jazz combo, 'The Freeloaders', performed my original music on my senior recital and I've been composing and arranging ever since. I especially enjoy writing music for unique instrumentation that combines attributes of many different genres. During my undergraduate studies, I wrote several such pieces - you can hear some clips of them on the <a href='media.html'>Media page</a> of this site. Since then, I have kept up my practice by writing pieces for jazz octet, duodectet (string quartet and jazz octet), and even a piece for a jazz combo with full orchestra - hopefully they will get performed and recorded someday soon so I can share them with you. <br><br>Along with these works of my own inspiration/creation, I stay fairly busy with commissioned arrangements - most recently, several arrangements for the University of Louisville Faculty Brass Quintet and mallet percussion soloist, Eri Hidano, for a tour of Japan. If you are interested in hiring me to compose or arrange anything for a project you are working on, please don't hesitate to reach out via the contact form on <a href='connect.html'>the Connect page</a>."
    },

    {
        category: "coding",
        text: "I have been making websites since I was in fifth grade but have only recently started pursuing web development more seriously. In May 2021, I enrolled in Code Louisville, a coding bootcamp aimed at job retraining to bolster Louisville's tech industry. I can't say enough good things about this program - the educational programming is very high quality and completely free (funded through grants and philanthropy) and they committed to removing systemic barriers and recruiting a diverse student population. Besides deepening my general knowledge of the front end languages HTML, CSS, and JavaScript, I have been enjoying expanding my skills to include Node.js, React, Git and GitHub, UX/UI design, Web Content Accessibility Guidelines, and PHP. <br><br> I'm fairly new to the coding community but you can see some of my recent projects and keep up with my progress by visiting <a href='csobrien90.github.io' target='_blank'>my GitHub portfolio page</a>. Of course, you've already seen one of my most recent projects...this website! And I'd love to hear what you think. Please don't hesitate to reach out using the contact form on the <a href='connect.html'>Connect page</a> of this site."
    },

    {
        category: "activism",
        text: "As much beauty and compassion exists in our world, we are also faced with innumerable injustices: racist oppression of Black people, indigenous people, and other people of color, patriarchal suppression of the rights of women and people in the LGBTQ+ community, and massive income inequality resulting in poverty, hunger, and houselessness - just to name a few! It's enough to make you want to burn it all down. Fortunately, I have grounded myself with a strong faith in the inherent goodness of people and a ceaseless optimism for the power of collective action. <br><br>With these as my guiding principles, I cofounded the Louisville Jazz Initiative, a collective of musicians and educators committed to culturally authentic teaching and playing of jazz music as well as teaching social justice activism through jazz. Additionally, I spend as much time as I can volunteering and advocating for the future I want for my community and the world around me. Want to help? Great - we need all the help we can get! Here are some specific ideas: <br><br><ul><li><a href='https://www.instagram.com/changetodaychangetomorrow/?hl=en' target='_blank'>Spend two hours a week delivering free groceries to families in need.</a></li><li><a href='https://louisvillegrows.org/' target='_blank'>Maintain community orchards and gardens in Louisville's West End</a></li><li><a href='https://louisvillecommunitygrocery.com/' target='_blank'>Become a member/owner of Louisville's first cooperative grocery store</a></li><li><a href='http://louisvillejazzinitiative.com' target='_blank'>Support Louisville Jazz Initiative's mission by coming to a concert or donating</a></li>"
    },

    {
        category: "urban-farming",
        text: "I have always felt a connection to nature and agriculture. Even as a child in the bleak, monotonous subdivisions and endless, industrialized cornfields of northern Illinois, I couldn't help but try to cultivate flower beds and grow my own watermelons. Since buying a house in 2018, my dream has turned into a reality and my passion has exploded into a lifestyle of urban farming. To date, we have a dog (Buttercup), 3 cats (Ash, Albus, and Porch Cat), an angora rabbit (Oswald - my wife, Emily, spins yarn from her fiber!), two colonies of bees, and six chickens (Margo, Mim, Merriweather, Flora, Fauna, and Winnifred). We grow fruits and vegetables in about 400 square feet of raised garden beds, with another 400 sq ft of vertical growing space beyond that! <br><br>I love improving my farm infrastructure with little projects here and there, too - my first was a compost bin (an essential on any farm) and I've since built a rabbit hutch, chicken run and coop, and rain colleciton system. My current project is building a lean-to hoop greenhouse. I've only just begun blogging but intend to write some posts tracking my urban farming projects. Check my <a href='blog.html'>Blog</a> to keep up with some of my projects."
    }
]

//Connect to the DOM

const bioLinks = document.querySelectorAll(".elab-links li");
const elabText = document.getElementsByClassName("elab-text")[0];

//Event listeners for elab-bio selection and display

bioLinks.forEach(link => {
    link.addEventListener('click', (event) => {

        var clicked = event.target.id;

        for (let i=0; i < additionalBios.length; i++) {

            if (additionalBios[i]['category'] !== clicked) {
                bioLinks[i].className = "inactive";
            } else if (additionalBios[i]['category'] == clicked && bioLinks[i].className !== "active") {
                elabText.innerHTML = additionalBios[i]['text'];
                bioLinks[i].className = "active";
            }

        }
    })

    link.addEventListener('keyup', (event) => {
        if (event.which === 13) {
            var clicked = event.target.id;
    
            for (let i=0; i < additionalBios.length; i++) {
    
                if (additionalBios[i]['category'] !== clicked) {
                    bioLinks[i].className = "inactive";
                } else if (additionalBios[i]['category'] == clicked && bioLinks[i].className !== "active") {
                    elabText.innerHTML = additionalBios[i]['text'];
                    bioLinks[i].className = "active";
                }
    
            }
        }
    })
});