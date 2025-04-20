document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.getElementById('nav');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        nav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close mobile menu
    mobileCloseBtn.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                nav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 20, 0.95)';
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(26, 26, 46, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992 && nav.classList.contains('active')) {
            if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
                nav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
});