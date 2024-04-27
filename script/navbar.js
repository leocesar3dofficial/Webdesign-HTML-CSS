const toggleButton = document.getElementById('nav-hamburger-button');
const navbarLinksList = document.getElementById('nav-links-list');
const links = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('nav-bar');

// show or hide menu on hamburger button click
toggleButton.addEventListener('click', () => {
    navbarLinksList.classList.toggle('active');
});

// hide menu on link click
links.forEach(link => link.addEventListener('click', () => {
    closeNavbar();
}));

// hude menu is click outside navbar
window.addEventListener('click', event => {
    if (!navbar.contains(event.target)) {
        closeNavbar();
    }
});

function closeNavbar() {
    navbarLinksList.classList.remove('active');
}

