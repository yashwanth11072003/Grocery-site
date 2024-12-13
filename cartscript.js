// Sample Product Data (In a real app, this would come from a server or localStorage)
let cart = [
    { id: 1, name: "Stationery Item", price: 150, quantity: 1, imageUrl: "images/stationary.jpg" },
    { id: 2, name: "Pooja Item", price: 200, quantity: 2, imageUrl: "images/pooja-items.jpg" },
    { id: 3, name: "Grocery Item", price: 100, quantity: 3, imageUrl: "images/groceries.jpg" }
];

// Function to render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Clear current cart items

    // Render all items in cart
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        
        itemDiv.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <span class="product-name">${item.name}</span>
            <span class="product-price">₹${item.price}</span>
            <div class="quantity">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeItem(${item.id})">X</button>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });

    // Update total price
    updateTotalPrice();
}

// Function to update quantity of an item
function updateQuantity(itemId, change) {
    const item = cart.find(product => product.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) item.quantity = 1; // Prevent quantity from being zero
        renderCart();
    }
}

// Function to remove item from cart
function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCart();
}

// Function to calculate and display total price
function updateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById('totalPrice').textContent = `Total Price: ₹${totalPrice}`;
}

// Handle Checkout
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to the cart before checking out.');
    } else {
        alert('Proceeding to checkout...');
        // You can redirect to a checkout page or process the checkout here
        window.location.href = 'checkout.html'; // Redirect to a checkout page (replace with actual page)
    }
});

// Initial render of cart when page loads
window.onload = function() {
    renderCart();
};
