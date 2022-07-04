import { modalBtnStyle } from "./styleElement.js";
import { closeModal } from "./modalAdd.js";
import { currentImg } from "./app.js";
import { mobileItems } from "./burgerMenu.js";

export const contents = document.querySelector('.contents')
export let content = document.querySelectorAll('.content');
export let tabs = document.querySelector('.tabs');
export const modalChoose = document.querySelector('.modal__choose')

export let newTab = [];
export let mobile = [];
export let saveImage = [];
export let newModalBtn = [];
export let addImage = [];

let modalBtn;
let tabBtn;
let tabMobile;
let newDesk;

if (localStorage.getItem('newTab')) {
    newTab = JSON.parse(localStorage.getItem('newTab'))
    newTab.forEach((item) => {
        createTab(item);
    })
}
if (localStorage.getItem('mobile')) {
    mobile = JSON.parse(localStorage.getItem('mobile'))
    mobile.forEach((item) => {
        createMobile(item);
    })
}
if (localStorage.getItem('newModalBtn')) {
    newModalBtn = JSON.parse(localStorage.getItem('newModalBtn'))
    newModalBtn.forEach((item) => {
        createModalButton(item);
    })
}
if (localStorage.getItem('saveImage')) {
    saveImage = JSON.parse(localStorage.getItem('saveImage'))
    saveImage.forEach((item) => {
        createNewImageOnDesk(item);
    })
}
if (localStorage.getItem('addImage')) {
    addImage = JSON.parse(localStorage.getItem('addImage'))
    addImage.forEach((item) => {
        createAddImage(item);
    })
}

export function createTab(obj) {
    tabBtn = document.createElement('button');
    tabBtn.innerHTML = obj.name;
    tabBtn.classList.add('tab-btn')
    tabBtn.setAttribute('data-btn', tabs.children.length + 1);
    tabs.append(tabBtn);
}
export function createMobile(obj) {
    tabMobile = document.createElement('button');
    tabMobile.innerHTML = obj.name;
    tabMobile.classList.add('tab-btn')
    tabMobile.setAttribute('data-btn', mobileItems.children.length + 1)
    mobileItems.append(tabMobile);
}
export function createModalButton(obj) {
    modalBtn = document.createElement('button');
    modalBtn.innerHTML = obj.name;
    modalBtn.style.cssText = modalBtnStyle;
    modalBtn.classList.add('tab-btn')
    modalBtn.setAttribute('data-btn', modalChoose.children.length)
    modalChoose.append(modalBtn)

    modalBtn.addEventListener('click', (event) => {
        let addNewImage = {};
        addNewImage.src = currentImg.src;
        addNewImage.id = event.target.dataset.btn;
        addImage.push(addNewImage);
        createAddImage(addNewImage)
        localStorage.setItem('addImage', JSON.stringify(addImage));
        closeModal()
    })
}

export function createAddImage(obj) {
    let addDesk = document.createElement('div');
    addDesk.setAttribute('data-content',obj.id)
    addDesk.classList.add('images', 'content');
    
    let additionalImage = document.createElement('img');
    additionalImage.classList.add('additionalImage');
    additionalImage.src = obj.src;
    addDesk.append(additionalImage)
    contents.append(addDesk)
    
}

export function createNewImageOnDesk(obj) {
    newDesk = document.createElement('div');
    newDesk.classList.add('images', 'content');
    newDesk.setAttribute('data-content', contents.children.length + 1);
    
    let newImageOnDesk = document.createElement('img');
    newImageOnDesk.classList.add('newImageOnDesk')
    newImageOnDesk.src = obj.src;
    newDesk.append(newImageOnDesk);
    contents.append(newDesk);
}
