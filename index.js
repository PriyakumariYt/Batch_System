const hamburger = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav-item');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});