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

export let modalBtn;
export let tabBtn;
export let tabMobile;
export let newDesk;

//запись новой кнопки в модальное окно с именем новой доски 
if (localStorage.getItem('newModalBtn')) {
    newModalBtn = JSON.parse(localStorage.getItem('newModalBtn'))
    newModalBtn.forEach((item) => {
        createModalButton(item);
    })
}
//добавление нового таба с именем новой доски
if (localStorage.getItem('newTab')) {
    newTab = JSON.parse(localStorage.getItem('newTab'))
    newTab.forEach((item) => {
        createTab(item);
    })
}
//добавление нового таба с именем новой доски для бургер меню
if (localStorage.getItem('mobile')) {
    mobile = JSON.parse(localStorage.getItem('mobile'))
    mobile.forEach((item) => {
        createMobile(item);
    })
}
//добавление фото на новую доску
if (localStorage.getItem('saveImage')) {
    saveImage = JSON.parse(localStorage.getItem('saveImage'))
    saveImage.forEach((item) => {
        createNewImageOnDesk(item);
    })
}
//добавление фото на доску, которую уже создали ранее
if (localStorage.getItem('addImage')) {
    addImage = JSON.parse(localStorage.getItem('addImage'))
    addImage.forEach((item) => {
        createAddImage(item);
    })
}
//функция создания кнопки нового таба
export function createTab(obj) {
    tabBtn = document.createElement('button');
    tabBtn.innerHTML = obj.name;
    tabBtn.classList.add('tab-btn')
    tabBtn.setAttribute('data-btn', tabs.children.length + 1)
    tabs.append(tabBtn);
}
//функция создания кнопки нового таба для бургер меню
export function createMobile(obj) {
    tabMobile = document.createElement('button');
    tabMobile.innerHTML = obj.name;
    tabMobile.classList.add('tab-btn')
    tabMobile.setAttribute('data-btn', mobileItems.children.length + 1)
    mobileItems.append(tabMobile);
}
//функция создания кнопки в модальном окне с именем доски 
export function createModalButton(obj) {
    modalBtn = document.createElement('button');
    modalBtn.innerHTML = obj.name;
    modalBtn.name = obj.name;
    modalBtn.style.cssText = modalBtnStyle;
    modalBtn.classList.add('tab-btn')
    modalBtn.setAttribute('data-btn', modalChoose.children.length)
    modalChoose.append(modalBtn)

//добавление фото в уже созданную доску
    modalBtn.addEventListener('click', (event) => {
        let addNewImage = {};
        addNewImage.src = currentImg.src;
        addNewImage.id = event.target.dataset.btn;
        addNewImage.name = modalBtn.name;
        addImage.push(addNewImage);
        createAddImage(addNewImage)
        localStorage.setItem('addImage', JSON.stringify(addImage));
        closeModal()
    })
}

//функция добавления фото в уже созданную доску
export function createAddImage(obj) {
    let addDesk = document.createElement('div');
    addDesk.setAttribute('data-content',obj.id)//такой как значение атрибута у tabs
    addDesk.classList.add('images', 'content');
    
    let additionalImage = document.createElement('img');
    additionalImage.src = obj.src;
    additionalImage.style.cssText = `
    width:20%;
    height: auto;
    border-radius:20px`;
    addDesk.append(additionalImage)
    contents.append(addDesk)
}

//функция добавления фото на доску которую создали сами
export function createNewImageOnDesk(obj) {
    newDesk = document.createElement('div');
    newDesk.classList.add('images', 'content');
    newDesk.setAttribute('data-content', contents.children.length + 1)
    
    let newImageOnDesk = document.createElement('img');
    newImageOnDesk.src = obj.src;
    newImageOnDesk.style.cssText = `
    width: 20%;
    height: auto;
    border-radius: 20px`;
    newDesk.append(newImageOnDesk);
    contents.append(newDesk);
}
