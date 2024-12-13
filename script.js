let cart = [];
const cartCountElement = document.getElementById('cart-count');

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartCount();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartCount();
}

function updateCartCount() {
    cartCountElement.innerText = cart.length;
}

function searchProducts() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
    
    products.forEach(product => {
        const productName = product.querySelector('p').innerText.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function filterCategory(category) {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        if (product.getAttribute('data-category') === category || category === 'all') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
