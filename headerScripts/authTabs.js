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
      modalButton: document.querySelector(".modal-btn"),
      authBoxes: document.querySelectorAll(".auth-box"),
      modalBody: document.querySelector(".modal-body"),
      agreementSection: document.querySelector(".agreement-section"),
      agreementCheckbox: document.getElementById("agreementCheckbox"),
      checkmark: document.querySelector(".checkmark"),
      checkboxCircle: document.querySelector(".checkbox"),
    };

    // Set default active states
    elements.authTab.classList.add("active");
    elements.leftLine.classList.add("active");

    // Function to set the visibility of an element
    const setElementVisibility = (
      element,
      isVisible,
      displayType = "block"
    ) => {
      element.style.display = isVisible ? displayType : "none";
    };

    // Function to update the content of the modal button based on the current state
    const setButtonContent = (isPhoneActive) => {
      const isRegistrationActive = elements.regTab.classList.contains("active");
      elements.modalButton.innerHTML = isRegistrationActive
        ? `<span>რეგისტრაცია</span>`
        : isPhoneActive
        ? `<span>კოდის გამოგზავნა</span>`
        : `<span>შესვლა</span>`;
    };

    const updateActiveState = (elements, activeIndex) => {
      elements.forEach((el, index) => {
        el.classList.toggle("active", index === activeIndex);
      });
    };

    // Function to update the line states based on active tab
    const updateLineStates = (isAuthActive) => {
      updateActiveState(
        [elements.authTab, elements.regTab],
        isAuthActive ? 0 : 1
      );
      elements.leftLine.classList.toggle("active", isAuthActive);
      elements.rightLine.classList.toggle("active", !isAuthActive);
    };

    // Function to update the authentication method states (phone/email)
    const updateAuthMethodStates = (isPhoneActive) => {
      updateActiveState(
        [elements.phoneAuth, elements.emailAuth],
        isPhoneActive ? 0 : 1
      );
      setElementVisibility(elements.phoneBox, isPhoneActive, "flex");
      setElementVisibility(elements.emailBox, !isPhoneActive, "block");
      setButtonContent(isPhoneActive);
    };

    // Function to toggle the button's enabled state based on agreement checkbox
    const toggleButtonState = () => {
      const isChecked = elements.agreementCheckbox.checked;
      elements.modalButton.disabled = !isChecked;
      setElementVisibility(elements.checkmark, isChecked, "block");
      setElementVisibility(elements.checkboxCircle, !isChecked, "block");
    };

    // Function to handle checkbox toggle
    const toggleCheckbox = () => {
      elements.agreementCheckbox.checked = !elements.agreementCheckbox.checked;
      toggleButtonState();
    };

    elements.checkboxCircle.addEventListener("click", toggleCheckbox);
    elements.checkmark.addEventListener("click", toggleCheckbox);

    // Initialize default states
    updateAuthMethodStates(true);
    toggleButtonState();

    // Function to handle registration tab click
    const handleRegistrationClick = () => {
      updateLineStates(false);
      elements.authBoxes.forEach((box) => setElementVisibility(box, false));
      elements.modalBody.style.padding = "0";
      setElementVisibility(elements.agreementSection, true, "flex");
      setButtonContent(true, true);
      updateAuthMethodStates(true);
      toggleButtonState();
    };

    // Function to handle authentication tab click
    const handleAuthClick = () => {
      updateLineStates(true);
      elements.authBoxes.forEach((box) =>
        setElementVisibility(box, true, "flex")
      );
      elements.modalBody.style.padding = "";
      setElementVisibility(elements.agreementSection, false);
      setButtonContent(true);
      updateAuthMethodStates(true);
      toggleButtonState();
    };

    // Event listeners for tab and method clicks
    elements.regTab.addEventListener("click", handleRegistrationClick);
    elements.authTab.addEventListener("click", handleAuthClick);
    elements.phoneAuth.addEventListener("click", () =>
      updateAuthMethodStates(true)
    );
    elements.emailAuth.addEventListener("click", () =>
      updateAuthMethodStates(false)
    );
    elements.agreementCheckbox.addEventListener("change", toggleButtonState);
  });
};
