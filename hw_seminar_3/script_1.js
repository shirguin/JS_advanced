const productsListEl = document.querySelector(".products");

if (localStorage.length > 0) {
  let products = getProducts();

  //Добавляем товары на страницу
  products.forEach((product) => {
    let newLiEl = document.createElement("li");
    newLiEl.className = "productItem";
    newLiEl.innerHTML = `<p class="productName">${product.name}</p>`;
    productsListEl.append(newLiEl);
  });
}

//Навешиваем обработчик на товары (Показ отзывов)
document.querySelectorAll(".productName").forEach((element) => {
  element.addEventListener("click", (e) => {
    //Проверяем, открыты отзывы или нет
    if (e.target.parentNode.childNodes.length <= 1) {
      let productName = e.target.innerHTML;
      let comments = getComments(productName);

      let newUlEl = document.createElement("ul");
      newUlEl.className = "productComments";
      e.target.parentNode.append(newUlEl);

      comments.forEach((comment) => {
        let newLiEl = document.createElement("li");
        newLiEl.className = "comment";
        newLiEl.innerHTML = `
          <div class="commentItem">
            <p>${comment}</p>
            <button class="delete button">Удалить отзыв</button>
          </div>
            `;
        newUlEl.append(newLiEl);

        //Навешиваем обработчик на кнопку (удаление отзыва)
        newLiEl.querySelector(".delete").addEventListener("click", (e) => {
          const deleteEl = e.target.parentNode.parentNode;
          deleteEl.remove();
          deleteComment(productName, comment);
        });
      });

    } else {
      let commentsBlockEl = e.target.parentNode.lastElementChild;

      //Проверяем, что клик был по названию товара
      if (commentsBlockEl.className == "productComments") {
        commentsBlockEl.remove();
      }
    }
  });
});

//Получаем массив объектов товаров, хранящихся в localStorage
function getProducts() {
  let products = [];
  for (let i = 0; i < localStorage.length; i++) {
    let productName = localStorage.key(i);
    let productComments = JSON.parse(localStorage.getItem(productName));
    let product = { name: productName, comments: productComments };
    products.push(product);
  }
  return products;
}

//Получаем все отзывы о товаре по имени товара
function getComments(productName) {
  let products = getProducts();

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      return products[i].comments;
    }
  }
}

//Удаляем комментарий из localStorage
function deleteComment(productName, comment) {
  let listComments = JSON.parse(localStorage.getItem(productName));
  let indexDeleteEl = listComments.indexOf(comment);
  listComments.splice(indexDeleteEl, 1);

  //Если у товара не остается отзывов, товар удаляется тоже.
  if(listComments.length > 0){
    localStorage.setItem(productName, JSON.stringify(listComments));
  }else{
    localStorage.removeItem(productName);
    location.reload();
  }
  
}
