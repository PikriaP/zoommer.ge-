// cookie
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".cookie-popup");
    const closeButton = document.querySelector(".close-icon");
    const understoodButton = document.querySelector(".cookie-button");
  
    // Display the popup immediately
    if (popup) {
      popup.style.display = "flex"; // Ensure popup shows as a flex container
    } else {
      console.error("Popup element not found. Check your class name in HTML.");
      return;
    }
  
    // Close popup when clicking the "X" button or "გასაგებია" button
    function closePopup() {
      popup.style.display = "none";
      console.log("Popup closed");
    }
  
    if (closeButton) {
      closeButton.addEventListener("click", closePopup);
    } else {
      console.error("Close button not found. Check your class name in HTML.");
    }
  
    if (understoodButton) {
      understoodButton.addEventListener("click", closePopup);
    } else {
      console.error("Understood button not found. Check your class name in HTML.");
    }
  });
