const generateProductReport = (products) => {
  const availableProducts = products.filter(product => product.available)
  // return availableProducts
  const discountPrices = availableProducts.map(product => {
    let discount = product.price * 0.1
    let discountAfterPrices = product.price - discount
    return discountAfterPrices

  })
  // return discountPrices

  const highestPriceProduct = availableProducts.reduce((highest, product) => highest.price > product.price ? highest : product)
  // return highestPriceProduct.name

  const totalPrice = discountPrices.reduce((total, price) => total + price, 0)

  // return totalPrice

  return {
    Available: availableProducts,
    DiscountedPrices: discountPrices,
    Total: totalPrice,
    MostExpensive: highestPriceProduct.name
  }
}

const products = [
  { name: "Phone", price: 20000, available: true },
  { name: "Laptop", price: 65000, available: false },
  { name: "Mouse", price: 1000, available: true },
  { name: "Keyboard", price: 3000, available: true }
];

console.log(generateProductReport(products))