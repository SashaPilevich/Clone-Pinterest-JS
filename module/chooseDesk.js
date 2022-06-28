import { helper } from "./app.js"

/*список выбора досок*/
export const tabs = document.querySelector('.tabs');
export const content = document.querySelectorAll('.content');
export const changeClass = (element) => {

    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }

    element.classList.add('active');
};
tabs.addEventListener('click', (event) => {

    const currTab = event.target.dataset.btn;
    changeClass(event.target);

    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
        helper.innerHTML = '';
    }
});