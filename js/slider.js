"use strict";

const imagesForCarousel = [
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F28267f59-a845-4852-a0cc-05d184714fc7_Thumb.jpeg&w=1920&q=75", 
        alt: "iphone 16pro",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F49d18bd0-0589-4947-a223-5df70b44e7a5_Thumb.jpeg&w=1920&q=75",
        alt: "iphone 16s",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F3ee0fed9-a1fc-4bf7-ab02-f24a27d4194d_Thumb.jpeg&w=3840&q=75",
        alt: "google pixel"
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2Ff8ab115e-4ec8-43c1-9856-1183d61ed9f0_Thumb.jpeg&w=3840&q=75",
        alt: "apple watch",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F6f9d6233-91ff-4ad1-b7ca-18f219572332_Thumb.jpeg&w=3840&q=75",
        alt: "airpods",
    },
    {
        url: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F345eddb5-786c-4cd7-8557-c9906bb34ab1_Thumb.jpeg&w=3840&q=75",
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