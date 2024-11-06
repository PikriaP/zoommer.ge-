"use strict";

const imagesForCarousel = [
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F203dc37f-251b-4474-ac6b-1238bdcf61ea_Thumb.jpeg&w=3840&q=75", 
        alt: "marshall",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fc81ad86f-c1ab-4402-b9da-c3fc7fcce51a_Thumb.jpeg&w=3840&q=75",
        alt: "poco",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F489511dd-3c46-43cb-a470-aae291d0aeea_Thumb.jpeg&w=3840&q=75",
        alt: "garmin watches"
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F57c494d3-7006-40f4-b19a-e39678858419_Thumb.jpeg&w=3840&q=75",
        alt: "apple iphone 15",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F8fe8198e-b2c3-4bc1-b47b-e44842338cc2_Thumb.jpeg&w=3840&q=75",
        alt: "motorola",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs…2ac-4b61-832e-1efb4da1194f_Thumb.jpeg&w=3840&q=75",
        alt: "airpodsmax",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F6b24321f-727c-4c4c-840e-161e610a7590_Thumb.jpeg&w=3840&q=75",
        alt: "mi kettle",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F753ae0c2-913e-4258-8f32-cc3ffb3a5d85_Thumb.jpeg&w=3840&q=75",
        alt: "miairfryer",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Fc635c17f-aa5c-4210-84f2-81ee1e17149d_Thumb.jpeg&w=3840&q=75",
        alt: "pixel phone",

    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F98f8b232-57da-471c-995a-790a7082ab43_Thumb.jpeg&w=3840&q=75", 
        alt: "anker",
    }
  ];
  const slide = document.querySelector(".carousel-slide");

imagesForCarousel.forEach((image) => {
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.classList.add("carousel-img");
  slide.appendChild(img);
});

const images = document.querySelectorAll(".carousel-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
  const screenWidth = window.innerWidth;

  
  if (screenWidth <= 1023) {
    
    slide.style.transform = `translateX(-${currentIndex * (291 + 11)}px)`; 
  } else {
    
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

// Ensure carousel updates on window resize
window.addEventListener("resize", updateCarousel);

// Call updateCarousel initially
updateCarousel();