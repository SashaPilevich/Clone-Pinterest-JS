import { btnCreateDesk } from "./createNewDesk.js";
//модальное окно создания доски
const modalElementCreateDesk = document.querySelector('.modalCreateDesk');
export function modalCreateDesk() {
    modalElementCreateDesk.addEventListener('click', (e) => {
        if (
        e.target === modalElementCreateDesk ||
        e.target.getAttribute('data-close') == ''
        ) {
        closeModalCreateDesk();
        }
    });
    }
export function openModalCreateDesk() {
    modalElementCreateDesk.classList.add('show');
    modalElementCreateDesk.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    }
export function closeModalCreateDesk() {
    modalElementCreateDesk.classList.add('hide');
    modalElementCreateDesk.classList.remove('show');
    document.body.style.overflow = '';
    }