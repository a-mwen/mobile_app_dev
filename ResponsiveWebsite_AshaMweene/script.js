// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close menu when clicking a link
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.textContent = '☰';
    });
});