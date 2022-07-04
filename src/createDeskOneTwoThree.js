import { getDeskOne, getDeskThree, getDeskTwo } from "./localStorage.js";
import { imageStyle } from "./styleElement.js";

const deskOne = document.getElementById(1);
const deskTwo = document.getElementById(2);
const deskThree = document.getElementById(3);

export let arrDeskOne = [];
if (getDeskOne()) {
    arrDeskOne = JSON.parse(getDeskOne());
    arrDeskOne.forEach((item) => {
        createDeskOne(item)
    });
}

export let arrDeskTwo = [];
if (getDeskTwo()) {
    arrDeskTwo = JSON.parse(getDeskTwo());
    arrDeskTwo.forEach((item) => {
        createDeskTwo(item)
    });
} 

export let arrDeskThree = [];
if (getDeskThree()) {
    arrDeskThree = JSON.parse(getDeskThree());
    arrDeskThree.forEach((item) => {
        createDeskThree(item)
    });
}

export function createDeskOne(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = imageStyle;
    deskOne.append(imageOnDesk)
}

export function createDeskTwo(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = imageStyle;
    deskTwo.append(imageOnDesk)
}

export function createDeskThree(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = imageStyle;
    deskThree.append(imageOnDesk)
}