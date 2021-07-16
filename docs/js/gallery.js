const galleryPics = [

    {
        src: 'images/gallery/tromboneensemble.jpg',
        caption: 'I was very proud to be a member of the U of L Trombone Ensemble, seen here at an annual gig at St. Francis in the Fields. Not pictured: our fearless leader Dr. Brett Shuster.'
    },

    {
        src: 'images/gallery/billandadam.jpg',
        caption: 'It was such an honor to work with jazz legends Bill Evans and Adam Nussbaum during the 2018 University of Louisville Jazz Festival.'
    },

    {
        src: 'images/gallery/birchcreek.jpg',
        caption: 'The trombone studio at the Birch Creek Summer Jazz Camp 2010 - I\'m very proud of these guys!'
    }

]



function loadGallery() {
    var galleryHTML = document.getElementsByClassName('slideshow-container')[0];
    let html = ``;
    
    for (let i = 0; i < galleryPics.length; i++) {
                            
        html += `
            <div class="mySlides fade">
                <div class="numbertext">${i + 1} / 3</div>
                <img src="${galleryPics[i]['src']}">
                <div class="text">${galleryPics[i]['caption']}</div>
            </div>
        `;

    }

    html += `
    
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    
    `

    galleryHTML.innerHTML = html;
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