"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const salary = +prompt("Введите размер заработной платы:");
const taxes = 0.13;

const isValid = (num) => num > 0 && Number.isFinite(num);
const salaryAfterTaxes = (salary, taxes) => salary * (1 - taxes);

const printSalaryAfterTaxes = (salary, taxes) => {
    console.log(
        isValid(salary) ?
            `Размер заработной платы за вычетом налогов равен ${salaryAfterTaxes(salary, taxes)}` :
            "Значение задано неверно"
    );
};

printSalaryAfterTaxes(salary, taxes);