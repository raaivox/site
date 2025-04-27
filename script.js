// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 15, 28, 0.95)';
        } else {
            navbar.style.backgroundColor = 'var(--darker-bg)';
        }
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show submission feedback
            const submitButton = contactForm.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                submitButton.textContent = 'Message Sent!';
                contactForm.reset();
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                }, 2000);
            }, 1500);
        });
    }

    // Add animation to service cards on scroll
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Get the welcome message
    const heading = document.querySelector('h1');
    
    // Add a simple hover effect
    heading.addEventListener('mouseover', function() {
        this.style.color = '#007bff';
    });
    
    heading.addEventListener('mouseout', function() {
        this.style.color = '#333';
    });
    
    // Log a message to confirm JS is working
    console.log('JavaScript is loaded and running!');

    // Add hover effect to social links
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 
