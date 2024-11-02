
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

const displayProducts = (data) => {
  const div = document.getElementById("div");
  div.innerHTML = ""; // Clear existing content

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

fetchJSONData();