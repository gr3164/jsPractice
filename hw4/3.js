"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const randInt = (min = 0, max = 9) => Math.floor(Math.random() * (max - min + 1) + min);
const arrLength = 5;

const arrNumbers = Array.from(Array(arrLength), () => randInt());
// const arrNumbers = [];
// for (let i = 0; i < arrLength; i++) {
//     arrNumbers[i] = randInt();
// }


console.log(arrNumbers);
console.log(`Сумму элементов массива: ${arrNumbers.reduce((acc, el) => acc + el, 0)}`);
console.log(`Минимальное значение в массиве: ${Math.min(...arrNumbers)}`);

const arr2 = [];

arrNumbers.forEach((el, i) => {
    if (el !== 3) return;
    arr2.push(i);
});
// for (let i = 0; i < arrLength; i++) {
//     if (arrNumbers[i] === 3) {
//         arr2.push(i);
//     }
// }

console.log(`Индексы елементов равные 3:`, arr2);
