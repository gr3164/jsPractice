// Это расширенная версия задачи с банком, которую мы решлали на семинаре:

// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

// Пример работы:

// const bank = new Bank("Мой Банк");

// const client1 = new Client("Иван", 25);
// const client2 = new Client("Мария", 30);

// bank.addClient(client1);
// bank.addClient(client2);

// bank.openAccount(client1, 1000);
// bank.openAccount(client2, 500);

// bank.deposit(123456789, 200);
// bank.withdraw(987654321, 100);
// bank.checkBalance(123456789);
// bank.checkBalance(987654321);

class Client {
    constructor(name, age) {
        this.id = Math.floor(Math.random() * 1_000_000_000);
        this.name = name;
        this.age = age;
    }
}

const client1 = new Client("Иван", 25);
const client2 = new Client("Олег", 44);
const client3 = new Client("test", 333);

class Bank {
    constructor(title, listOfClients = [], listOfAccounts = { "123456789": { "client": { ...client3 }, "money": 777 } }) {
        this.title = title;
        this.listOfClients = listOfClients;
        this.listOfAccounts = listOfAccounts;
    }

    addClient(client) {
        this.listOfClients.push({ ...client });
    }

    openAccount(client, money) {
        this.listOfAccounts[`${Math.floor(Math.random() * 1_000_000_000)}`] = {
            "client": { ...client },
            "money": money
        }
    }

    deposit(accountNumber, cash) {
        this.listOfAccounts[`${accountNumber}`].money += cash;
    }

    withdraw(accountNumber, cash) {
        this.listOfAccounts[`${accountNumber}`].money -= cash;
    }

    checkBalance(accountNumber) {
        console.log(this.listOfAccounts?.[`${accountNumber}`].money);
    }
}

const bank = new Bank("Мой Банк");

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(123456789, 100);

bank.checkBalance(123456789);

console.log(bank.listOfAccounts);