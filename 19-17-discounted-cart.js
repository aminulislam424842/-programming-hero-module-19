const getDiscountedCart = (products) => {
  return products.map(product => {
    let discount = product.price * 0.1;

    let applyDiscount = product.price - discount;

    return {
      ...product,
      price: applyDiscount
    };
  })
}

const cart = [
  { name: "Laptop", price: 80000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 },
  { name: "Monitor", price: 20000 }
];

console.log(getDiscountedCart(cart))