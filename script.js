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