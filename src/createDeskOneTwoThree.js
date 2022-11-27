import {
  getDeskOne,
  getDeskThree,
  getDeskTwo,
  setDeskOne,
  setDeskTwo,
  setDeskThree,
} from "./localStorage.js";
import { imageStyle } from "./styleElement.js";

const deskOne = document.getElementById(1);
const deskTwo = document.getElementById(2);
const deskThree = document.getElementById(3);

export let arrDeskOne = [];
if (getDeskOne()) {
  arrDeskOne = JSON.parse(getDeskOne());
  arrDeskOne.forEach((item) => {
    createDeskOne(item);
  });
}

export let arrDeskTwo = [];
if (getDeskTwo()) {
  arrDeskTwo = JSON.parse(getDeskTwo());
  arrDeskTwo.forEach((item) => {
    createDeskTwo(item);
  });
}

export let arrDeskThree = [];
if (getDeskThree()) {
  arrDeskThree = JSON.parse(getDeskThree());
  arrDeskThree.forEach((item) => {
    createDeskThree(item);
  });
}

export function createDeskOne(obj) {
  let imageWrapper = document.createElement("div");
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("imageContainer");

  let imageOnDesk = document.createElement("img");
  imageOnDesk.src = obj.src;
  imageOnDesk.style.cssText = imageStyle;

  let imageHover = document.createElement("div");
  imageHover.classList.add("searchHover");

  let btnDeleteDesk = document.createElement("button");
  btnDeleteDesk.classList.add("btnAddDesk");
  btnDeleteDesk.innerHTML = "Удалить";
  btnDeleteDesk.name = obj.name;

  btnDeleteDesk.addEventListener("click", () => {
    arrDeskOne = arrDeskOne.filter((item) => {
      return item.id !== obj.id;
    });
    setDeskOne(arrDeskOne);
    imageWrapper.remove(imageContainer);
  });

  imageWrapper.append(imageContainer);
  imageContainer.append(imageHover, imageOnDesk);
  imageHover.append(btnDeleteDesk);
  deskOne.append(imageWrapper);
}

export function createDeskTwo(obj) {
  let imageWrapper = document.createElement("div");
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("imageContainer");

  let imageOnDesk = document.createElement("img");
  imageOnDesk.src = obj.src;
  imageOnDesk.style.cssText = imageStyle;

  let imageHover = document.createElement("div");
  imageHover.classList.add("searchHover");

  let btnDeleteDesk = document.createElement("button");
  btnDeleteDesk.classList.add("btnAddDesk");
  btnDeleteDesk.innerHTML = "Удалить";
  btnDeleteDesk.name = obj.name;

  btnDeleteDesk.addEventListener("click", () => {
    arrDeskTwo = arrDeskTwo.filter((item) => {
      return item.id !== obj.id;
    });
    setDeskTwo(arrDeskTwo);
    imageWrapper.remove(imageContainer);
  });

  imageWrapper.append(imageContainer);
  imageContainer.append(imageHover, imageOnDesk);
  imageHover.append(btnDeleteDesk);
  deskTwo.append(imageWrapper);
}

export function createDeskThree(obj) {
  let imageWrapper = document.createElement("div");
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("imageContainer");

  let imageOnDesk = document.createElement("img");
  imageOnDesk.src = obj.src;
  imageOnDesk.style.cssText = imageStyle;

  let imageHover = document.createElement("div");
  imageHover.classList.add("searchHover");

  let btnDeleteDesk = document.createElement("button");
  btnDeleteDesk.classList.add("btnAddDesk");
  btnDeleteDesk.innerHTML = "Удалить";
  btnDeleteDesk.name = obj.name;

  btnDeleteDesk.addEventListener("click", () => {
    arrDeskThree = arrDeskThree.filter((item) => {
      return item.id !== obj.id;
    });
    setDeskThree(arrDeskThree);
    imageWrapper.remove(imageContainer);
  });

  imageWrapper.append(imageContainer);
  imageContainer.append(imageHover, imageOnDesk);
  imageHover.append(btnDeleteDesk);
  deskThree.append(imageWrapper);
}
