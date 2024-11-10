// Fetch products data from products.json
fetch('products.json')
  .then((response) => response.json())
  .then((products) => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Create product cards dynamically
    products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('swiper-slide', 'product-card');

      productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" class="product-thumb">
        <p class="product-name">${product.name}</p>
        <div class="price-section">
          <span class="product-price">$${product.price}</span>
          ${product.previousPrice ? `<span class="product-old-price">$${product.previousPrice}</span>` : ''}
        </div>
        <button class="cart-btn">Add to Cart</button>
      `;

      swiperWrapper.appendChild(productCard);
    });

    // Initialize Swiper JS with smooth transitions
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 6, // Display only one product card at a time
      spaceBetween: 20, // Space between slides
      slidesPerGroup: 1, // Slide only one card at a time
      loop: false, // Set to true if you want it to loop
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Enable smooth transitions
      effect: 'slide', // Use the 'slide' effect
      speed: 400, // Adjust transition duration in milliseconds (default: 300)
      // Optional: Customize easing function (default: 'ease')
      // easing: 'ease-in-out'
    });
  })
  .catch((error) => console.error('Error fetching products:', error));