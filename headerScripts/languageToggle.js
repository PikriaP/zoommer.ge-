export const initLanguageToggle = () => {
  const flagBox = document.querySelector(".flag-box");
  const langOptions = document.getElementById("lang");

  const toggleLanguageOptions = () => {
    langOptions.style.display =
      langOptions.style.display === "flex" ? "none" : "flex";
  };

  flagBox.addEventListener("click", toggleLanguageOptions);
};
