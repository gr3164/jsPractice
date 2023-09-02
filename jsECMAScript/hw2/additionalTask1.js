// 1
// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

// // Пример использования
// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
// console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]

class Phonebook {
    constructor(name, phone, contacts = []) {
        this.name = name;
        this.phone = phone;
        this.contacts = contacts;
    }

    addContact(name, phone) {
        this.contacts.push({
            "name": name,
            "phone": phone
        })
    }

    deleteContact(name) {
        this.contacts = this.contacts.filter(item => {
            return item.name !== name;
        })
    }

    findContactByName(name) {
        return (this.contacts.filter(item => {
            return item.name === name;
        }));
    }

    findContactByPhone(phone) {
        return (this.contacts.filter(item => {
            return item.phone === phone;
        }));
    }
}

const phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");


console.log(phonebook.findContactByName("Иванов"));
console.log(phonebook.findContactByPhone("987-65-43"));

phonebook.deleteContact("Иванов");
console.log(phonebook.contacts);

