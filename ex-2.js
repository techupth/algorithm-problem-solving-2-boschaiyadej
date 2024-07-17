function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let index = 0; index < books.length; index++) {
    if (books[index].title === searchTitle) {
      return index;
    }
  }
  return -1;
}

let books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

let searchBook1 = "Gone with the Wind";
let searchBook2 = "The Master Mind";

console.log(`${searchBook1} index ที่`, findBookIndex(books, searchBook1));
console.log(`${searchBook2} index ที่`, findBookIndex(books, searchBook2));
