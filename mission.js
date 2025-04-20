document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.menu-toggle');
    const nav = document.getElementById('nav');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const barsIcon = mobileMenu.querySelector('.fa-bars');
    const timesIcon = mobileMenu.querySelector('.fa-times');

    function toggleMenu() {
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
        
        if (nav.classList.contains('active')) {
            barsIcon.style.opacity = '0';
            timesIcon.style.opacity = '1';
        } else {
            barsIcon.style.opacity = '1';
            timesIcon.style.opacity = '0';
        }
    }

    mobileMenu.addEventListener('click', toggleMenu);
    mobileCloseBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Typing Animation
    const words = ["innovate with AI", "solve complex problems", "create impactful tech", "push boundaries"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    let isEnd = false;

    function type() {
        currentWord = words[i];
        const typingText = document.getElementById("typing-text");
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, j--);
            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
            }
        } else {
            typingText.textContent = currentWord.substring(0, j++);
            if (j === currentWord.length) {
                isEnd = true;
                isDeleting = true;
            }
        }

        const speed = isDeleting ? 100 : isEnd ? 1000 : 150;
        setTimeout(type, speed);
        
        if (isEnd) {
            isEnd = false;
        }
    }

    // Animate Mission List Items
    function animateMissionList() {
        const listItems = document.querySelectorAll(".mission-list li");
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
                item.style.transitionDelay = `${index * 0.1}s`;
            }, 500);
        });
    }

    // Initialize animations
    type();
    
    // Auto-animate on mobile
    if (window.innerWidth <= 768) {
        const cardInner = document.querySelector('.card-inner');
        setTimeout(() => {
            cardInner.style.transform = 'rotateY(0deg)';
            animateMissionList();
        }, 800);
    } else {
        // Desktop - animate on hover
        const missionCard = document.querySelector('.mission-card');
        missionCard.addEventListener('mouseenter', () => {
            animateMissionList();
        });
    }

    // Close mobile menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            toggleMenu();
        }
        
        // Re-animate if resizing from mobile to desktop
        if (window.innerWidth > 768) {
            const cardInner = document.querySelector('.card-inner');
            cardInner.style.transform = 'rotateY(0deg)';
        }
    });
});