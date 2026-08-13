const findLaptop = (products,findItem) => {
  return products.find(product => {
    if (product === findItem) {
      return product;
    }
  })
}

const product = ["Phone","Laptop","Mouse"]

console.log(findLaptop(product,"Laptop"))