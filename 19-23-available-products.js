const getAvailableProducts = (products) => {
  return products.filter(product => product.available)
}

const products = [
  { name: "Laptop", price: 80000, available: true },
  { name: "Mouse", price: 1500, available: false },
  { name: "Keyboard", price: 3000, available: true },
  { name: "Monitor", price: 20000, available: false },
  { name: "Headphone", price: 2500, available: true }
];

console.log(getAvailableProducts(products))