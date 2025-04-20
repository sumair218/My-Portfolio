// Animated Text
const words = ["AI Developer", "Data Scientist", "Machine Learning Engineer", "Computer Vision Expert"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
let isEnd = false;

function type() {
    currentWord = words[i];
    
    if (isDeleting) {
        j--;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    } else {
        j++;
        if (j === currentWord.length) {
            isEnd = true;
            isDeleting = true;
        }
    }

    const animatedText = document.querySelector(".animated-text span");
    animatedText.textContent = currentWord.substring(0, j);
    animatedText.style.opacity = 1;

    // Speed adjustments
    let speed = 150;
    if (isDeleting) {
        speed /= 2;
    }
    
    if (isEnd) {
        speed = 1000; // Pause at end of word
        isEnd = false;
    }

    setTimeout(type, speed);
}

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');

function toggleMenu() {
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
    
    // Toggle between hamburger and close icon
    if (nav.classList.contains('active')) {
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenu.querySelector('.fa-bars').style.opacity = '0';
        mobileMenu.querySelector('.fa-times').style.opacity = '1';
    } else {
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenu.querySelector('.fa-bars').style.opacity = '1';
        mobileMenu.querySelector('.fa-times').style.opacity = '0';
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

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !e.target.closest('nav') && 
        !e.target.closest('.menu-toggle') &&
        !e.target.closest('.mobile-close-btn')) {
        toggleMenu();
    }
});

// Contact Modal
const modal = document.getElementById('contactModal');
const hireBtn = document.getElementById('hireBtn');
const closeModal = document.getElementById('closeModal');

hireBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Copy to Clipboard Function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show toast notification
        const toast = document.createElement('div');
        toast.textContent = 'Copied to clipboard!';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#4cc9f0';
        toast.style.color = 'white';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '5px';
        toast.style.zIndex = '3000';
        toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        toast.style.animation = 'fadeInOut 2.5s ease-in-out';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 2500);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy text. Please try again.');
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    type();
    
    // Close mobile menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});