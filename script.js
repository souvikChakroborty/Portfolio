// Navbar toggle for mobile view
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}));

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        alert(`Thank you for your message! Email: ${email}, Message: ${message}`);
        
        // Reset form
        contactForm.reset();
    });
}

// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// GSAP Animations - FIXED to prevent vanishing content
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from('.hero-title', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.5
});

gsap.from('.hero-subtitle', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
});

gsap.from('.hero-description', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 1
});

gsap.from('.skills', {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out',
    delay: 1.2
});

gsap.from('.social-icons', {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out',
    delay: 1.4
});

gsap.from('.profile-image', {
    duration: 1.5,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 1.2
});

// About section GSAP animations - FIXED to prevent vanishing
gsap.from('.gsap-title', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.gsap-card', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.gsap-heading', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
});

gsap.from('.gsap-text', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6,
    stagger: 0.2
});

gsap.from('.gsap-education', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
});

gsap.from('.gsap-interests', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 1
});

// Projects section GSAP animations
gsap.from('.projects .section-title', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.gsap-project', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.2
});

// Contact section GSAP animations
gsap.from('.contact .section-title', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.gsap-form', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

// Parallax effect for about section
gsap.to('.about::before', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    y: -100
});

// Floating animation for project cards
gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
        },
        y: -20,
        ease: 'power2.out'
    });
});

// Interactive hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            ease: 'power2.out'
        });
    });
});

// Text reveal animation for about section
const aboutText = document.querySelectorAll('.about-content p');
aboutText.forEach((text, index) => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: index * 0.2
    });
});

// Stagger animation for skills
gsap.from('.skill-tag', {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)',
    stagger: 0.1,
    delay: 1.5
});

// Navbar animation on scroll
gsap.to('.navbar', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top -100',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse'
    },
    backgroundColor: 'rgba(139, 92, 246, 0.95)',
    duration: 0.3
});

// Loading animation
window.addEventListener('load', () => {
    gsap.from('body', {
        duration: 1,
        opacity: 0,
        ease: 'power2.inOut'
    });
});
