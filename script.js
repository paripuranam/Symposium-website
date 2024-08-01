document.addEventListener("DOMContentLoaded", function () {
    const eventLink = document.getElementById("event-link");
    const registrationLink = document.getElementById("registration-link");
    const eventModal = document.getElementById("event-modal");
    const eventBoxes = document.querySelectorAll(".event-box");
    const eventModals = document.querySelectorAll(".event-modal");
    const closeBtns = document.querySelectorAll(".close-btn");
    const registrationIframe = document.getElementById("registration-iframe");
    const closeRegistrationBtn = document.getElementById("close-registration");

    // Show main event modal
    eventLink.addEventListener("click", function (e) {
        e.preventDefault();
        eventModal.style.display = "flex";
    });

    // Show registration iframe
    registrationLink.addEventListener("click", function (e) {
        e.preventDefault();
        registrationIframe.style.display = "block";
    });

    // Close registration iframe
    closeRegistrationBtn.addEventListener("click", function () {
        registrationIframe.style.display = "none";
    });

    // Show specific event modal
    eventBoxes.forEach(box => {
        box.addEventListener("click", function () {
            const eventModalId = this.getAttribute("data-event") + "-modal";
            eventModals.forEach(modal => {
                if (modal.id === eventModalId) {
                    modal.style.display = "flex";
                } else {
                    modal.style.display = "none";
                }
            });
        });
    });

    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "none";
        });
    });

    // Close modals when clicking outside
    window.addEventListener("click", function (e) {
        if (e.target == eventModal) {
            eventModal.style.display = "none";
        }
        eventModals.forEach(modal => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        });
    });
});
