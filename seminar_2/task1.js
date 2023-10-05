class BankAccount {
  // Приватное свойство для хранения баланса
  #balance = 0;

  // Геттер для получения текущего баланса
  get balance() {
    return this.#balance;
  }

  set balance(balance) {
    this.#balance = balance;
  }

  // Метод для внесения денег на счет
  deposit(amount) {
    if (amount >= 0) {
      this.#balance += amount;
    } else {
      throw new Error("Число должно быть положительное");
    }

    return this.#balance;
  }

  // withdraw(amount) Метод для снятия денег со счета
  withdraw(amount) {
    if (amount >= 0 && amount < this.#balance) {
      this.#balance -= amount;
    } else {
      throw new Error("Число должно быть положительное");
    }

    return this.#balance;
  }

  // constructor(initialBalance) Конструктор для инициализации начального баланса
  constructor(initialBalance) {
    if (initialBalance >= 0) {
      this.#balance = initialBalance;
    } else {
      throw new Error("Число должно быть положительное");
    }
  }
}

// Создаем новый банковский счет с начальным балансом 500
let account = new BankAccount(500);
console.log(account.balance); // Выводит: 500

account.deposit(200);
console.log(account.balance); // Выводит: 700

account.withdraw(100);
console.log(account.balance); // Выводит: 600
