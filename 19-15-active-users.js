const getActiveUsers = (users) => {
  return users.filter(user => user.active)
}
const users = [
  { name: "Aminul", active: true },
  { name: "Rahim", active: false },
  { name: "Karim", active: true },
  { name: "Sakib", active: false },
  { name: "Hasan", active: true }
];

console.log(getActiveUsers(users))