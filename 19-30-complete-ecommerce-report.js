const generateReport = (products) => {

  const availableProduct = products.filter(product => product.available);

  const discountedPrices = availableProduct.map(product => {
    let discountPrice = (product.price * product.discount) / 100
    let price = product.price - discountPrice
    return price
  })

  const cartTotal = availableProduct.reduce((total, product) => total + product.price, 0)

  const highestPriceProduct = availableProduct.reduce((highest, product) => product.price > highest.price ? product : highest)

  const lowestPriceProduct = availableProduct.reduce((lowest, product) => product.price < lowest.price ? product : lowest)

  return {
    availableProducts: availableProduct,
    discountedPrices: discountedPrices,
    cartTotal: cartTotal,
    highestPriceProduct: highestPriceProduct,
    lowestPriceProduct: lowestPriceProduct
  }
}

const products = [
  { name: "Laptop", price: 80000, available: true, discount: 10 },
  { name: "Mouse", price: 1500, available: true, discount: 5 },
  { name: "Keyboard", price: 3000, available: false, discount: 10 },
  { name: "Monitor", price: 20000, available: true, discount: 15 },
  { name: "Headphone", price: 2500, available: false, discount: 5 }
];

console.log(generateReport(products))