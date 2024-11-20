export function loadCategories() {
  fetch("all-category.json")
    .then((response) => response.json())
    .then((data) => {
      const categoryContainer = document.querySelector(".all-category-nav");
      categoryContainer.innerHTML = "";

      const fragment = document.createDocumentFragment();

      data.forEach((category) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        const categoryHeading = document.createElement("h3");
        categoryHeading.textContent = category.name;

        const categoryList = document.createElement("ul");
        category.childCategories.forEach((child) => {
          const listItem = document.createElement("li");
          const link = document.createElement("a");
          link.href = child.url;
          link.textContent = child.name;
          listItem.appendChild(link);
          categoryList.appendChild(listItem);
        });

        categoryDiv.appendChild(categoryHeading);
        categoryDiv.appendChild(categoryList);
        fragment.appendChild(categoryDiv);
      });

      categoryContainer.appendChild(fragment);
    })
    .catch((error) => {
      console.error("Error loading categories:", error);
    });
}
