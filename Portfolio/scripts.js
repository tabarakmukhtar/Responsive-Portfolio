// JavaScript for smooth scrolling, theme toggle, and back-to-top button

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme toggle
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const updateThemeIcon = () => {
    const isDarkMode = body.classList.contains('dark-mode');
    themeIcon.src = isDarkMode ? 'Images/moon.png' : 'Images/sun.png';
};

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
});

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    updateThemeIcon();
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_azle1go", "template_ib4f92u", {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message!');
        document.getElementById('contact-form').reset(); // Reset the form
    }, function(error) {
        console.error('FAILED...', error);
        alert('Failed to send the message. Please try again later.');
    });
});

