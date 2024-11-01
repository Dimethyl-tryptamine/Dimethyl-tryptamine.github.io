// script.js
const cardContainer = document.getElementById('card-container');

// Pause on hover
cardContainer.addEventListener('mouseenter', () => {
    cardContainer.style.animationPlayState = 'paused'; // Pauses the animation
});

cardContainer.addEventListener('mouseleave', () => {
    cardContainer.style.animationPlayState = 'running'; // Resumes the animation
});
