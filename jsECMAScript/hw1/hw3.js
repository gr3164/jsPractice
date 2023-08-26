// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

const factorial = (num) => !num ? 1 : num * factorial(num - 1);

console.log(factorial(5));
console.log(factorial(0));