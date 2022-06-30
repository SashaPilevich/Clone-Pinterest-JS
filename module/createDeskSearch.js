import { imageStyle } from "./styleElement.js";
import { deskOne, deskTwo, deskThree } from "./createDesk.js";

//Массив и local storage для доски 1
export let arrSearchOne = [];
if (localStorage.getItem('deskSearchOne')) {
    arrSearchOne = JSON.parse(localStorage.getItem('deskSearchOne'));
    arrSearchOne.forEach((item) => {
        createDeskSearchOne(item)
    });
}

//Массив и local storage для доски 2
export let arrSearchTwo = [];
if (localStorage.getItem('deskSearchTwo')) {
    arrSearchTwo = JSON.parse(localStorage.getItem('deskSearchTwo'));
    arrSearchTwo.forEach((item) => {
        createDeskSearchTwo(item)
    });
} 

//Массив и local storage для доски 3
export let arrSearchThree = [];
if (localStorage.getItem('deskSearchThree')) {
    arrSearchThree = JSON.parse(localStorage.getItem('deskSearchThree'));
    arrSearchThree.forEach((item) => {
        createDeskSearchThree(item)
    });
}

//Функция для отображения элементов добавленных на доску 1
export function createDeskSearchOne(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = imageStyle;
    deskOne.append(imageOnDesk)
}

//Функция для отображения элементов добавленных на доску 2
export function createDeskSearchTwo(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = imageStyle;
    deskTwo.append(imageOnDesk)
}

//Функция для отображения элементов добавленных на доску 3
export function createDeskSearchThree(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = imageStyle;
    deskThree.append(imageOnDesk)
}