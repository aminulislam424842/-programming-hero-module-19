const countProducts = (products) => {
  const productCount = products.reduce((count, product) => {
    count[product.category] = (count[product.category] || 0) + 1;
    return count;
  }, {});
  return productCount
}

const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Headphone", category: "Electronics" },
  { name: "Shoes", category: "Footwear" }
];

console.log(countProducts(products))