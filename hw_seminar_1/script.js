/* Задание 1
Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.

Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}
Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:

Название альбома - Исполнитель (Год выпуска) */

const albums = [
  { title: "Начальник Комчатки", artist: "Виктор цой", year: "1984" },
  { title: "Группа крови", artist: "Виктор цой", year: "1985" },
  { title: "Звезда по имени Солнце", artist: "Виктор цой", year: "1989" },
];

albums[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? { done: false, value: albums[this.current++] }
        : { done: true };
    },
  };
};

const musicCollection = albums;

console.log("Задание №1");

for (let album of musicCollection) {
  console.log(
    `Название альбома: ${album.title} - ${album.artist} (${album.year})`
  );
}

/* Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

Отслеживать, какой повар готовит какое блюдо.
Записывать, какие блюда заказал каждый клиент.
Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк. */

console.log("Задание №2");
const specializations = new Map();
specializations.set("Виктор", "Пицца");
specializations.set("Ольга", "Суши");
specializations.set("Дмитрий", "Десерты");

console.log(specializations);

const dishes = new Map();
dishes.set("Маргарита", "Виктор");
dishes.set("Пепперони", "Виктор");
dishes.set("Филадельфия", "Ольга");
dishes.set("Калифорния", "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

console.log(dishes);

const orders = new Map();
orders.set("Алексей", ["Пепперони", "Тирамису"]);
orders.set("Мария", ["Калифорния", "Маргарита"]);
orders.set("Ирина", ["Чизкейк"]);

orders[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? { done: false, value: orders[this.current++] }
        : { done: true };
    },
  };
};

console.log(orders);

//Не понял следующее условие (В качестве ключей для клиентов используйте объекты.)