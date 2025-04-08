const createRain = () => {
    const rainContainer = document.querySelector('.rain-animation'); // Select the rain container
    const numberOfDrops = 100;

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('raindrop');
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = Math.random() * 2 + 2 + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        drop.style.transform = 'translateY(-100vh)'; // Start off-screen
        rainContainer.appendChild(drop); // Append to the rain container
    }
};

createRain();

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('small');
    } else {
        // Scrolling up
        navbar.classList.remove('small');
    }
    lastScrollY = window.scrollY;
});

const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

function startSlideshow() {
    showTestimonial(currentIndex);
    currentIndex = (currentIndex + 1) % testimonials.length;
    setTimeout(startSlideshow, 5000); // Change testimonial every 5 seconds
}

startSlideshow();