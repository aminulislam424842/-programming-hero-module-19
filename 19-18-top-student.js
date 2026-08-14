const findTopStudent = (students) => {
  return students.reduce((top, student) => student.marks > top.marks ? student : top)
}

const students = [
  { name: "Aminul", marks: 85 },
  { name: "Rahim", marks: 92 },
  { name: "Karim", marks: 78 },
  { name: "Sakib", marks: 95 },
  { name: "Hasan", marks: 88 }
];

console.log(findTopStudent(students))