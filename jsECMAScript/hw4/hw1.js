// Задача
// Необходимо получить список всех пользователей с помощью бесплатного API 
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. 
// Пользователь должен иметь возможность удалить любого пользователя из списка. 
// Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const url = "https://jsonplaceholder.typicode.com/users";
const root = document.querySelector('#root');

const request = async (url) => {
    const response = await fetch(url, { method: "get" });
    const data = await response.json();
    return data;
}

const setDataStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getDataStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const isFlag = () => {
    const data = getDataStorage("data");
    return data.length ? false : true;
}

const createUserHtml = () => {
    const data = getDataStorage("data");

    data.forEach(item => {
        let ul = document.createElement("ul");
        ul.id = item.id;

        root.appendChild(ul).innerHTML =
            `<li>ID: ${item.id}</li>
            <li>Name: ${item.name}</li>
            <li>UserName: ${item.username}</li>
            <li>Email: ${item.email}</li>
            <button id="btn"></button>
            `
    });
}

try {

    if (localStorage.getItem('data') !== null && isFlag()) {
        const arrUser = await request(url);
        setDataStorage("data", arrUser);
        createUserHtml();
    } else {
        createUserHtml();
    }

} catch (error) {
    console.log(error);
}


root.addEventListener("click", (e) => {

    if (e.target.tagName === "BUTTON") {
        const arr = getDataStorage("data");
        const idUser = +e.target.parentElement.id;
        const arr2 = arr.filter((item) => { return item.id !== idUser });

        setDataStorage("data", arr2);
        e.target.parentElement.remove();
    }
})

