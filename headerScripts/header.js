// Importing functionalities from separate modules
import { initStickyHeader } from "./stickyHeader.js";
import { initAuthTabs } from "./authTabs.js";
import { initGoogleAuth } from "./googleAuth.js";
import { initPasswordToggle } from "./passwordToggle.js";
import { initModal } from "./modal.js";
import { initLanguageToggle } from "./languageToggle.js";
import { initSearch } from "./search.js";
import { loadCategories } from "./all-category.js";

// Initialize all the imported functionalities
initStickyHeader();
initAuthTabs();
initGoogleAuth();
initPasswordToggle();
initModal();
initLanguageToggle();
initSearch();
loadCategories();

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const headerCloseMenu = document.getElementById("headerCloseMenu");
  const headerSlide = document.getElementById("headerSlide");

  burgerMenu.addEventListener("click", () => {
    headerSlide.style.display = "flex";
    setTimeout(() => {
      headerSlide.classList.add("active");
    }, 0);
  });

  headerCloseMenu.addEventListener("click", () => {
    headerSlide.classList.remove("active");
    setTimeout(() => {
      headerSlide.style.display = "none";
    }, 300);
  });

  // Reset the state on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1025) {
      headerSlide.style.display = "none";
      headerSlide.classList.remove("active");
    }
  });

  // Navigation and logo click events
  const mainNav = document.querySelector(".main-header__nav");
  const mainLogo = document.querySelector(".main-header__logo");
  const allCategory = document.querySelector(".all-category-section");

  // Show categories on navigation click
  mainNav.addEventListener("click", () => {
    allCategory.style.display = "flex";
  });

  // Redirect to home page on logo click
  mainLogo.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "/";
  });
});
