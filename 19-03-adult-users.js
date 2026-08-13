const getAdults = (users) => { 
  return adult = users.filter(age => age >= 18);
}

const users = [12,18,25,15,30];

console.log(getAdults(users));