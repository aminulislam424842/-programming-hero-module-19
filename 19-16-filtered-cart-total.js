/**
            Task: Get Filtered Cart Total
    Calculate the total price of all products in the Electronics category.
 */


const getFilteredCartTotal = (products) => {
  return products.filter(product => product.category === "Electronics").reduce((total, product) => total + product.price, 0)
}

const cart = [
  { name: "Laptop", price: 80000, category: "Electronics" },
  { name: "Mouse", price: 1500, category: "Electronics" },
  { name: "T-Shirt", price: 1200, category: "Clothing" },
  { name: "Keyboard", price: 3000, category: "Electronics" },
  { name: "Jeans", price: 2500, category: "Clothing" }
];

console.log(getFilteredCartTotal(cart))