const applyDiscount = (prices, discount = 0) => {
  let priceAfterDiscount = prices.map(x => {
    let discountPrice = (x * discount) / 100;
    let applyAfterDiscount = x - discountPrice;
    return applyAfterDiscount;
  })
  return priceAfterDiscount
}

console.log(applyDiscount([100, 200, 300], 10));