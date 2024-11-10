function fetchJSONData() {
  fetch("./products.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data); // Check if the data is fetched
      if (!Array.isArray(data)) {
        throw new Error("Data is not an array");
      }
      displayProducts(data);
    })
    .catch((error) => {
      console.error("Unable to fetch data:", error);
      document.querySelector(".product-container").innerHTML =
        "An error occurred while fetching data. Please try again later.";
    });
}

function displayProducts(data) {
  const productContainer = document.querySelector(".product-container");

  if (!productContainer) {
    console.error("Element with class 'product-container' not found.");
    return;
  }

  productContainer.innerHTML = "";

  // Limit to 14 products in total
  const productsToShow = data.slice(0, 6);

  productsToShow.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" class="product-thumb">
      <div class="product-info">
        <p class="product-name">${product.name}</p>
        <div class="price-section">
          <span class="product-price">${product.price}₾</span>
          ${product.previousPrice ? `<span class="product-old-price">${product.previousPrice}₾</span>` : ""}
        </div>
        <button class="cart-btn">Add to Cart</button>
      </div>
    `;

    productContainer.appendChild(productCard);
  });
}

fetchJSONData();
