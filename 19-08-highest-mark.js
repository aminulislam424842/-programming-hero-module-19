const findHighestMark = (marks) => {
  return marks.reduce((highest,mark) => mark>highest ? mark:highest)
}

const mark = [60,90,70]

console.log(findHighestMark(mark))