const createAssignmentCounter = () => {
  let count = 0;

  return () => {
    count++
    return count
  }
}

const complete = createAssignmentCounter()

console.log(complete())
console.log(complete())
console.log(complete())