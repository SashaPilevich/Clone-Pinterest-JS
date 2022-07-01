import { btnOneSearch, btnTwoSearch, btnThreeSearch } from "./eventSearch.js";
//Функция модального окна "добавить на доску"
const modalElementSearch = document.querySelector('.modalSearch');
export function modalSearch() {
    
    // const imageWrapper = document.querySelector('.imageWrapper');
    modalElementSearch.addEventListener('click', (e) => {
        if (
        e.target === modalElementSearch ||
        e.target.getAttribute('data-close') == ''
        ) {
        closeModalSearch();
        }
    });
    }
    
export function openModalSearch() {
    modalElementSearch.classList.add('show');
    modalElementSearch.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    }
export function closeModalSearch() {
    modalElementSearch.classList.add('hide');
    modalElementSearch.classList.remove('show');
    document.body.style.overflow = '';
    }