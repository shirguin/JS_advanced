checkInput.addEventListener("click", () => {
  try {
    const userInp = userInput.value;
    if (isNaN(userInp) || userInp.trim() === "") {
      hintForUser.textContent = "Вы ошиблись!";
      throw new Error("Введено не число");
    } else {
      hintForUser.textContent = "Вы молодец!";
    }
  } catch (error) {
    console.log(error);
  }
});
