window.addEventListener("load", function () {
     function initializeProduct() {
         const container = document.querySelector("#prod-container");
         const productKey = container.getAttribute("data-product"); // e.g., "1A"
         if (!productKey) return;

         const productNumber = productKey.slice(0, -1); // "1"
         const productVariant = productKey.slice(-1); // "A"

         if (products?.[productNumber] && productsImages?.[productNumber]?.[productVariant]) {
             const imgElement = document.querySelector("#prod-image");
             const titleElement = document.querySelector("#prod-title");
             const priceElement = document.querySelector("#prod-price");
             const descriptionElement = document.querySelector("#prod-short-description");
             const sizesElement = document.querySelector("#prod-sizes");
             
             if (imgElement) {
                 imgElement.src = productsImages[productNumber][productVariant];
                 imgElement.alt = products[productNumber].title;
                 imgElement.setAttribute('data-variant', productVariant);
             }
             if (titleElement) titleElement.textContent = products[productNumber].title;
             if (priceElement) priceElement.textContent = products[productNumber].price;
             if (descriptionElement) descriptionElement.textContent = products[productNumber].shortDescription;

             if (sizesElement) {
                 const availableSizes = products[productNumber].availableSizes;
                 sizesElement.textContent = availableSizes && availableSizes.length > 0
                     ? `Available Sizes: ${availableSizes.join(', ')}`
                     : "No sizes available";
             }
         } else {
             console.warn('Product or image data not found for product:', productKey);
         }
     }
     initializeProduct();
 });

 // Carousel

loadProductImages(productNumber);
