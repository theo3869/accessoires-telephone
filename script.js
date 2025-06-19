
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  document.getElementById("cart-count").textContent = cart.length;
  updateCart();
}

function toggleCart() {
  const cartSection = document.getElementById("cart");
  cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
}

function updateCart() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.product + " - €" + item.price.toFixed(2);
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = sum.toFixed(2);
}

function checkout() {
  window.location.href = "paiement.html";
}
