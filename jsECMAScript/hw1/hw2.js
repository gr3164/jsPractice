// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: 
// increment и decrement. Метод increment должен увеличивать значение счетчика на 1,
//  а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = (counter = 0) => ({ increment: () => ++counter, decrement: () => --counter });


const a = createCounter();
const b = createCounter(5);

console.log(a.increment());
console.log(a.decrement());

console.log(b.increment());
console.log(b.decrement());


