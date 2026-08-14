const getFinalPrices = (prices, discount = 0) => {
  return prices.map(price => {
    let discountPrice = (price * discount) / 100;
    let finalPrice = price - discountPrice;

    return finalPrice
  })
}

const prices = [100, 200, 300, 400, 500];

console.log(getFinalPrices(prices, 10))