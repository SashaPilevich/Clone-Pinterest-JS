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

const URL_API = 'https://62b0c0c4e460b79df04c901b.mockapi.io/api';
let newImages = [];
if (localStorage.getItem('gallery')) {
    newImages = JSON.parse(localStorage.getItem('gallery'));
    newImages.forEach((item) => {
        createPinterest(item)
    });
} else {
    createElement();
}

async function getPinterest() {
    const response = await fetch(`${URL_API}/pinterest`);
    const pinterest = await response.json();
    return pinterest;
}
function createElement() {
    getPinterest().then((pinterest) => {
        pinterest.forEach(({image, avatar, description, hashtag}) => {
            let gallery = {};
            gallery.image = image;
            gallery.description = description;
            gallery.avatar = avatar;
            gallery.hashtag = hashtag;
            newImages.push(gallery);
            createPinterest(gallery); 
            localStorage.setItem('gallery', JSON.stringify(newImages));
            });
    })
}

function createPinterest(obj) {
    createMainWrapper();
    img = document.createElement('img');
    img.classList.add('image');
    img.setAttribute('data-key', obj.image);
    img.src = obj.image;
    img.style.cssText = `
    object-fit: cover;
    width:100%;
    height: auto;
    border-radius:20px;
    `;
    
    avatar = document.createElement('img');
    avatar.setAttribute('data-key',obj.avatar );
    avatar.classList.add('bkgImage');
    avatar.src = obj.avatar;
    avatar.style.cssText = `
    margin-right: 10px;
    width: 20%;
    height:20%;
    border-radius: 50%;
    `;

    info = document.createElement('h5');
    info.textContent = obj.description;

    hoverMenu = document.createElement('div');
    hoverMenu.classList.add('hoverMenu');

    const btnStyle = `
    width:50%;
    height:20%;
    border-radius: 20px;
    color: white;
    font-family: Open sans, 'sans-serif';
    font-size: 10px;
    background-color:brown;
    cursor:pointer;
    border: none;
    text-align:center;
    padding: 5px;
    `;

    btnAdd = document.createElement('button');
    btnAdd.classList.add('btnAdd');
    btnAdd.textContent = 'Добавить на доску';
    btnAdd.style.cssText = btnStyle;
    
    btnPin = document.createElement('button');
    btnPin.classList.add('btnPin');
    btnPin.textContent = 'Скрыть пин со страницы';
    btnPin.style.cssText = btnStyle;

    btnPin.addEventListener('click', () => {
        for (let i = 0; i < newImages.length; i++) {
            newImages = newImages.filter((item) => {
                if(item.image !== obj.image){
                    imageOut.addEventListener('click', (event) => {
                        if (event.target.className != 'btnPin') return;
                        let pane = event.target.closest('.wrapper');
                        pane.style.opacity = '0.9';
                        let hoverPin = document.createElement('div');
                        hoverPin.classList.add('hoverPin');
                        hoverPin.innerHTML = 'Вы больше не увидите этот пин'
                        pane.append(hoverPin)
                    });
                    return item;
                }
            })
        }
        localStorage.setItem('gallery', JSON.stringify(newImages));
    });
    

    btnComplaine = document.createElement('button');
    btnComplaine.classList.add('btnComplaine');
    btnComplaine.textContent = 'Пожаловаться';
    btnComplaine.style.cssText = btnStyle;

    const popoutComplain = document.querySelector(".popout_complain");
    const popoutContent = document.querySelector(".complain_content");
    const cancelBtn = document.querySelector(".cancelBtn");
    const nextBtn = document.querySelector(".nextBtn");


    btnComplaine.addEventListener('click', function modalComplain(){
        popoutComplain.style.display = "block";
    })

    cancelBtn.addEventListener('click', function closeComplain(){
        popoutComplain.style.display = "none";
    })

    // function modalComplain (){
    //     popoutComplain.style.display = "block";
    // }

    
    
    imgContainer.append(img);
    about.append(avatar, info);
    imgContainer.append(hoverMenu);
    hoverMenu.append(btnAdd, btnPin, btnComplaine);
   
}

function createMainWrapper() {
    wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    
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
    wrapper.append(imgContainer, about);
    
}

//подключение masonry
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












    





    

//подключение masonry
$(document).ready(function() {
    let container = $(".imageOut");
    container.imagesLoaded(function() {
        container.masonry({
            itemSelector: ".wrapper",
            columnWidth: ".sizer",
        });
    });
});


 let btAdd = document.querySelectorAll('.btnAdd');
 btAdd.forEach(function(btnAdd) {
    btnAdd.addEventListener('click', (event) => {
        if (event.target.className != 'btnAdd') return;
        let pane = event.target.closest('.wrapper');
        pane.style.opacity = '0.5';

        let hoverAdd = document.createElement('div');
        hoverAdd.classList.add('hoverAdd')
        hoverAdd.style.cssText = hoverAdd;

        let btnAddDesk = document.createElement('button');
        btnAddDesk.classList.add('btnAddDesk');
        btnAddDesk.style.cssText = btnAddDesk;
        btnAddDesk.innerHTML = '+'
        
        let title = document.createElement('h3');
        title.classList.add('title');
        title.style.cssText = title;
        title.innerHTML = 'Создать доску';

        hoverAdd.append(btnAddDesk,title)
        imageOut.append(hoverAdd);

        btnAddDesk.addEventListener('click', () => {
            let addContainer = document.createElement('div');
            addContainer.classList.add('addContainer');
            addContainer.style.cssText = addContainer;
            imageOut.append(addContainer)
        })
        });
 })

