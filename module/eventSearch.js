import { closeModalSearch } from "./modalSearch.js";
import { currentImage } from "./search.js";
import { createDeskSearchOne, createDeskSearchTwo, createDeskSearchThree, arrSearchOne, arrSearchTwo, arrSearchThree  } from "./createDeskSearch.js";
//Кнопки из модального окна "добавить на доску"
export const btnOneSearch = document.querySelector('.searchOne');
export const btnTwoSearch = document.querySelector('.searchTwo');
export const btnThreeSearch = document.querySelector('.searchThree');


//Добавление фото на доску 1
btnOneSearch.addEventListener('click', () => {
    let imgDeskOne = {};
    imgDeskOne.src = currentImage.src;
    arrSearchOne.push(imgDeskOne);
    createDeskSearchOne(imgDeskOne);
    localStorage.setItem('deskSearchOne', JSON.stringify(arrSearchOne));
    closeModalSearch()
})

//Добавление фото на доску 2
btnTwoSearch.addEventListener('click', () => {
    let imgDeskTwo = {};
    imgDeskTwo.src = currentImage.src;
    arrSearchTwo.push(imgDeskTwo);
    createDeskSearchTwo(imgDeskTwo)
    localStorage.setItem('deskSearchTwo', JSON.stringify(arrSearchTwo));
    closeModalSearch()
})
//Добавление фото на доску 3
btnThreeSearch.addEventListener('click', () => {
    let imgDeskThree = {};
    imgDeskThree.src = currentImage.src;
    arrSearchThree.push(imgDeskThree);
    createDeskSearchThree(imgDeskThree)
    localStorage.setItem('deskSearchThree', JSON.stringify(arrSearchThree));
    closeModalSearch()
})
