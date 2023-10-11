const productsListEl = document.querySelector(".products");

if (localStorage.length > 0) {
  let products = getProducts();

  products.forEach((product) => {
    let newLiEl = document.createElement("li");
    newLiEl.className = "productName";
    newLiEl.innerHTML = `<h4>${product.name}</h4>`;
    productsListEl.append(newLiEl);
  });
}

//Навешиваем обработчик на товары (Показ отзывов)
document.querySelectorAll(".productName").forEach((element) => {
  element.addEventListener("click", (e) => {
    //Написать проверку, что уже открыты отзывы!!!
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
    });
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
