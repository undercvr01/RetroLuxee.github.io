/* RELATED PRODUCTS */
document.addEventListener("DOMContentLoaded", function () {
    function initializeProducts() {
        document.querySelectorAll(".c-product-item").forEach(item => {
            let productKey = item.getAttribute("data-product"); // e.g., "6A"
            if (!productKey) return;
            let productNumber = productKey.slice(0, -1); // Extracts "6"
            let productVariant = productKey.slice(-1); // Extracts "A"

            if (products[productNumber] && productsImages[productNumber] && productsImages[productNumber][productVariant]) {
                let imgElement = item.querySelector(".c-product-image img");
                let titleElement = item.querySelector(".product-title");
                let priceElement = item.querySelector(".product-price");
                let quickViewBtn = item.querySelector(".c-quick-view");

                if (imgElement) {
                    imgElement.src = productsImages[productNumber][productVariant];
                    imgElement.alt = products[productNumber].title;
                }
                if (titleElement) titleElement.textContent = products[productNumber].title;
                if (priceElement) priceElement.textContent = products[productNumber].price;
                if (quickViewBtn) quickViewBtn.setAttribute("data-product", productNumber);
            }
        });
    }

    /* RELATED PRODUCTS : QUICK MODAL VIEW */
    function initializeQuickView() {
        document.querySelectorAll(".c-quick-view").forEach(button => {
            button.addEventListener("click", function () {
                let productNumber = this.getAttribute("data-product");
                let modal = document.getElementById("modal");
                let modalImage = document.getElementById("modal-left-image");
                let modalTitle = document.getElementById("modal-title");
                let modalPrice = document.getElementById("modal-price");
                let modalDescription = document.getElementById("modal-long-description");
                let modalCategory = document.getElementById("modal-category");
                modalCategory.style.fontStyle = "italic";
                if (products[productNumber] && productsImages[productNumber]) {
                    let firstVariant = Object.keys(productsImages[productNumber])[0]; // Default to first variant
                    if (modalImage) {
                        modalImage.src = productsImages[productNumber][firstVariant];
                        modalImage.alt = products[productNumber].title;
                    }
                    if (modalTitle) modalTitle.textContent = products[productNumber].title;
                    if (modalPrice) modalPrice.textContent = products[productNumber].price;
                    if (modalDescription) modalDescription.textContent = products[productNumber].longDescription;
                    if (modalCategory) modalCategory.textContent = products[productNumber].category;
                    if (modal) modal.style.display = "flex";
                }
            });
        });
    }

    function initializeModalClose() {
        let closeModalBtn = document.querySelector(".c-modal-close");
        let modal = document.getElementById("modal");
        if (closeModalBtn) {
            closeModalBtn.addEventListener("click", function () {
                if (modal) modal.style.display = "none";
            });
        }

        window.addEventListener("click", function (event) {
            if (modal && event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    setTimeout(() => {
        initializeProducts();
        initializeQuickView();
        initializeModalClose();
    }, 100);
});
