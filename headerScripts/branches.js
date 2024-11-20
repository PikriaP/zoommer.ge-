// Function to load branches
export async function loadBranches() {
  try {
    const response = await fetch("../branches.json");
    if (!response.ok) throw new Error("Network response was not ok");
    const branches = await response.json();
    const container = document.querySelector(".branches__cards-container");

    container.innerHTML = "";

    branches.forEach((branch) => {
      const card = document.createElement("div");
      card.className = "branch-card";
      card.innerHTML = `
        <div class="branch-card__location">
          <p class="branch-card__city">${branch.city}</p>
          <p class="branch-card__address">${branch.address}</p>
        </div>
        <p class="branch-card__phone">${branch.phone}</p>
        <div class="branch-card__hours">
          <p>ორშ-შაბ: ${branch.workingHoursMonToSat}</p>
          <p>კვირა: ${branch.workingHoursSun}</p>
        </div>
      `;

      // Add a click event listener to the card
      card.addEventListener("click", () => {
        // Remove the active class from all cards
        const allCards = document.querySelectorAll(".branch-card");
        allCards.forEach((c) => c.classList.remove("active"));

        // Activate the clicked card
        card.classList.add("active");
        // Center the map on the selected branch
        map.setView([branch.latitude, branch.longitude], 14);

        // Clear existing markers
        map.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            map.removeLayer(layer);
          }
        });

        // Add a marker for the selected branch
        L.marker([branch.latitude, branch.longitude]).addTo(map).openPopup();
      });

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching branches:", error);
  }
}

let map;

// Function to initialize the map
function initMap() {
  const mapContainer = document.querySelector(".branches-map");

  // Initialize the map
  map = L.map(mapContainer).setView([41.7237, 44.792], 12);

  // Add OpenStreetMap tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);
}

// Main script execution on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  loadBranches();
});
