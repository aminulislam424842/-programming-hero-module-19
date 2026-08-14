const getEligibleStudents = (students) => {
  return students.filter(student => student.marks >= 60)
}

const students = [
  { name: "Aminul", marks: 85 },
  { name: "Rahim", marks: 55 },
  { name: "Karim", marks: 72 },
  { name: "Sakib", marks: 48 },
  { name: "Hasan", marks: 90 }
];

console.log(getEligibleStudents(students))