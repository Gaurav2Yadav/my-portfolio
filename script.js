document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate form submission (you can replace this with actual submission logic)
        alert(`Thank you, ${name}! Your message has been received.`);
        
        // Reset the form
        contactForm.reset();
    });
});
