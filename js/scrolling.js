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
