import { helper } from "./app.js"
import { tabs } from "./saveInLocalStorageNewDesk.js";
import { content } from "./saveInLocalStorageNewDesk.js";
import { contents } from "./saveInLocalStorageNewDesk.js";
import { btnMain } from "./search.js"
import { imageOut } from "./app.js";

/*список выбора досок*/

export const changeClass = (element) => {
    for (let i = 0; i < tabs.children.length; i++) {
        if (tabs.children[i].dataset.btn > 1) {
            tabs.children[i].classList.remove('active');
        }
        
    }
    element.classList.add('active');
};



// tabs.addEventListener('click', (event) => {
//     const currTab = event.target.dataset.btn;
//     changeClass(event.target);
//     for (let i = 0; i < contents.children.length; i++) {
        
//             contents.children[i].classList.remove('active');
//         if (contents.children[i].dataset.content === currTab ) {
//             console.log(contents.children[i].dataset.content)
//             contents.children[i].classList.add('active');
//             contents.classList.add('activeDesk')
            
//         } else if (currTab === 1) {
//             contents.classList.remove('activeDesk')
//         }
//         helper.innerHTML = '';
//     }
// });
// btnMain.addEventListener('click', () => {
    
   
//     imageOut.classList.add('active');
//     contents.classList.remove('activeDesk')
    
// });

tabs.addEventListener('click', (event) => {
    const currTab = event.target.dataset.btn;
    changeClass(event.target);
    for (let i = 0; i < contents.children.length; i++) {
            contents.children[i].classList.remove('activeMain');
            contents.children[i].classList.remove('active');

        if (currTab === '1' ) {
            contents.classList.remove('activeDesk');
            imageOut.classList.add('activeMain');
            
        } else if (contents.children[i].dataset.content === currTab) {
            contents.children[i].classList.add('active');
            contents.classList.add('activeDesk')
            
        }
        helper.innerHTML = '';
    }
});
btnMain.addEventListener('click', () => {
    imageOut.classList.add('activeMain');
    imageOut.classList.remove('active');
});

