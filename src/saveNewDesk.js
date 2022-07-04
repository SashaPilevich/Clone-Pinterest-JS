import { newModalBtn, newTab , saveImage, createModalButton, createNewImageOnDesk, createTab, mobile, createMobile} from "./saveInLocalStorageNewDesk.js";
import { closeModalCreateDesk } from "./modalCreateDesk.js";
import { currentImg } from "./app.js";

export const btnSave = document.querySelector('.save');
export const inputCreate = document.querySelector('.inputCreateDesk');

btnSave.addEventListener('click', () => {
    let saveObj = {};
    saveObj.name = inputCreate.value;
    newTab.push(saveObj);
    createTab(saveObj)
    localStorage.setItem('newTab', JSON.stringify(newTab))

    let saveMobile = {};
    saveMobile.name = inputCreate.value;
    mobile.push(saveMobile);
    createMobile(saveMobile)
    localStorage.setItem('mobile', JSON.stringify(mobile))

    let saveModalButton = {};
    saveModalButton.name = inputCreate.value;
    newModalBtn.push(saveModalButton);
    createModalButton(saveModalButton);
    localStorage.setItem('newModalBtn', JSON.stringify(newModalBtn))

    let saveImg = {};
    saveImage.name = inputCreate.value;
    saveImg.src = currentImg.src;
    saveImage.push(saveImg);
    createNewImageOnDesk(saveImg);
    localStorage.setItem('saveImage', JSON.stringify(saveImage))

    inputCreate.value = '';
    closeModalCreateDesk();
})