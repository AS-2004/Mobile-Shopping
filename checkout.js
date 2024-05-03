document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkout-form");
    const orderSuccessPopup = document.getElementById("order-success-popup");
    const closePopup = document.querySelector(".close-popup");

    // Event listener for form submission
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        // Simulate order placement (You may replace this with your actual order placement logic)
        setTimeout(function () {
            orderSuccessPopup.style.display = "block"; // Display the success popup
        }, 1000); // Simulating a delay of 1 second before showing the popup
    });

    // Event listener to close the popup when clicking on the close button
    closePopup.addEventListener("click", function () {
        orderSuccessPopup.style.display = "none";
        // Redirect to main page after closing the popup
        window.location.href = "index.html"; // Change "index.html" to your main page URL
    });

    // Event listener to close the popup when clicking outside the popup
    window.addEventListener("click", function (event) {
        if (event.target == orderSuccessPopup) {
            orderSuccessPopup.style.display = "none";
            // Redirect to main page after closing the popup
            window.location.href = "index.html"; // Change "index.html" to your main page URL
        }
    });
});
