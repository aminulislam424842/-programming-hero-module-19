const analyzeStudents = (students) => {
  const passedStudent = students.filter(student => student.mark >= 40)


  const bonusMark = passedStudent.map(student => student.mark + 5);


  const topStudent = students.reduce((top, student) => student.mark > top.mark ? student : top)


  const averageMarks = bonusMark.reduce((total, mark) => total + mark, 0) / bonusMark.length;


  return {
    Passed: passedStudent.map(student => student.name),
    AfterBonus: bonusMark,
    TopStudent: topStudent.name,
    Average: averageMarks.toFixed(2)
  }
}

const students = [
  { name: "Aminul", mark: 75 },
  { name: "Karim", mark: 35 },
  { name: "Rahim", mark: 90 },
  { name: "Hasan", mark: 55 }
];

console.log(analyzeStudents(students))