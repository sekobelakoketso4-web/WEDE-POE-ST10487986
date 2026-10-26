
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !service || !date || !message) {
            formMessage.textContent = "Please complete all fields.";
            return;
        }

        if (message.length < 10) {
            formMessage.textContent =
                "Please enter at least 10 characters in your enquiry.";
            return;
        }

        const selectedDate = new Date(date + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            formMessage.textContent =
                "Please choose today or a future appointment date.";
            return;
        }

        formMessage.textContent =
            "Your form passed validation. No enquiry has been sent yet.";
    });
}
