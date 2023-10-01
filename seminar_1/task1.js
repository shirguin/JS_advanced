// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
  // Добавить код
  if (book[metadataType]) {
    book[metadataType].push(data);
  } else {
    book[metadataType] = [data];
  }
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
  // вернуть
  return book[metadataType];
}

// Создание объекта книги и добавление метаданных
const book = {
  title: "1984",
  author: "George Orwell",
};

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");

addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

// Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга о дистопии!"]
console.log(getMetadata(book, ratingSymbol)); // [5]
console.log(getMetadata(book, tagsSymbol)); // ["dystopia"]
console.log(book);
