/* CONTAINER */
document.addEventListener("DOMContentLoaded", function () {
     function initializeProducts() {
          document.querySelectorAll(".prod-slide").forEach(slide => {
               let productKey = slide.getAttribute("data-product"); // e.g., "6A"
               if (!productKey) return;
               let productNumber = productKey.slice(0, -1); // Extracts "6"
               let productVariant = productKey.slice(-1); // Extracts "A"

               if (products[productNumber] && productsImages[productNumber] && productsImages[productNumber][productVariant]) {
                    // Left Column
                    let imgElement = slide.querySelector(".prod-left-column img");
                    if (imgElement) {
                         imgElement.src = productsImages[productNumber][productVariant];
                         imgElement.alt = products[productNumber].title;
                    }

                    // Right Column
                    let titleElement = slide.querySelector(".prod-title");
                    let priceElement = slide.querySelector(".prod-price");
                    let shortDescElement = slide.querySelector(".prod-shortDesc");
                    let categoryElement = slide.querySelector(".prod-category");
                    if (titleElement) titleElement.textContent = products[productNumber].title;
                    if (priceElement) priceElement.textContent = products[productNumber].price;
                    if (shortDescElement) shortDescElement.textContent = products[productNumber].shortDescription;
                    if (categoryElement) categoryElement.textContent = products[productNumber].catagory;

                    // Bottom Column
                    let bottomColumn = slide.querySelector(".prod-bottom-column");
                    if (bottomColumn) {
                         bottomColumn.setAttribute("data-product", productNumber);
                         let tabContent = bottomColumn.querySelector(".prod-tab-content p");
                         if (tabContent) tabContent.textContent = products[productNumber].longDescription;
                    }

                    // Additional Information Tab
                    document.querySelector(".prod-tab:nth-child(2)").addEventListener("click", function () {
                         if (tabContent) tabContent.innerHTML = `<strong>Material:</strong> ${products[productNumber].material}<br><strong>Additional Features:</strong> ${products[productNumber].additionalFeatures}`;
                    });

                    // Description Tab
                    document.querySelector(".prod-tab:nth-child(1)").addEventListener("click", function () {
                         if (tabContent) tabContent.textContent = products[productNumber].longDescription;
                    });
               }
          });
     }
     initializeProducts();
});

/* TAB */
document.addEventListener("DOMContentLoaded", function () {
     document.querySelectorAll(".prod-tab").forEach(tab => {
          tab.addEventListener("click", function () {
               // Remove active class from all tabs
               document.querySelectorAll(".prod-tab").forEach(t => t.classList.remove("active"));
               // Add active class to the clicked tab
               tab.classList.add("active");

               // Get the related product ID
               let productNumber = tab.closest(".prod-bottom-column").getAttribute("data-product");
               if (!productNumber) return;

               // Define the content container
               let tabContent = tab.closest(".prod-bottom-column").querySelector(".prod-tab-content p");
               if (!tabContent) return;

               // Switch content based on the clicked tab
               if (tab.textContent === "Description") {
                    tabContent.textContent = products[productNumber].longDescription;
               } else if (tab.textContent === "Additional Information") {
                    tabContent.innerHTML = `<strong>Material:</strong> ${products[productNumber].material}<br><strong>Additional Features:</strong> ${products[productNumber].additionalFeatures}`;
               } else if (tab.textContent === "Reviews") {
                    tabContent.textContent = "Reviews content will be displayed here.";
               }
          });
     });
});

/* CAROUSEL */
document.addEventListener("DOMContentLoaded", function () {
     let currentSlide = 0;
     const slides = document.querySelectorAll(".prod-slide");
     const totalSlides = slides.length;

     function showSlide(index) {
          slides.forEach((slide, i) => {
               slide.style.display = i === index ? "block" : "none";
          });
     }

     function nextSlide() {
          currentSlide = (currentSlide + 1) % totalSlides;
          showSlide(currentSlide);
     }

     function prevSlide() {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          showSlide(currentSlide);
     }

     // Ensure buttons are properly targeted
     document.querySelectorAll(".carousel-next").forEach(button => {
          button.addEventListener("click", nextSlide);
     });
     document.querySelectorAll(".carousel-prev").forEach(button => {
          button.addEventListener("click", prevSlide);
     });

     // Initialize the first slide
     showSlide(currentSlide);
});