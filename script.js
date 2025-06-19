
let cart = [];
function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
        count += item.quantity;
    });
    cartCount.textContent = count;
    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartSection = document.getElementById('cart');
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
}

function checkout() {
    window.location.href = "paiement.html";
}
