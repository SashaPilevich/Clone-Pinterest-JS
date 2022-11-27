import { contents } from "./saveInLocalStorageNewDesk.js";
import { helper } from "./app.js"
export let burgerMenu = document.querySelector('.mobile-burger');
export let mobileItems = document.querySelector('.mobile-items');
export let menuMobile = document.querySelector('.menu-mobile');

burgerMenu.addEventListener('click', () => {
    if (mobileItems.style.display == 'block') {
        mobileItems.style.display = 'none';
    } else {
        mobileItems.style.display = 'block';
    }
});

const change = (element) => {
    for (let i = 0; i < mobileItems.children.length; i++) {
        mobileItems.children[i].classList.remove('active');
    }
    element.classList.add('active');
};

mobileItems.addEventListener('click', (event) => {
    const currentTab = event.target.dataset.btn;
    change(event.target);
    for (let i = 0; i < contents.children.length; i++) {
        contents.children[i].classList.remove('active');
        if (contents.children[i].dataset.content === currentTab) {
            contents.children[i].classList.add('active');
        }
        helper.innerHTML = '';
    }
});

