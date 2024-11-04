function fetchJSONData() {
  fetch("./products.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // Log the data for inspection
      console.log(data);

      if (!Array.isArray(data)) {
        throw new Error("Data is not an array");
      }

      displayProducts(data);
    })
    .catch((error) => {
      console.error("Unable to fetch data:", error);
      // Display a user-friendly error message or handle the error differently
      const div = document.getElementById("div");
      div.innerHTML = "An error occurred while fetching data. Please try again later.";
    });
}

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
