// script.js

// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Log a welcome message to the console
    console.log("Welcome to my portfolio website! I'm an academic student exploring web development on GitHub.");
  
    // Select all navigation links within the nav element
    const navLinks = document.querySelectorAll("nav a");
  
    // Add a click event listener to each navigation link for smooth scrolling
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        // Prevent the default jump-to-section behavior
        event.preventDefault();
  
        // Get the target section ID from the clicked link's href attribute
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
  
        // If the target section exists, scroll to it smoothly
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });
  