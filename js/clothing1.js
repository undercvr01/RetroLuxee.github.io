const products = {
    1: {
        title: "Black Lace Mesh Gloves",
        price: "$18.00",
        description: "These elegant lace mesh gloves are crafted from a fine, sheer fabric with an intricate lace pattern. The ruffled cuffs add a graceful finish, making them ideal for formal events or period-inspired fashion. Their lightweight design ensures comfort while maintaining a luxurious appearance. Whether worn for a special occasion or as a stylish statement, these gloves bring a sense of refinement to any ensemble.",
        image: "/img-clothing/r-glv-02.jpg"
    },
    2: {
        title: "Red and White Mary Jane Heels",
        price: "$55.00",
        description: "These charming Mary Jane heels combine classic vintage aesthetics with modern comfort. The glossy red patent finish is complemented by white detailing, featuring delicate scalloped edges. A bold red bow on the toe adds a playful yet elegant touch. The adjustable strap ensures a secure fit, while the block heel provides stability and support. Perfect for retro-inspired outfits, these shoes are a stylish addition to any wardrobe.",
        image: "/img-clothing/r-shoes-feat-01.jpg"
    },
    3: {
        title: "Black Velvet Handbag with Crystal Buckle",
        price: "$75.00",
        description: "This sophisticated handbag is crafted from plush black velvet, offering an air of elegance and refinement. The structured design is enhanced by a dazzling square-shaped buckle adorned with sparkling crystals, serving as the focal point of the bag. The curved top handle, accented with gold-tone hardware, provides a comfortable grip while maintaining its sleek aesthetic. Perfect for evening events, formal occasions, or adding a touch of glamour to everyday wear, this handbag is a timeless accessory for those who appreciate classic luxury.",
        image: "/img-clothing/r-bag-01.jpg"
    }
};

document.querySelectorAll('.c-quick-view').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        const productId = this.getAttribute('data-product');
        const product = products[productId];
        document.getElementById('modal-title').innerText = product.title;
        document.getElementById('modal-price').innerText = product.price;
        document.getElementById('modal-description').innerText = product.description;
        document.getElementById('modal-left-image').src = product.image;
        document.getElementById('modal').style.display = 'flex';
    });
});
document.querySelector('.c-modal-close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

