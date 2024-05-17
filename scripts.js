document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.reveal');
    
    const options = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
