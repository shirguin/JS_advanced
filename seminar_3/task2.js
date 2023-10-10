const saveBtnEl = document.querySelector("#save-btn");
const loadBtnEl = document.querySelector("#load-btn");
const clearBtnEl = document.querySelector("#clear-btn");

const colorEl = document.querySelector("#table-color");
const materialEl = document.querySelector("#chair-material");

console.log(document.cookie);

saveBtnEl.addEventListener("click", () => {
  Cookies.set("color", `${colorEl.value}`);
  Cookies.set("material", `${materialEl.value}`);
  console.log(document.cookie);
});

loadBtnEl.addEventListener("click", () => {
  colorEl.value = Cookies.get("color");
  materialEl.value = Cookies.get("material");
  console.log(document.cookie);
});

clearBtnEl.addEventListener("click", () => {
  /* Не работает удаление*/
  Cookies.remove("color", {
    path: "",
    domain: "http://127.0.0.1:5500/seminar_3/",
  });
  Cookies.remove("material", { path: "" });
  console.log(document.cookie);
});
