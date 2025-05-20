document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const rentButtons = document.querySelectorAll('.rent-btn');
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const shoppingCart = document.querySelector('.shopping-cart');

    function updateCartUI() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.action}`;
            cartItems.appendChild(li);
        });
    }

    function addToCart(name, action) {
        cart.push({ name, action });
        updateCartUI();
        shoppingCart.style.display = 'block'; // Show cart when item added
    }

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const name = card.querySelector('h2').textContent;
            addToCart(name, 'Buy');
        });
    });

    rentButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const name = card.querySelector('h2').textContent;
            addToCart(name, 'Rent');
        });
    });
});
