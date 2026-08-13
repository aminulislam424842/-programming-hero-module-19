const findLowestPrice = (prices) => {
  return prices.reduce((lowest, price) => price < lowest ? price : lowest);
}

const prices = [500, 250, 800];

console.log(findLowestPrice(prices))