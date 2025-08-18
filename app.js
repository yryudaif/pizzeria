document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const contactBtn = document.getElementById('contact-btn');
    const menuBtn = document.getElementById('menu-btn');
    
    const homeSection = document.getElementById('home');
    const contactSection = document.getElementById('contact');
    const menuSection = document.getElementById('menu');
    
    // Fonction pour afficher la section correspondante
    function showSection(section) {
        // Cacher toutes les sections
        homeSection.classList.add('hidden');
        contactSection.classList.add('hidden');
        menuSection.classList.add('hidden');

        // Afficher la section demandée
        section.classList.remove('hidden');
    }
    
    // Événements des boutons
    homeBtn.addEventListener('click', () => showSection(homeSection));
    contactBtn.addEventListener('click', () => showSection(contactSection));
    menuBtn.addEventListener('click', () => showSection(menuSection));

    // Afficher la page d'accueil par défaut
    showSection(homeSection);
});

document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour faire défiler un carousel
    function scrollCarousel(carouselId, direction) {
        const carousel = document.querySelector(`#${carouselId}`);
        const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
        const scrollAmount = direction === 'next' ? itemWidth : -itemWidth;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    // Gestion des événements pour les caroussels
    document.getElementById('next-pizza').addEventListener('click', () => {
        scrollCarousel('pizza-carousel', 'next');
    });

    document.getElementById('prev-pizza').addEventListener('click', () => {
        scrollCarousel('pizza-carousel', 'prev');
    });

    document.getElementById('next-boisson').addEventListener('click', () => {
        scrollCarousel('boisson-carousel', 'next');
    });

    document.getElementById('prev-boisson').addEventListener('click', () => {
        scrollCarousel('boisson-carousel', 'prev');
    });

    document.getElementById('next-dessert').addEventListener('click', () => {
        scrollCarousel('dessert-carousel', 'next');
    });

    document.getElementById('prev-dessert').addEventListener('click', () => {
        scrollCarousel('dessert-carousel', 'prev');
    });
});
