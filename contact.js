const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        const status = document.getElementById("contactFormMessage");

        if (!fullname || !email || !phone || !message) {
            status.textContent = "Please complete all fields.";
            return;
        }

        if (phone.length < 10) {
            status.textContent =
                "Please enter a phone number with at least 10 characters.";
            return;
        }

        if (message.length < 10) {
            status.textContent =
                "Please enter a message of at least 10 characters.";
            return;
        }

        status.textContent =
            "Your form passed validation. Your message has not been sent.";
    });
}

