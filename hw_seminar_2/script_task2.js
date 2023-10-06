/* Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их. */

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const div = document.createElement("div");
div.className = "wrapper";
document.body.append(div);

let counter = 0;

initialData.forEach((item) => {
  const block = `
        <div class="block_${counter}">
            <h2>${item.product}</h2>

            <div class="form_${counter}">
              <textarea class="textarea_${counter}" cols="30" rows="5"></textarea>
              <button id="${counter}">Оставить отзыв</button>
            </div>

            <div class="container_${counter}">
                
            </div>
        </div>
        `;
  div.insertAdjacentHTML("beforeend", block);

  const container = document.querySelector(".container_" + counter);

  item.reviews.forEach((el) => {
    const review = `
        <div class="review">
              ${el.text}
        </div>
    `;
    container.insertAdjacentHTML("beforeend", review);
  });

  counter++;
});

const buttonsElements = document.querySelectorAll("button");
buttonsElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    let id = e.target.id;
    const textareaElement = document.querySelector(".textarea_" + id);
    let text = textareaElement.value;

    try {
      if (text.length < 50 || text.length > 500) {
        throw new Error(
          "Длина текста должна быть больше 50 символов и меньше 500"
        );
      } else {
        const targetContainer = document.querySelector(".container_" + id);
        const newReview = `
          <div class="review">
            ${text}
          </div>
        `;
        targetContainer.insertAdjacentHTML("beforeend", newReview);
        textareaElement.value = "";
      }
    } catch (error) {
      console.log(error);
    }
  });
});
