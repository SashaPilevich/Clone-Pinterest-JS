import { closeModal } from "./modalAdd.js";
import { currentImg } from "./app.js";
import { createDeskOne, createDeskTwo, createDeskThree, arrDeskOne, arrDeskTwo, arrDeskThree } from "./createDeskOneTwoThree.js";
import { setDeskOne, setDeskThree, setDeskTwo } from "./localStorage.js";

//Кнопки из модального окна "добавить на доску"

export const btnOne = document.querySelector('.tab-btn-one');
export const btnTwo = document.querySelector('.tab-btn-two');
export const btnThree = document.querySelector('.tab-btn-three');

//Добавление фото на доску 1
btnOne.addEventListener('click', () => {
    let imgDeskOne = {};
    imgDeskOne.src = currentImg.src;
    arrDeskOne.push(imgDeskOne);
    createDeskOne(imgDeskOne);
    setDeskOne(arrDeskOne);
    closeModal()
})

//Добавление фото на доску 2
btnTwo.addEventListener('click', () => {
    let imgDeskTwo = {};
    imgDeskTwo.src = currentImg.src;
    arrDeskTwo.push(imgDeskTwo);
    createDeskTwo(imgDeskTwo)
    setDeskTwo(arrDeskTwo);
    closeModal()
})
//Добавление фото на доску 3
btnThree.addEventListener('click', () => {
    let imgDeskThree = {};
    imgDeskThree.src = currentImg.src;
    arrDeskThree.push(imgDeskThree);
    createDeskThree(imgDeskThree)
    setDeskThree(arrDeskThree);
    closeModal()
})


        
    
    
