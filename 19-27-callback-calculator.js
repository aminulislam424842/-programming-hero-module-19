const calculateResult = (a, b, callback) => {
  return callback(a, b)
}

const callback = (a, b) => {
  return a + b
}

console.log(calculateResult(50, 25, callback))