const sortStudents = (marks) => {
  return marks.sort((a, b) => b - a)
}

const marks = [75, 90, 55, 85, 60, 95];

console.log(sortStudents(marks))