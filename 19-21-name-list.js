const getCustomerNames = (customers) => {
  return  customers.map(customer => customer.name)
}

const customers = [
  { name: "Aminul", age: 21 },
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 23 },
  { name: "Sakib", age: 22 },
  { name: "Hasan", age: 24 }
];

console.log(getCustomerNames(customers))