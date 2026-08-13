const findUser = (users, id) => {
  return users.find(user => user.id === id);
}

const users = [
  { id: 1, name: "Aminul" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" }
];

console.log(findUser(users,2))