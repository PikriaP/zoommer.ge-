const scrollbtn = document.querySelector(".scroll");

// Initially hide the button
scrollbtn.style.display = "none";

// Function to show/hide the button based on scroll position
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 100) {
    // Change 100 to your desired threshold
    scrollbtn.style.display = "flex"; // Show the button when scrolling down
  } else {
    scrollbtn.style.display = "none"; // Hide the button when at the top
  }
});

// Smooth scroll to top on button click
scrollbtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log(scrollbtn);
});

const chatButton = document.querySelector(".chat-button");
const chatWindow = document.querySelector(".chat-window");

// Show the chat window when clicking the chat button
chatButton.addEventListener("click", () => {
  chatWindow.style.display = "block";
});

const closeWindow = document.querySelector(".close-window");
closeWindow.addEventListener("click", () => {
  chatWindow.style.display = "none";
});
