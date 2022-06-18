const root = document.querySelector('#root');
const imageOut = document.querySelector('.imageOut');
const sizer = document.querySelector('.sizer');
let wrapper;
let hoverMenu;
let btnAdd;
let btnPin;
let btnComplaine;
let imgContainer;
let img;
let avatar;
let about;
let info;

for (let key in images) {
    createPinterest();
    img = document.createElement('img');
    img.classList.add('image');
    img.setAttribute('data-key', key);
    img.src = 'images/'+key+'.jpg';
    img.style.cssText = `
    object-fit: cover;
    width:100%;
    height: auto;
    border-radius:20px;
    `;

    avatar = document.createElement('img');
    avatar.setAttribute('data-key',images[key]['avatar'] );
    avatar.classList.add('bkgImage');
    avatar.src = 'avatar/'+images[key]['avatar']+'.jpg';
    avatar.style.cssText = `
    margin-right: 10px;
    width: 20%;
    height:20%;
    border-radius: 50%;
    `;

    info = document.createElement('h5');
    info.textContent = images[key]['description'];

    about.append(avatar, info);
    wrapper.append(about);
    imgContainer.append(img);
}

function createPinterest() {
    wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    hoverMenu = document.createElement('div');
    hoverMenu.classList.add('hoverMenu');

    const btnStyle = `
    width:70%;
    height:20%;
    border-radius: 40px;
    color: white;
    font-family: Open sans, 'sans-serif';
    font-size: 14px;
    background-color:brown;
    cursor:pointer;
    border: none;
    `;

    btnAdd = document.createElement('button');
    btnAdd.classList.add('btnAdd');
    btnAdd.textContent = 'Добавить на доску';
    btnAdd.style.cssText = btnStyle;
    
    btnPin = document.createElement('button');
    btnPin.classList.add('btnPin');
    btnPin.textContent = 'Скрыть пин со страницы';
    btnPin.style.cssText = btnStyle;

    btnComplaine = document.createElement('button');
    btnComplaine.classList.add('btnComplaine');
    btnComplaine.textContent = 'Пожаловаться';
    btnComplaine.style.cssText = btnStyle;
    
    imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');

    about = document.createElement('div');
    about.classList.add('about')
    about.style.cssText = `
    display: flex;
    align-items:center;
    color: black;
    font-family: 'Raleway', 'sans-serif';
    font-weight: normal;
    font-size:14px;
    `;
    
    sizer.append(wrapper);
    wrapper.append(imgContainer);
    imgContainer.append(hoverMenu);
    hoverMenu.append(btnAdd, btnPin, btnComplaine);
}

$(document).ready(function() {
    let container = $(".imageOut");
    container.imagesLoaded(function() {
        container.masonry({
            itemSelector: ".wrapper",
            columnWidth: ".sizer",
        });
    });
});


/*список выбора досок*/

const tabs = document.querySelector('.tabs');
const content = document.querySelectorAll('.content');

const changeClass = (element) => {

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
    }
});








