// JavaScript code to handle adding items to cart and displaying popup
let cartItems = [];

function addToCart(product) {
  cartItems.push(product);
  updateCartUI();
  showPopup(`${product} added to cart!`);
}

function updateCartUI() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartItemsList.appendChild(li);
  });
}

function showPopup(message) {
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popup-text');
  popupText.textContent = message;
  popup.style.display = 'block';
  setTimeout(closePopup, 2000); // Close popup after 2 seconds (2000 milliseconds)
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}
