const getPremiumCustomers = (customers) => {
  return customers.filter(customer => customer.membership === "premium")
}

const customers = [
  { name: "Aminul", membership: "premium" },
  { name: "Rahim", membership: "regular" },
  { name: "Karim", membership: "premium" },
  { name: "Sakib", membership: "regular" },
  { name: "Hasan", membership: "premium" }
];

console.log(getPremiumCustomers(customers))