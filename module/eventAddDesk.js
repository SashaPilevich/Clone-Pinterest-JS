import { closeModal } from "./modalAdd.js";
import { currentImg } from "./app.js";
import { createDeskOne, createDeskTwo, createDeskThree, arrDeskOne, arrDeskTwo, arrDeskThree } from "./createDesk.js";
//Кнопки из модального окна "добавить на доску"
export const btnOne = document.querySelector('.tab-btn-one');
export const btnTwo = document.querySelector('.tab-btn-two');
export const btnThree = document.querySelector('.tab-btn-three');


//Добавление фото на доску 1
btnOne.addEventListener('click', () => {
    let imgDeskOne = {};
    imgDeskOne.src = currentImg.src;
    arrDeskOne.push(imgDeskOne);
    createDeskOne(imgDeskOne)
    localStorage.setItem('deskOne', JSON.stringify(arrDeskOne));
    closeModal()
})
//Добавление фото на доску 2
btnTwo.addEventListener('click', () => {
    let imgDeskTwo = {};
    imgDeskTwo.src = currentImg.src;
    arrDeskTwo.push(imgDeskTwo);
    createDeskTwo(imgDeskTwo)
    localStorage.setItem('deskTwo', JSON.stringify(arrDeskTwo));
    closeModal()
})
//Добавление фото на доску 3
btnThree.addEventListener('click', () => {
    let imgDeskThree = {};
    imgDeskThree.src = currentImg.src;
    arrDeskThree.push(imgDeskThree);
    createDeskThree(imgDeskThree)
    localStorage.setItem('deskThree', JSON.stringify(arrDeskThree));
    closeModal()
})
