function fetchJSONData() {
  fetch("./products.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => displayProducts(data))
    .catch((error) => console.error("Unable to fetch data:", error));
}

// Call the function to fetch data
fetchJSONData();

const displayProducts = (data) => {
  // Ensure 'div' is defined
  const div = document.getElementById("div");

  if (!div) {
    console.error("Element with ID 'div' not found.");
    return;
  }

  // Clear previous content
  div.innerHTML = "";

  // Loop through data to display each product
  data.forEach((product) => {
    const container = document.createElement("div");
    container.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" />
      <p>${product.name}</p>
      <p>${product.price}</p>
    `;
    div.appendChild(container);
  });
};
