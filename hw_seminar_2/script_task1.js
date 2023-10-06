/* Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку. */

class Library {
  #books = [];

  constructor(books) {
    if (books.length === new Set(books).size) {
      this.#books = books;
    } else {
      throw new Error("В списке книг есть дубликаты");
    }
  }

  getAllBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Такая книга уже есть в библиотеке");
    } else {
      this.#books.push(title);
    }
  }

  remobeBook(title) {
    if (this.#books.includes(title)) {
      let index = this.#books.indexOf(title);

      this.#books.splice(index, 1);
    } else {
      throw new Error("Такой книги нет в библиотеке");
    }
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

const listBooks = ["book1", "book2", "book3"];
const lib = new Library(listBooks);
console.log(lib.getAllBooks());

lib.addBook("book4");
console.log(lib.getAllBooks());

lib.remobeBook("book2");
console.log(lib.getAllBooks());

console.log(lib.hasBook("book6"));
