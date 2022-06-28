import { imageStyle } from "./styleElement.js";
//Контейнеры которые появляются при переключении досок
const deskOne = document.getElementById(1);
const deskTwo = document.getElementById(2);
const deskThree = document.getElementById(3);

//Массив и local storage для доски 1
export let arrDeskOne = [];
if (localStorage.getItem('deskOne')) {
    arrDeskOne = JSON.parse(localStorage.getItem('deskOne'));
    arrDeskOne.forEach((item) => {
        createDeskOne(item)
    });
}

//Массив и local storage для доски 2
export let arrDeskTwo = [];
if (localStorage.getItem('deskTwo')) {
    arrDeskTwo = JSON.parse(localStorage.getItem('deskTwo'));
    arrDeskTwo.forEach((item) => {
        createDeskTwo(item)
    });
} 

//Массив и local storage для доски 3
export let arrDeskThree = [];
if (localStorage.getItem('deskThree')) {
    arrDeskThree = JSON.parse(localStorage.getItem('deskThree'));
    arrDeskThree.forEach((item) => {
        createDeskThree(item)
    });
}

//Функция для отображения элементов добавленных на доску 1
export function createDeskOne(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = imageStyle;
    deskOne.append(imageOnDesk)
}

//Функция для отображения элементов добавленных на доску 2
export function createDeskTwo(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = imageStyle;
    deskTwo.append(imageOnDesk)
}

//Функция для отображения элементов добавленных на доску 3
export function createDeskThree(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = imageStyle;
    deskThree.append(imageOnDesk)
}