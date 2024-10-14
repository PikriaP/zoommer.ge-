document.querySelector(".scroll");
addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log("you are scrolling");
});