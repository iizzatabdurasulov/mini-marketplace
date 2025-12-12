const productContainer = document.getElementById("products");

async function loadProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();

  data = data.slice(0, 4);

  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "productItem";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>$${item.price}</p>
      <button>Add to cart</button>
    `;

    div.querySelector("button").onclick = () => {
      addToCart(item.id, item.title, item.price, item.image);
    };

    productContainer.appendChild(div);
  });
}

loadProducts();

window.addToCart = (id, title, price, image) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, title, price, image, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  window.dispatchEvent(new CustomEvent("cartUpdated"));
};

