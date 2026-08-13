const getProductNames = (products) => {
  return products.map(product => product.name)
}

const products = [{ name: "Phone" }, { name: "Laptop" }]

console.log(getProductNames(products))