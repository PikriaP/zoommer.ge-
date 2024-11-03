
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
  fetchJSONData();
  
  const displayProducts = (data) => {
    div.innerHTML = "";
  }
  

  
    data.forEach((product) => {
      const div = document.getElementById("div");
      const container = document.c
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
  fetchJSONData();
  const displayProducts = (data) => {
    div.innerHTML = "";
  
    data.forEach((product) => {
      const div = document.getElementById("div");
      const container = document.createElement("div");
      container.innerHTML = `
      <img src=${product.imageUrl}/>
      <p>${product.name}</p>
      <p>${product.price}</p>
      `;
      div.appendChild(container);
    });
  };
    