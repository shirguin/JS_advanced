/* Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage). */

const addCommentBtnEl = document.querySelector(".addCommentBtn");
const inputProductEl = document.querySelector(".inputProduct");
const inputTextEl = document.querySelector(".inputText");
const ErrorEl = document.querySelector(".addError");
const contentEl = document.querySelector(".content");

if (localStorage.length > 0){
    let products = getProducts();
    console.log(`Товары: ${products}`);
}

addCommentBtnEl.addEventListener("click", () => {
  let product = inputProductEl.value;
  let comment = inputTextEl.value;
  let listComments = [];

  if (localStorage.getItem(product) !== null) {
    listComments = JSON.parse(localStorage.getItem(product));
  }

  if (product !== "" && comment !== "") {
    listComments.push(comment);
    localStorage.setItem(product, JSON.stringify(listComments));

    window.location.replace("./index.html");
  } else {
    ErrorEl.innerHTML = `<h4>Не все поля заполнены!</h4>`;
  }

});

function getProducts(){
    let products = [];
    for(let i=0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        products.push({key: key, value: JSON.parse(localStorage.getItem(key))});
    }

    console.log(products);
    return products;
}


