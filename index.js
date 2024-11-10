const numberOfStudents = parseInt(
  window.prompt("Please enter the number of students in the class:")
);
document.write(`<h2>Number of Students: ${numberOfStudents}</h2>`);

const students = [];

for (let i = 0; i < numberOfStudents; i++) {
  const input = window.prompt(
    `Enter the name and scores for student ${
      i + 1
    } in the format: Name,Math,Science,Arts`
  );
  const [name, math, science, arts] = input.split(",");

  const mathScore = Number(math);
  const scienceScore = Number(science);
  const artsScore = Number(arts);
  const totalScore = mathScore + scienceScore + artsScore;

  students.push({
    name,
    math: mathScore,
    science: scienceScore,
    arts: artsScore,
    total: totalScore,
  });
}

students.sort((a, b) => {
  if (b.total === a.total) {
    if (b.math === a.math) {
      return a.name.localeCompare(b.name);
    }
    return b.math - a.math;
  }
  return b.total - a.total;
});

students.forEach((student) => {
  document.write(
    `<h3>${student.name}: Total Score = ${student.total}, Math = ${student.math}, Science = ${student.science}, Arts = ${student.arts}</h3>`
  );
});
