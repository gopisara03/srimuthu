const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add product to cart logic here
        // For example, you could use localStorage to store cart items
        alert('Product added to cart!');
    });
});