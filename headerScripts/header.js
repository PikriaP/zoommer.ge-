// Importing functionalities from separate modules
import { initStickyHeader } from "./stickyHeader.js";
import { initAuthTabs } from "./authTabs.js";
import { initGoogleAuth } from "./googleAuth.js";
import { initPasswordToggle } from "./passwordToggle.js";
import { initModal } from "./modal.js";
import { initLanguageToggle } from "./languageToggle.js";

// Initialize all the imported functionalities
initStickyHeader();
initAuthTabs();
initGoogleAuth();
initPasswordToggle();
initModal();
initLanguageToggle();

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
});

document.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.querySelector(".main-header__nav");
  const mainLogo = document.querySelector(".main-header__logo");
  const allCategory = document.querySelector(".all-category-section");

  mainNav.addEventListener("click", () => {
    allCategory.style.display = "flex";
  });

  mainLogo.addEventListener("click", () => {
    allCategory.style.display = "none";
  });
});
