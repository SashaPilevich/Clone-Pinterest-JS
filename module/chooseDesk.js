import { helper } from "./app.js"
import { tabs } from "./saveInLocalStorageNewDesk.js";
import { content } from "./saveInLocalStorageNewDesk.js";
import { contents } from "./saveInLocalStorageNewDesk.js";
/*список выбора досок*/

export const changeClass = (element) => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    element.classList.add('active');
};

tabs.addEventListener('click', (event) => {
    const currTab = event.target.dataset.btn;
    changeClass(event.target);
    for (let i = 0; i < contents.children.length; i++) {
        contents.children[i].classList.remove('active');
        if (contents.children[i].dataset.content === currTab) {
            contents.children[i].classList.add('active');
        }
        helper.innerHTML = '';
    }
});
