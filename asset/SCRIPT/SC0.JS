// --- Menu Burger ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// --- Mode Sombre ---
const themeBtn = document.getElementById('dark-mode-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// --- Carrousel ---
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;

function updateCarousel() {
    slide.style.transform = `translateX(${-counter * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % images.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + images.length) % images.length;
    updateCarousel();
});

// Auto-play optionnel toutes les 5 secondes
setInterval(() => {
    counter = (counter + 1) % images.length;
    updateCarousel();
}, 5000);
