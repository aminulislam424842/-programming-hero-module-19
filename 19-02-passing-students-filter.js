const getPassingStudents = (students) => {
  return students.filter(x => x>=40)
}

const marks = [25,80,40,35,90];

console.log(getPassingStudents(marks))