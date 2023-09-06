// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const url = "https://dog.ceo/api/breeds/image/random";
const root = document.querySelector("#root");

const request = async (url) => {
    const res = await fetch(url, { method: "get" });
    const data = await res.json();
    return data;
}

const createHtmlElement = (data) => {
    let divImg = document.createElement("DIV");
    divImg.id = "divImg";
    let img = document.createElement("IMG");
    img.src = data.message;
    divImg.appendChild(img);
    root.appendChild(divImg);
}

const getDog = (url) => {
    request(url).then((data) => {
        console.log(data);
        return createHtmlElement(data);
    })
}

const intervalOfImages = (url, num) => {
    let count = num;

    const intervalDogImg = setInterval(() => {
        if (count === 0) {
            return clearInterval(intervalDogImg);
        }
        getDog(url);
        count--;
    }, 3000)
}


try {
    intervalOfImages(url, 10);

} catch (error) {
    console.log(error);
}
