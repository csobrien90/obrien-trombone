const galleryPics = [
    
    {
        src: 'images/gallery/billandadam.jpg',
        caption: 'It was such an honor to work with jazz legends Bill Evans and Adam Nussbaum during the 2018 University of Louisville Jazz Festival.'
    },

    {
        src: 'images/gallery/tromboneensemble.jpg',
        caption: 'I was very proud to be a member of the U of L Trombone Ensemble, seen here at an annual gig at St. Francis in the Fields. Not pictured: our fearless leader Dr. Brett Shuster.'
    },

    {
        src: 'images/gallery/jazzinschools.jpg',
        caption: 'The U of L Jazz In Schools Combo plays outreach concerts at schools throughout Louisville. Hamilton Pinheiro on bass, Lucas Tome on drums, Kendall Carter on piano, and myself on trombone.'
    },

    {
        src: 'images/gallery/octet.jpg',
        caption: 'It was truly a privilege to join these fine musicians in the wild ride that is the Stravinsky Wind Octet.'
    },

    {
        src: 'images/gallery/zlp.jpg',
        caption: 'Hide DescriptionNot a bad crowd for the Zach Longoria Project at WFPK\'s Waterfront Wednesday concert series - it was hot but we had a blast!'
    },

    {
        src: 'images/gallery/masterclass.jpg',
        caption: 'Delfeayo Marsalis presented a masterclass to the U of L trombone studio - we had fun playing Autumn Leaves as a trio with Professor Jerry Tolson on piano!'
    },

    {
        src: 'images/gallery/NAfME.jpg',
        caption: 'I recently had the opportunity to present a clinic on Teaching The Blues at the NAfME In-Service Conference in Grapevine, Texas. Here\'s a shot of the room in which I presented!'
    },

    {
        src: 'images/gallery/louistheton.jpg',
        caption: 'Thanks to Rob Nickerson for inviting me to join his quartet at local Lousiville venue, Louis\' The Ton.'
    },

    {
        src: 'images/gallery/concert1.jpg',
        caption: 'As a finale to the Rockland Country Day School Winter Concert, I had students 7th-12th grades join together to play a Bach chorale.'
    },

    {
        src: 'images/gallery/reginald.jpg',
        caption: 'Reginald Robinson and the Fifth Element at The Open Door Theatre in Oak Park.'
    },

    {
        src: 'images/gallery/italy4.jpg',
        caption: 'Enjoying a roaring crowd at the stunning Teatro Morlacchi!'
    },

    {
        src: 'images/gallery/italy3.jpg',
        caption: 'Playing Gil Evans\' Punjab at a dress rehearsal...it was EXTREMELY hot!'
    },

    {
        src: 'images/gallery/dre.jpg',
        caption: 'Playing some of my favorite music with the Dave Rivello Ensemble...you guessed it, that\'s Peter Erskine on drums!'
    },

    {
        src: 'images/gallery/ewf1.jpg',
        caption: 'I joined Mike Cottone (pictured) and Everette Harp as the horn section for Earth Wind and Fire.'
    },

    {
        src: 'images/gallery/ewf2.jpg',
        caption: 'Phillip Bailey amazes an enthusiastic crowd at Jazz on the Pond.'
    },

    {
        src: 'images/gallery/disney1.jpg',
        caption: 'In 2009, I joined the Disneyland All American College Band for three months. I made some great music and met some of my best friends there!'
    }


]



function loadGallery() {
    var galleryHTML = document.getElementsByClassName('slideshow-container')[0];
    let html = ``;

    var dotsHTML = document.getElementsByClassName('dots')[0];
    let html2 = ``;
    
    for (let i = 0; i < galleryPics.length; i++) {
                            
        html += `
            <div class="mySlides fade">
                <div class="numbertext">${i + 1} / ${galleryPics.length}</div>
                <img src="${galleryPics[i]['src']}">
                <div class="text">${galleryPics[i]['caption']}</div>
            </div>
        `;

        html2 += `
            <span class="dot" onclick="currentSlide(${i + 1})"></span> 
        `;

    }

    html += `
    
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    
    `

    galleryHTML.innerHTML = html;
    dotsHTML.innerHTML = html2;

}

loadGallery();


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}