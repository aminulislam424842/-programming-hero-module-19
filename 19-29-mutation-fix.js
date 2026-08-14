const copyProducts = (products) => {
  return products.map(product => ({
    ...product,
    price: product.price * 0.9
  }))
}

const products = [
  { name: "Laptop", price: 80000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 }
];

const updated = copyProducts(products)
console.log("Original : ", products)
console.log("Updated : ", updated)