export const initModal = () => {
  const elements = {
    loginBtn: document.querySelector(".main-header__btn.main-header__login"),
    modal: document.getElementById("loginModal"),
    closeModal: document.getElementById("closeModal"),
  };
  const toggleBodyScroll = (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  // Function to show the modal with animation
  const showModal = () => {
    elements.modal.style.display = "block";
    setTimeout(() => {
      elements.modal.classList.add("show");
    }, 10);
    toggleBodyScroll(true);
  };

  // Function to hide the modal immediately
  const hideModal = () => {
    elements.modal.classList.remove("show");
    elements.modal.style.display = "none";
    toggleBodyScroll(false);
  };

  // Event listener to show modal on login button click
  elements.loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showModal();
  });

  // Event listener to hide modal on close button click
  elements.closeModal.addEventListener("click", hideModal);
};
