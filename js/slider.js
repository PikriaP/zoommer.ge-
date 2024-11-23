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
    // Create carousel with fetched data
    createCarousel(banners);
    handleResize(banners); // Load correct images on page load
    toggleNavButtons(); // Adjust button visibility on page load
    window.addEventListener('resize', () => {
      handleResize(banners); // Adjust images on window resize
      toggleNavButtons(); // Toggle button visibility on window resize
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the JSON data:', error);
  });

// Function to create carousel
function createCarousel(banners) {
  const carousel = document.querySelector(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Clear existing images in case of re-creation
  carousel.innerHTML = "";

  // Create and append images
  banners.forEach(() => {
    const img = document.createElement("img");
    img.classList.add("carousel-img");
    img.style.opacity = "0"; // Initially hidden
    carousel.appendChild(img);
  });

  const images = document.querySelectorAll(".carousel-img");
  let currentIndex = 0;

  // Show the first three images
  updateCarousel(images, currentIndex);

  // Navigation button functionality
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    updateCarousel(images, currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % banners.length;
    updateCarousel(images, currentIndex);
  });

  // Auto-slide functionality
  setInterval(() => {
    currentIndex = (currentIndex + 1) % banners.length;
    updateCarousel(images, currentIndex);
  }, 3000);
}

// Function to update the carousel
function updateCarousel(images, currentIndex) {
  const isMobile = window.innerWidth <= 1024;
  const visibleImages = isMobile ? 3 : 1;

  images.forEach((img, index) => {
    img.style.opacity = (index >= currentIndex && index < currentIndex + visibleImages) ? "1" : "0";
    img.style.transform = `translateX(-${currentIndex * 100}%)`; // Sliding effect
  });
}

// Function to handle responsive image sources
function handleResize(banners) {
  const images = document.querySelectorAll(".carousel-img");
  const isMobile = window.innerWidth <= 1024;

  banners.forEach((banner, index) => {
    const img = images[index];
    img.src = isMobile ? banner.mobileImageUrl : banner.webImageUrl;
  });
}

// Function to toggle navigation buttons
function toggleNavButtons() {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (window.innerWidth <= 1023) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
}
