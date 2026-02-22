document.addEventListener('DOMContentLoaded', () => {
    const landing = document.getElementById('landing');
    const mainContent = document.getElementById('mainContent');
    const openBtn = document.getElementById('openBtn');

    // Handle Opening the Card
    openBtn.addEventListener('click', () => {
        const music = document.getElementById('bgMusic');
        music.play();
        // Trigger Confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4757', '#ff6b81', '#ffffff', '#fecfef']
        });

        // Hide landing, show content
        landing.style.opacity = '0';

        setTimeout(() => {
            landing.classList.add('hidden');
            mainContent.classList.remove('hidden');

            // Trigger check for visibility immediately so the first card shows
            checkCards();
        }, 500); // Wait for fade out
    });

    // Scroll Animation for Memory Cards
    const cards = document.querySelectorAll('.memory-card');

    function checkCards() {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkCards);
});



// --- Gallery Lightbox Logic ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.gallery-img');
const closeLightbox = document.querySelector('.close-lightbox');

// Only run this if we are on the gallery page
if (lightbox) {
    // Open lightbox on image tap
    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            lightbox.classList.remove('lightbox-hidden');
            lightboxImg.src = this.src; // Copy the clicked image source to the fullscreen view
        });
    });

    // Close lightbox on 'X' tap
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.add('lightbox-hidden');
    });

    // Close lightbox if tapping outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.add('lightbox-hidden');
        }
    });
}