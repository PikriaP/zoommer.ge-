// Fetch products data from products.json
fetch('products.json')
  .then((response) => response.json())
  .then((products) => {
    // Function to create product cards
    const createProductCards = (wrapper) => {
      products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('swiper-slide', 'product-card');

        productCard.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.name}" class="product-thumb">
          <div class="product-info">
          <div class="price-section">
            <span class="product-price">${product.price}₾</span>
            ${product.previousPrice ? `<span class="product-old-price">${product.previousPrice}₾</span>` : ''}
          </div>
          <p class="product-name">${product.name}</p>
          </div>
          <div class="cart">
          <div class="compare">
          <img src="./assets/photo/comparecard.svg" alt="card-icon"></div>
          <button class="cart-btn">
          <img src="./assets/photo/cart.svg"><span>დამატება</span></button>
          </div>
        `;

        wrapper.appendChild(productCard);
      });
    };

    // Initialize each slider
    const initializeSwiper = (container, prevBtn, nextBtn) => {
      createProductCards(document.querySelector(`${container} .swiper-wrapper`));

      new Swiper(container, {
        slidesPerView: 6,
        spaceBetween: 50,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: `${container} .swiper-pagination`,
          clickable: true,
        },
        speed: 400,
      });
    };

    // Initialize all sliders
    initializeSwiper('.first-slider', '.first-prev', '.first-next');
    initializeSwiper('.second-slider', '.second-prev', '.second-next');
    initializeSwiper('.third-slider', '.third-prev', '.third-next');
    initializeSwiper('.fourth-slider', '.fourth-prev', '.fourth-next');
    initializeSwiper('.fifth-slider', '.fifth-prev', '.fifth-next');
    initializeSwiper('.sixth-slider', '.sixth-prev', '.sixth-next');
    initializeSwiper('.seventh-slider', '.seventh-prev', '.seventh-next');
    initializeSwiper('.eighth-slider', '.eighth-prev', '.eighth-next');
    initializeSwiper('.nineth-slider', '.nineth-prev', '.nineth-next');
    initializeSwiper('.tenth-slider', '.tenth-prev', '.tenth-next');
    initializeSwiper('.eleventh-slider', '.eleventh-prev', '.eleventh-next');
    initializeSwiper('.twelveth-slider', '.twelveth-prev', '.twelveth-next');
    initializeSwiper('.thirteenth-slider', '.thirteenth-prev', '.thirteenth-next');
    initializeSwiper('.fourteenth-slider', '.fourteenth-prev', '.fourteenth-next');


    // Continue this for all 12 sliders
  })
  .catch((error) => console.error('Error fetching products:', error));
