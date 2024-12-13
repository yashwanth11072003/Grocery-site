// Function to scroll the categories horizontally when arrows are clicked
function scrollCategories(direction) {
    const slider = document.getElementById('categoriesSlider');
    const scrollAmount = 300;  // Distance to scroll per click

    // Scroll the categories container in the specified direction
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
