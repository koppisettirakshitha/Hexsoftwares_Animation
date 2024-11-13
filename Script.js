document.addEventListener("DOMContentLoaded", () => {
    // Example of how to add event listeners or dynamically control animations
    const logo = document.querySelector(".logo h1");
    const navLinks = document.querySelectorAll(".nav-links ul li a");

    // Example interaction: Highlight links when hovered
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#f39c12"; // Change color on hover
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "white"; // Reset color
        });
    });
});

