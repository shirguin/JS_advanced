/* Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
Создайте объект library, который содержит массив книг и имеет свойство-символ Symbol.iterator.
Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.
Массив книг */
const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

books[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? { done: false, value: books[this.current++] }
        : { done: true };
    },
  };
};

for (let book of books) {
  console.log(`Название: ${book.title}, Автор: ${book.author}`);
}
