import { modalCreateDesk, openModalCreateDesk } from "./modalCreateDesk.js";
import { closeModal } from "./modalAdd.js";
import { currentImg } from "./app.js"
import { inputCreate } from "./saveNewDesk.js";
export let imageWrapperCreateDesk = document.querySelector('.imageWrapperCreateDesk');
export let btnCreateDesk = document.querySelector('.tab-btn-four');
//ивент на кнопку создать доску
btnCreateDesk.addEventListener('click', () => {
    inputCreate.value = ''
    imageWrapperCreateDesk.innerHTML = '';//для того чтобы при повторном открытии модального окна не тянулась картинка с прошлого открытия
    imageWrapperCreateDesk.append(currentImg)
            closeModal() 
            modalCreateDesk();
            openModalCreateDesk();        
})