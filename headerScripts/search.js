export const initSearch = () => {
  const elements = {
    searchBar: document.querySelector(".main-header__search-bar"),
    searchPopup: document.querySelector(".search-popup"),
    searchInput: document.querySelector(".main-header__search-input"),
  };

  const toggleBodyScroll = (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  // Function to show the popup with animation
  const showPopup = () => {
    elements.searchPopup.style.display = "flex";
    setTimeout(() => {
      elements.searchPopup.classList.add("show");
    }, 10);
    toggleBodyScroll(true);
  };

  // Function to hide the popup
  const hidePopup = () => {
    elements.searchPopup.classList.remove("show");
    elements.searchPopup.style.display = "none";
    toggleBodyScroll(false);
  };

  elements.searchBar.addEventListener("click", (e) => {
    e.stopPropagation();
    if (
      elements.searchPopup.style.display === "none" ||
      elements.searchPopup.style.display === ""
    ) {
      showPopup();
    } else {
      hidePopup();
    }
  });

  elements.searchPopup.addEventListener("click", (e) => {
    if (e.target.classList.contains("search-popup__body-item")) {
      elements.searchInput.value = e.target.innerText;
      hidePopup();
    }
  });

  document.addEventListener("click", (e) => {
    if (
      !elements.searchBar.contains(e.target) &&
      !elements.searchPopup.contains(e.target)
    ) {
      hidePopup();
    }
  });
};
