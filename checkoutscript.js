// Simulated cart data (this could come from localStorage or a backend in a real app)
let cart = [
    { name: "Stationery", price: 100, quantity: 2 },
    { name: "Pooja Items", price: 200, quantity: 1 },
    { name: "Groceries", price: 150, quantity: 3 }
];

// Function to calculate the final bill
function calculateBill() {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.05; // 5% tax
    const deliveryCharges = 50; // Dummy delivery charges
    const total = subtotal + tax + deliveryCharges;

    // Update the bill details on the page
    document.getElementById('orderDetails').innerHTML = `
        <p><strong>Total Items:</strong> ${cart.length}</p>
        <p><strong>Subtotal:</strong> ₹${subtotal}</p>
        <p><strong>Taxes (5%):</strong> ₹${tax.toFixed(2)}</p>
        <p><strong>Delivery Charges:</strong> ₹${deliveryCharges}</p>
        <p><strong>Total Bill:</strong> ₹${total.toFixed(2)}</p>
    `;
}

// Function to handle form submission
document.getElementById('addressForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get address details from the form
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const location = document.getElementById('location').value;

    // Validate the form fields (for demonstration purposes)
    if (!fullName || !address || !city || !pincode || !phoneNumber || !location) {
        alert("Please fill in all the fields.");
        return;
    }

    // Show confirmation and proceed with the order
    alert("Shipping address saved! Proceed to payment.");
    calculateBill();
});

// Handle Confirm Order Button
document.getElementById('confirmOrderBtn').addEventListener('click', function() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');

    if (!selectedPayment) {
        alert("Please select a payment method.");
        return;
    }

    const paymentMethod = selectedPayment.value;

    // Collect user data for the email
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const location = document.getElementById('location').value;

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.05;
    const deliveryCharges = 50;
    const totalBill = subtotal + tax + deliveryCharges;

    // Create the order details email template
        var templateParams = {
            fullName: fullName,
            address: address,
            city: city,
            pincode: pincode,
            phoneNumber: phoneNumber,
            location: location,
            totalItems: cart.length,
            subtotal: subtotal,
            taxes: tax.toFixed(2),
            deliveryCharges: deliveryCharges,
            totalBill: totalBill.toFixed(2),
            paymentMethod: paymentMethod
        };

        // Send the email to the admin using EmailJS
        emailjs.send("service_ltehfpg", "template_avgcqg8", templateParams)
            .then(function(response) {
                console.log("Email sent successfully", response);
                alert("Order confirmed! The details have been sent to the admin.");
                window.location.href = "index.html"; // Redirect to a "Thank You" page
            })
            .catch(function(error) {
                console.log("Error sending email", error);
                alert("Sorry, there was an error processing your order. Please try again later.");
            });
});
