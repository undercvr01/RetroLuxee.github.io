/* MAIN | RELATED PRODUCTS */
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
                let quickViewBtn = item.querySelector(".c-quick-view");

                if (imgElement) {
                    imgElement.src = productsImages[productNumber][productVariant];
                    imgElement.alt = products[productNumber].title;
                }
                if (titleElement) titleElement.textContent = products[productNumber].title;
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
                let modalDescription = document.getElementById("modal-long-description");
                let modalCategory = document.getElementById("modal-category");
                modalCategory.style.fontStyle = "italic";
                if (products[productNumber] && productsImages[productNumber]) {
                    let firstVariant = Object.keys(productsImages[productNumber])[0];
                    if (modalImage) {
                        modalImage.src = productsImages[productNumber][firstVariant];
                        modalImage.alt = products[productNumber].title;
                    }
                    if (modalTitle) modalTitle.textContent = products[productNumber].title;
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

/* FULL OUTFIT PART */
let currentImages = [];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    const productGrid = document.getElementById("outfitProductGrid");
    const fullOutfit = document.getElementById("c-full-outfit");
    let productNumbers = fullOutfit.getAttribute("data-product-numbers").split(",").map(p => p.trim());
    let totalProducts = 0;

    productNumbers.forEach(productNumber => {
        if (productsImages[productNumber]) {
            let defaultVariant = "A";
            let productDiv = document.createElement("div");
            productDiv.classList.add("c-outfit-product-image");

            let img = document.createElement("img");
            img.src = productsImages[productNumber][defaultVariant];
            img.alt = `${products[productNumber].title} - Variant ${defaultVariant}`;
            img.dataset.productNumber = productNumber;
            img.addEventListener("click", function () {
                openLightbox(productNumber);
            });

            productDiv.appendChild(img);
            productGrid.appendChild(productDiv);
            totalProducts++;
        }
    });

    let columns = Math.min(5, totalProducts);
    productGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
});

function openLightbox(productNumber) {
    currentImages = Object.values(productsImages[productNumber]);
    currentIndex = 0;
    document.getElementById("outfitLightboxImage").src = currentImages[currentIndex];
    document.getElementById("outfitLightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("outfitLightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    } else if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }
    document.getElementById("outfitLightboxImage").src = currentImages[currentIndex];
}