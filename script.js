const products = [
  { name: "Rice", price: 50 },
  { name: "Milk", price: 30 },
  { name: "Eggs", price: 60 },
  { name: "Vegetables", price: 40 },
  { name: "Fresh Meat", price:1000 },
  { name: "Drink Bottle", price:90 },
  { name: "Kurkure", price:20 },
  { name: "Noodles packet", price:120 },
  { name: "Tea powder", price:90 },
  { name: "Fresh Chicken", price:250 },
  { name: "Soda", price:20 },
  { name: "Water Bottle", price:20 },
  { name: "Sugar", price:30 },
  { name: "Family Pack", price:4000 },
];

let cart = [];
let total = 0;

const productDiv = document.getElementById("products");
const cartList = document.getElementById("cart");
const totalDisplay = document.getElementById("total");

products.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;

  productDiv.appendChild(div);
});

function addToCart(index) {
  cart.push(products[index]);
  total += products[index].price;

  updateCart();
}

function updateCart() {


 cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = total;
}