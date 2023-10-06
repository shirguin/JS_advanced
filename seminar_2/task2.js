class User {
  _name;
  _surname;

  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }
}

class PremiumUser extends User {
  premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
}

// создать RegularUser
class RegularUser extends User {}

function getAccountInfo(user) {
  // Премиум аккаунт действителен до такой-то даты или информация отсутствует
  if (user instanceof User) {
    const prem = user?.premiumAccount;
    if (prem) {
      console.log("Премиум аккаунт действителен до:" + prem);
    } else {
      console.log("пользователь без премиум аккаунта");
    }
  } else {
    console.log("Тип пользователя не определен");
  }

  // пользователь без премиум аккаунта

  // Тип пользователя не определен"
}

// Проверка
const user1 = new PremiumUser();
const user2 = new RegularUser();
const user3 = new Object();
getAccountInfo(user1);
getAccountInfo(user2);
getAccountInfo(user3);
