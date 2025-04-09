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
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
        dots[i].style.backgroundColor = i === index ? '#D22E1F' : '#ccc'; // Highlight active dot
    });
}

function startSlideshow() {
    showTestimonial(currentIndex);
    currentIndex = (currentIndex + 1) % testimonials.length;
    setTimeout(startSlideshow, 5000); // Change testimonial every 5 seconds
}

startSlideshow();

document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

    const form = document.getElementById('contact-form');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const message = document.getElementById('message').value;

        const templateParams = {
            first_name: firstName,
            last_name: lastName,
            message: message,
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(() => {
                alert('Message sent successfully!');
                form.reset();
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                alert('Failed to send message. Please try again later.');
            });
    });
});