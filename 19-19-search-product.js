const searchProduct = (products, name) => {
  return products.find(product => product === name ? product : "Product Not Found")
}

const products = [
  { name: "Laptop", price: 80000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 },
  { name: "Monitor", price: 20000 }
];

console.log(searchProduct(products, "Mouse"));