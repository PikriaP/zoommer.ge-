import { initStickyHeader } from "./headerScripts/stickyHeader.js";
import { initAuthTabs } from "./headerScripts/authTabs.js";
import { initGoogleAuth } from "./headerScripts/googleAuth.js";
import { initPasswordToggle } from "./headerScripts/passwordToggle.js";
import { initModal } from "./headerScripts/modal.js";
import { initLanguageToggle } from "./headerScripts/languageToggle.js";

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
