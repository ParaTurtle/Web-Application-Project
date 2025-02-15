// Parallax effect for the hero section
document.addEventListener('mousemove', (e) => {
    const parallaxElement = document.querySelector('.parallax-element');
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;
    parallaxElement.style.transform = `translate(${x}px, ${y}px)`;
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all parallax cards and service cards
document.querySelectorAll('.parallax-card, .service-card').forEach((element) => {
    observer.observe(element);
});

// Smooth scrolling for navigation links including footer
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
