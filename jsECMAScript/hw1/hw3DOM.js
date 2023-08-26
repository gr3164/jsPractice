// 3) Напишите рекурсивную функцию findElementByClass, 
// которая принимает корневой элемент дерева DOM и название класса в качестве аргументов 
// и возвращает первый найденный элемент с указанным классом в этом дереве.

// Пример 
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);



const roottagNameent = document.getElementById('root');
const targettagNameent = findtagNameentByClass(roottagNameent, 'my-class');

function findtagNameentByClass(tagName, myClass) {
    // console.log(tagName.classList.contains(myClass));
    if (tagName.classList.contains(myClass)) return tagName;

    for (let child of tagName.children) {
        const el = findtagNameentByClass(child, myClass)
        // console.log(child);
        // console.log(el);
        if (el) return el;
    }
};

console.log(targettagNameent);