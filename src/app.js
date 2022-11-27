import { changeClass } from "./chooseDesk.js";
import { tabs, content } from "./saveInLocalStorageNewDesk.js";
import { searchId, btnMain } from "./search.js";
import { createPinterest } from "./createPinterest.js";
import { newImages, setImages } from "./newImagesArray.js";
import { setPinterest, getPinterest } from "./localStorage.js";
import { URL_API, getPinterestImage, createElement } from "./mockapi.js";
import { burgerMenu, mobileItems, menuMobile } from "./burgerMenu.js";

export let currentImg;
currentImg = document.createElement("img");
export let currentImage;
currentImage = document.createElement("img");
export let helper;
helper = document.querySelector(".helper");
export let imageOut;
imageOut = document.querySelector(".imageOut");
export let sizer;
sizer = document.querySelector(".sizer");

export function generateId() {
  return "_" + Math.random().toString(16).slice(2);
}

export function app() {
  const root = document.querySelector("#root");
  if (getPinterest()) {
    setImages(JSON.parse(getPinterest()));
    newImages.forEach((item) => {
      createPinterest(item);
    });
  } else {
    createElement();
  }
}
