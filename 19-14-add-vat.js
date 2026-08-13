const addVAT = (prices, vat = 0) => {
  return prices.map(price => {
    let vatPrice = (price * vat) / 100;
    let addVatToPrice = price + vatPrice;

    return addVatToPrice;
  })
}

const prices = [100, 200];

console.log(addVAT(prices, 15))