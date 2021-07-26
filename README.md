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

Create at least 3 variables (var, const, or let), set their values in JavaScript, and display the values somewhere on your page

Create a Javascript loop that dynamically displays HTML on your page - for example displaying a number of list items based on how many times you loop
---

### These features are currently included in the site design. Below are items intended in the final product:

***CSS features***

Perform a Web Accessibility Compliance review on your own site and document all the tools and testing you used to verify your site is accessible. This may involve a written write-up, screenshots, and other ways of showing that you evaluated your site for accessibility compliance. Include the report in your GitHub repository.


***JavaScript features***

Create a form (such as a ‘Contact Us’ form), validate at least one field (ex: email is in the correct format) and then use that information on your page somehow. For example, display it back to the user on button click, or change a setting on the page based on a section. Having a form that does nothing on clicking Submit or that just refreshes the page is not enough - you must capture the value(s) of the form and use it somehow.

Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page

