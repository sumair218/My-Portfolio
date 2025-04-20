document.addEventListener('DOMContentLoaded', function() {
    // Video toggle functionality
    document.querySelectorAll('.video-toggle-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const mediaContainer = this.closest('.project-media');
            mediaContainer.classList.toggle('show-video');
            
            // Change button icon and text
            if (mediaContainer.classList.contains('show-video')) {
                this.innerHTML = '<i class="fas fa-image"></i> Show Image';
            } else {
                this.innerHTML = '<i class="fas fa-video"></i> Show Demo';
            }
        });
    });
    
    // Pause videos when not visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('iframe');
            if (video) {
                if (entry.isIntersecting) {
                    // Video is in view
                    if (entry.target.classList.contains('show-video')) {
                        video.src = video.src; // Restart video
                    }
                } else {
                    // Video is out of view
                    video.src = video.src.replace('autoplay=1', 'autoplay=0');
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.project-media').forEach(media => {
        observer.observe(media);
    });
});