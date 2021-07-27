# Chad O'Brien Web Site

*This website is my landing page as a freelance musician. It is a mobile-first, responsive design using HTML5, CSS3, and JavaScript. This site also serves as my final project for the Code Louisville Front End Web Development class; below are the CSS and JS features required for successful completion of the course.*

## CSS features

Navigation menu is responsive, switching between an expanding/collapsing vertical menu (with an illustrated hamburger button) on screens narrower than 600px to a horizontal menu on larger screens.

Hamburger navigation button is animated and changes to 'X' when open.

Flexbox is used throughout to organize content areas based on mobile/tablet/desktop views:
- About: headshot and general bio switch from default single- to two-column layout on larger screens, bio elaboration section moves from vertical menu beside text content area to horiztonal menu above text content
- Media: video and transcription sections switch from single- to two-column layout on larger screens
- Connect: upcoming events and contact switch from single- to two-column layout on larger screens

Audio player (on media page) is custom - play and pause buttons are illustrated using CSS as well.

Index page styles navigation using :nth-of-type (to make border width around navigation links even) and :last-of-type (to round navigation menu corners on larger screens).

## JavaScript features

JavaScript is used to show/hide/alternate content throughout the site:
- Index: on larger screens, hovering over links reveals description of each page's content (descriptions disappear on 'mouseleave')
- About: bio elaborations are accessed by clicking on subject, this is done by loading in content from js file (as opposed to changing display or height styles)
- Media: audio player functionality, including ability to cycle through multiple tracks, is done using JavaScript
- Connect: event descriptions are hidden by default and revealed by clicking, JavaScript handles 'click' event and animates expansion by changing max-height style

Event-update.js file loops through 'events' object of arrays, checking each event date and inserting only future events into the HTML.

Contact-verify.js validates email format for contact form on connect page and generates a random simple math problem for users to solve in order to submit (hopefully this prevents bot submissions). This contact form pushes an alert to thank users for submitting, then uses contact-form.php to email form data to me.