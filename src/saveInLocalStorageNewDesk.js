import { modalBtnStyle } from "./styleElement.js";
import { closeModal } from "./modalAdd.js";
import { currentImg, generateId, imageOut } from "./app.js";
import { mobileItems } from "./burgerMenu.js";
import { inputCreate } from "./saveNewDesk.js";
import {
  modalDeleteDesk,
  openModalDeleteDesk,
  closeModalDeleteDesk,
} from "./modalDeleteDesk.js";

export const cont = document.querySelector(".cont");
export const contents = document.querySelector(".contents");
export let content = document.querySelectorAll(".content");
export let tabs = document.querySelector(".tabs");
export const modalChoose = document.querySelector(".modal__choose");
export const modalButton = document.querySelector(".modalButton");
export const deleteButtonDesk = document.querySelector(".modal-btn-delete");
export let newTab = [];
export let mobile = [];
export let saveImage = [];
export let newModalBtn = [];
export let addImage = [];

let modalBtn;
let tabBtn;
let tabMobile;
let tabDelete;
let newDesk;
let addDesk;
let imageWrapper;
let imageContainer;

if (localStorage.getItem("newTab")) {
  newTab = JSON.parse(localStorage.getItem("newTab"));
  newTab.forEach((item) => {
    createTab(item);
  });
}
if (localStorage.getItem("mobile")) {
  mobile = JSON.parse(localStorage.getItem("mobile"));
  mobile.forEach((item) => {
    createMobile(item);
  });
}
if (localStorage.getItem("newModalBtn")) {
  newModalBtn = JSON.parse(localStorage.getItem("newModalBtn"));
  newModalBtn.forEach((item) => {
    createModalButton(item);
  });
}
if (localStorage.getItem("saveImage")) {
  saveImage = JSON.parse(localStorage.getItem("saveImage"));
  saveImage.forEach((item) => {
    createNewImageOnDesk(item);
  });
}

if (localStorage.getItem("addImage")) {
  addImage = JSON.parse(localStorage.getItem("addImage"));
  addImage.forEach((item) => {
    createAddImage(item);
  });
}

export function createTab(obj) {
  let tabWrap = document.createElement("div");
  tabWrap.classList.add("tabWrap");
  tabWrap.setAttribute("data-btn", obj.name);
  tabBtn = document.createElement("button");
  tabBtn.innerHTML = obj.name;
  tabBtn.classList.add("tab-btn");
  tabBtn.setAttribute("data-btn", obj.name);
  tabDelete = document.createElement("button");
  tabDelete.innerHTML = "X";
  tabDelete.setAttribute("data-btn", obj.name);
  tabDelete.classList.add("tabDelete");
  tabWrap.append(tabBtn, tabDelete);
  tabs.append(tabWrap);

  tabDelete.addEventListener("click", (event) => {
    event.stopPropagation();
    modalDeleteDesk();
    openModalDeleteDesk();
    deleteButtonDesk.setAttribute("data-btn", event.target.dataset.btn);
  });
  deleteButtonDesk.addEventListener("click", (event) => {
    for (let i = 0; i < tabs.children.length; i++) {
      if (tabs.children[i].dataset.btn === event.target.dataset.btn) {
        tabs.children[i].classList.add("hide");
      }
    }
  });
}
deleteButtonDesk.addEventListener("click", (event) => {
  addImage = addImage.filter((item) => {
    return item.name !== event.target.dataset.btn;
  });
  localStorage.setItem("addImage", JSON.stringify(addImage));

  saveImage = saveImage.filter((item) => {
    return item.name !== event.target.dataset.btn;
  });
  localStorage.setItem("saveImage", JSON.stringify(saveImage));

  newTab = newTab.filter((item) => {
    return item.name !== event.target.dataset.btn;
  });
  localStorage.setItem("newTab", JSON.stringify(newTab));

  newModalBtn = newModalBtn.filter((item) => {
    return item.name !== event.target.dataset.btn;
  });
  localStorage.setItem("newModalBtn", JSON.stringify(newModalBtn));

  mobile = mobile.filter((item) => {
    return item.name !== event.target.dataset.btn;
  });
  localStorage.setItem("mobile", JSON.stringify(mobile));

  closeModalDeleteDesk();
});
export function createMobile(obj) {
  let tabWrap = document.createElement("div");
  tabWrap.classList.add("tabWrap");
  tabWrap.setAttribute("data-btn", obj.name);
  tabBtn = document.createElement("button");
  tabBtn.innerHTML = obj.name;
  tabBtn.classList.add("tab-btn");
  tabBtn.setAttribute("data-btn", obj.name);
  tabDelete = document.createElement("button");
  tabDelete.innerHTML = "X";
  tabDelete.setAttribute("data-btn", obj.name);
  tabDelete.classList.add("tabDelete");
  tabWrap.append(tabBtn, tabDelete);
  mobileItems.append(tabWrap);

  tabDelete.addEventListener("click", (event) => {
    event.stopPropagation();
    modalDeleteDesk();
    openModalDeleteDesk();
    deleteButtonDesk.setAttribute("data-btn", event.target.dataset.btn);
  });
  deleteButtonDesk.addEventListener("click", (event) => {
    for (let i = 0; i < mobileItems.children.length; i++) {
      if (mobileItems.children[i].dataset.btn === event.target.dataset.btn) {
        mobileItems.children[i].classList.add("hide");
      }
    }
  });
}
export function createModalButton(obj) {
  modalBtn = document.createElement("button");
  modalBtn.innerHTML = obj.name;
  modalBtn.classList.add("modal-btn");
  modalBtn.setAttribute("data-btn", obj.name);
  modalButton.append(modalBtn);

  modalBtn.addEventListener("click", (event) => {
    let addNewImage = {};
    addNewImage.src = currentImg.src;
    addNewImage.name = obj.name;
    addNewImage.key = generateId();
    addNewImage.name = obj.name;
    addImage.push(addNewImage);
    createAddImage(addNewImage);
    localStorage.setItem("addImage", JSON.stringify(addImage));
    closeModal();
  });
  deleteButtonDesk.addEventListener("click", (event) => {
    for (let i = 0; i < modalButton.children.length; i++) {
      if (modalButton.children[i].dataset.btn === event.target.dataset.btn) {
        modalButton.children[i].classList.add("hide");
      }
    }
  });
}

export function createAddImage(obj) {
  addDesk = document.createElement("div");
  addDesk.classList.add("images", "content");
  addDesk.setAttribute("data-content", obj.name);

  let imageWrapper = document.createElement("div");
  imageContainer = document.createElement("div");
  imageContainer.classList.add("imageContainer");

  let additionalImage = document.createElement("img");
  additionalImage.classList.add("additionalImage");
  additionalImage.src = obj.src;

  let imageHover = document.createElement("div");
  imageHover.classList.add("searchHover");

  let btnDeleteDesk = document.createElement("button");
  btnDeleteDesk.classList.add("btnAddDesk");
  btnDeleteDesk.innerHTML = "Удалить";
  btnDeleteDesk.name = obj.name;

  btnDeleteDesk.addEventListener("click", () => {
    addImage = addImage.filter((item) => {
      return item.key !== obj.key;
    });
    localStorage.setItem("addImage", JSON.stringify(addImage));
    imageWrapper.remove(imageContainer);
  });
  deleteButtonDesk.addEventListener("click", (event) => {
    if (addDesk.dataset.content === event.target.dataset.btn) {
      addDesk.remove();
    }
  });

  imageWrapper.append(imageContainer);
  imageContainer.append(imageHover, additionalImage);
  imageHover.append(btnDeleteDesk);

  addDesk.append(imageWrapper);
  contents.append(addDesk);
}

export function createNewImageOnDesk(obj) {
  newDesk = document.createElement("div");
  newDesk.classList.add("images", "content");
  newDesk.setAttribute("data-content", obj.name);
  newDesk.name = obj.name;

  let imageWrapper = document.createElement("div");
  imageContainer = document.createElement("div");
  imageContainer.classList.add("imageContainer");

  let newImageOnDesk = document.createElement("img");
  newImageOnDesk.classList.add("newImageOnDesk");
  newImageOnDesk.src = obj.src;
  newImageOnDesk.id = generateId();

  let imageHover = document.createElement("div");
  imageHover.classList.add("searchHover");

  let btnDeleteDesk = document.createElement("button");
  btnDeleteDesk.classList.add("btnAddDesk");
  btnDeleteDesk.innerHTML = "Удалить";
  btnDeleteDesk.name = obj.name;

  btnDeleteDesk.addEventListener("click", () => {
    saveImage = saveImage.filter((item) => {
      return item.name !== obj.name;
    });
    localStorage.setItem("saveImage", JSON.stringify(saveImage));
    imageWrapper.remove(imageContainer);
  });
  deleteButtonDesk.addEventListener("click", (event) => {
    for (let i = 0; i < contents.children.length; i++) {
      if (contents.children[i].dataset.content === event.target.dataset.btn) {
        contents.children[i].classList.remove("active");
      }
    }
  });

  imageWrapper.append(imageContainer);
  imageContainer.append(imageHover, newImageOnDesk);
  imageHover.append(btnDeleteDesk);

  newDesk.append(imageWrapper);

  contents.append(newDesk);
}
