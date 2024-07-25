// Show popup on page load
window.onload = function() {
    document.getElementById('initial-popup').style.display = 'block';
}

// Close popup
document.querySelector('.close-popup').onclick = function() {
    document.getElementById('initial-popup').style.display = 'none';
}

// Handle popup form submission
document.getElementById('popup-form').onsubmit = function(e) {
    e.preventDefault();
    // Handle form data here
    document.getElementById('initial-popup').style.display = 'none';
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.animate-on-scroll');
    for(let i=0; i<elements.length; i++) {
        let position = elements[i].getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        
        if(position < screenPosition) {
            elements[i].classList.add('animated');
        }
    }
});

// Handle contact form submission
document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message. We will get back to you soon!');
}

// Add more interactivity and animations as needed