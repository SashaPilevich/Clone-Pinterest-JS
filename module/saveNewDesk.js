import { newModalBtn, newTab , saveImage, createModalButton, createNewImageOnDesk, createTab, mobile, createMobile} from "./saveInLocalStorageNewDesk.js";
import { closeModalCreateDesk } from "./modalCreateDesk.js";
import { currentImg } from "./app.js";

export const btnSave = document.querySelector('.save');
export const inputCreate = document.querySelector('.inputCreateDesk');
//сохранение фото на созданной доске
btnSave.addEventListener('click', () => {
    //объект для создания нового таба в выбрать доску
    let saveObj = {};
    saveObj.name = inputCreate.value;//то что ввели в input -название доски
    newTab.push(saveObj);
    createTab(saveObj)
    localStorage.setItem('newTab', JSON.stringify(newTab))

    //объект для создания нового таба в бургер меню
    let saveMobile = {};
    saveMobile.name = inputCreate.value;
    mobile.push(saveMobile);
    createMobile(saveMobile)
    localStorage.setItem('mobile', JSON.stringify(mobile))

    //объект для создания новой кнопки в модальном окне создания доски
    let saveModalButton = {};
    saveModalButton.name = inputCreate.value;
    newModalBtn.push(saveModalButton);
    createModalButton(saveModalButton);
    localStorage.setItem('newModalBtn', JSON.stringify(newModalBtn))

    //объект для создания и сохранения выбранного фото на доске
    let saveImg = {};
    saveImage.name = inputCreate.value;
    saveImg.src = currentImg.src;
    saveImage.push(saveImg);
    createNewImageOnDesk(saveImg);
    localStorage.setItem('saveImage', JSON.stringify(saveImage))

    inputCreate.value = '';
    closeModalCreateDesk();
})