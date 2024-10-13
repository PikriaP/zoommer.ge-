export const initAuthTabs = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // DOM ELEMENTS
    const elements = {
      authTab: document.getElementById("authTab"),
      regTab: document.getElementById("regTab"),
      leftLine: document.getElementById("leftLine"),
      rightLine: document.getElementById("rightLine"),
      phoneAuth: document.getElementById("phoneAuth"),
      emailAuth: document.getElementById("emailAuth"),
      emailBox: document.querySelector(".email-box"),
      phoneBox: document.querySelector(".phone-box"),
      sendButton: document.querySelector(".send-btn"),
      authBoxes: document.querySelectorAll(".auth-box"),
      modalBody: document.querySelector(".modal-body"),
      agreementSection: document.querySelector(".agreement-section"),
      agreementCheckbox: document.getElementById("agreementCheckbox"),
    };

    // Set default active states
    elements.authTab.classList.add("active");
    elements.leftLine.classList.add("active");
    elements.phoneAuth.classList.add("active");

    const updateActiveState = (elements, activeIndex) => {
      elements.forEach((el, index) => {
        el.classList.toggle("active", index === activeIndex);
      });
    };

    const updateLineStates = (isAuthActive) => {
      updateActiveState(
        [elements.authTab, elements.regTab],
        isAuthActive ? 0 : 1
      );
      elements.leftLine.classList.toggle("active", isAuthActive);
      elements.rightLine.classList.toggle("active", !isAuthActive);
    };

    const updateAuthMethodStates = (isPhoneActive) => {
      updateActiveState(
        [elements.phoneAuth, elements.emailAuth],
        isPhoneActive ? 0 : 1
      );
      elements.phoneBox.style.display = isPhoneActive ? "flex" : "none";
      elements.emailBox.style.display = isPhoneActive ? "none" : "block";
      elements.sendButton.innerHTML = isPhoneActive
        ? "<h4>კოდის გამოგზავნა</h4>"
        : "<h4>შესვლა</h4>";
    };

    const toggleButtonState = () => {
      // Logic to enable/disable sendButton based on agreementCheckbox state
      elements.sendButton.disabled = !elements.agreementCheckbox.checked;
    };

    const handleRegistrationClick = () => {
      updateLineStates(false);
      elements.authBoxes.forEach((box) => (box.style.display = "none"));
      elements.modalBody.style.padding = "0";
      elements.agreementSection.style.display = "flex"; // Show agreement section
      elements.sendButton.innerHTML = "<h4>რეგისტრაცია</h4>";
      toggleButtonState();
    };

    const handleAuthClick = () => {
      updateLineStates(true);
      elements.authBoxes.forEach((box) => (box.style.display = "flex"));
      elements.modalBody.style.padding = "";
      elements.agreementSection.style.display = "none"; // Hide agreement section
      elements.sendButton.innerHTML = "<h4>კოდის გამოგზავნა</h4>";
    };

    elements.regTab.addEventListener("click", handleRegistrationClick);
    elements.authTab.addEventListener("click", handleAuthClick);
    elements.phoneAuth.addEventListener("click", () =>
      updateAuthMethodStates(true)
    );
    elements.emailAuth.addEventListener("click", () =>
      updateAuthMethodStates(false)
    );

    // Initialize to show phone auth by default
    updateAuthMethodStates(true);
    toggleButtonState();

    // Add event listener to the checkbox
    elements.agreementCheckbox.addEventListener("change", toggleButtonState);
  });
};
