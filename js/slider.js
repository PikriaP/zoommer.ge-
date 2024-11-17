"use strict";

// Fetch JSON data from a URL (or a local file)
fetch('mainslider.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON data
  })
  .then(banners => {
    // Now, banners contains the data from the JSON file
    createCarousel(banners);
  })
  .catch(error => {
    console.error('There was a problem fetching the JSON data:', error);
  });

// Function to create carousel with fetched data
function createCarousel(banners) {
  const carousel = document.querySelector(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Loop through each banner in the JSON data to create carousel items
  banners.forEach((banner) => {
    const img = document.createElement("img");
    img.src = banner.webImageUrl;
    img.alt = banner.title;
    img.classList.add("carousel-img");
    img.style.display = "none";  // Hide all images initially

    // Append each image to the carousel
    carousel.appendChild(img);
  });

  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel-img");

  // Show the first image
  images[currentIndex].style.display = "block"; 

  function updateCarousel() {
    // Hide all images
    images.forEach((img) => {
      img.style.display = "none";
    });

    // Show the image that matches currentIndex
    images[currentIndex].style.display = "block";
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % banners.length;
    updateCarousel();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % banners.length;
    updateCarousel();
  }, 3000);
}
