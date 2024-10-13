export const initPasswordToggle = () => {
  const passwordInput = document.getElementById("passwordInput");
  const passwordHiddenIcon = document.querySelector(".password-hidden");
  const passwordShownIcon = document.querySelector(".password-shown");

  // Function to toggle the visibility of the password
  const togglePasswordVisibility = () => {
    const isPasswordVisible = passwordInput.type === "text";
    passwordInput.type = isPasswordVisible ? "password" : "text";
    updateIconVisibility(!isPasswordVisible);
  };

  // Function to manage the display of the visibility icons
  const updateIconVisibility = (isVisible) => {
    passwordHiddenIcon.style.display = isVisible ? "none" : "block";
    passwordShownIcon.style.display = isVisible ? "block" : "none";
  };

  // Initialize icons' visibility (start with password hidden)
  updateIconVisibility(false);

  // Add event listeners to toggle password visibility when icons are clicked
  passwordHiddenIcon.addEventListener("click", togglePasswordVisibility);
  passwordShownIcon.addEventListener("click", togglePasswordVisibility);
};
