/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const id = this.transactions.length + 1;
    return this.transactions.push({ id, amount, type });
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const type = Transaction.DEPOSIT;
    this.createTransaction(amount, type);
    // return `Добавление суммы ${amount} к балансу`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return 'Снятие такой суммы не возможно, недостаточно средств.';
    }
    this.balance -= amount;
    const type = Transaction.WITHDRAW;
    this.createTransaction(amount, type);
    // return `Снятие суммы ${amount} с баланса`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    if (this.transactions.length > 0) {
      for (const transaction of this.transactions) {
        if (transaction.id === id) {
          return this.transactions[id - 1];
        }
      }
    }
    return 'Такой транзакции не было!';
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    if (this.transactions.length > 0) {
      let transactionTotal = 0;
      for (const transaction of this.transactions) {
        if (transaction.type === type) {
          transactionTotal += transaction.amount;
        }
      }
      return transactionTotal;
    }
    return 'Таких транзакций не было!';
  },
};

account.deposit(100);
account.deposit(100);
account.withdraw(100);
console.table(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal('deposit'));
