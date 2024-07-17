function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let index = 0; index < students.length; index++) {
    if (students[index] === searchStudent) {
      return index;
    }
  }
  return -1;
}

let students1 = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
let searchStudent1 = "John";
console.log(
  `${searchStudent1} เท่ากับ index ที่`,
  findStudentIndex(students1, searchStudent1)
);

let students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
let searchStudent2 = "Andrew";
console.log(
  `${searchStudent1} เท่ากับ index ที่`,
  findStudentIndex(students2, searchStudent2)
);

// ตอบคำถามตรงนี้จ้า
// O(n)
