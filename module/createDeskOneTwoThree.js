import { getDeskOne, getDeskThree, getDeskTwo } from "./localStorage.js";
import { imageStyle } from "./styleElement.js";
//Контейнеры которые появляются при переключении досок
export const deskOne = document.getElementById(1);
export const deskTwo = document.getElementById(2);
export const deskThree = document.getElementById(3);

//Массив и local storage для доски 1
export let arrDeskOne = [];
if (getDeskOne()) {
    arrDeskOne = JSON.parse(getDeskOne());
    arrDeskOne.forEach((item) => {
        createDeskOne(item)
    });
}

//Массив и local storage для доски 2
export let arrDeskTwo = [];
if (getDeskTwo()) {
    arrDeskTwo = JSON.parse(getDeskTwo());
    arrDeskTwo.forEach((item) => {
        createDeskTwo(item)
    });
} 

//Массив и local storage для доски 3
export let arrDeskThree = [];
if (getDeskThree()) {
    arrDeskThree = JSON.parse(getDeskThree());
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