// Toggle the navigation menu visibility when hamburger is clicked
document.getElementById("hamburger").addEventListener("click", function() {
    const navMenu = document.getElementById("navMenu");
    navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

// Toggle the display of the contact details and form when the Contact Me button is clicked
document.getElementById("showContactFormBtn").addEventListener("click", function() {
    const contactDetails = document.getElementById("contactDetails");
    contactDetails.style.display = contactDetails.style.display === "none" ? "block" : "none";
});

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.\nWe will get back to you soon.`);
    // Clear the form
    document.getElementById("contactForm").reset();
});
