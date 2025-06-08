const cart = [];

function addItem(item) {
  cart.push(item);
}

function empty() {
  while (cart.length > 0) {
    cart.shift();
  }
}

const cartModal = document.getElementById("cartModal");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsList = document.getElementById("cartItemsList");
const processOrderBtn = document.getElementById("processOrderBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

closeCartBtn.onclick = () => {
  cartModal.style.display = "none";
};

clearCartBtn.onclick = () => {
  if (cart.length) {
    empty();
    alert("Your cart has been cleared.");
    renderItems();
  } else {
    alert("Your cart is empty.");
  }
};

processOrderBtn.onclick = () => {
  if (cart.length > 0) {
    alert("Order processed!");
    empty();
    renderItems();
    cartModal.style.display = "none";
  } else {
    alert("Your cart is empty.");
  }
};

function renderItems() {
  cartItemsList.innerHTML = "";
  if (cart.length === 0) {
    cartItemsList.innerHTML = "<li>Your cart is empty.</li>";
  } else {
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.title;
      cartItemsList.appendChild(li);
    });
  }
}

function show() {
  renderItems(cartModal);
  cartModal.style.display = "block";
}

export default { addItem, show };
