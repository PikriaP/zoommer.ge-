const header = document.querySelector(".main-header");
// Function to update the sticky class based on the scroll position
const updateStickyClass = (header, isSticky) => {
  header.classList.toggle("sticky", isSticky);
};

// Handle the scroll event
const handleScroll = () => {
  const stickyThreshold = header.offsetTop + header.offsetHeight;
  const isSticky =
    window.innerWidth > 1023
      ? window.scrollY > stickyThreshold
      : window.scrollY > header.offsetTop;
  updateStickyClass(header, isSticky);
};

// Export the initialization function
export const initStickyHeader = () => {
  window.addEventListener("scroll", handleScroll);
};
