//Connect to the DOM

const header = document.getElementsByTagName('header')[0];
const footer = document.getElementsByTagName('footer')[0];

//HTML to load in

header.innerHTML = `
    <div id="logo">
    <h1>Chad O'Brien</h1>
    <img src="images/logo.png" alt="an abstract illustration of a trombone">
    </div>

    <nav>
    <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="media.html">Media</a></li>
        <li><a href="connect.html">Connect</a></li>
        <li><a href="blog.html">Blog</a></li>
    </ul>
    </nav>

    <div id="hamburger-icon">
    <div class="top line"></div>
    <div class="middle line"></div>
    <div class="bottom line"></div>
    </div>
`;

const year = new Date().getFullYear();

footer.innerHTML = `
    &copy; Copyright ${year} - Chad O'Brien
`;