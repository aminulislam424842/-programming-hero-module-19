const getShoppingSummary = (prices) => {
  const subTotal = prices.reduce((total, price) => total + price, 0);
  const average = subTotal / prices.length;

  return {
    Total: subTotal,
    AveragePrice: average
  }
}

const prices = [100, 250, 50, 300, 150];

console.log(getShoppingSummary(prices))