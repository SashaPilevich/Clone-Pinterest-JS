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

let newImages = [];

if (localStorage.getItem('gallery')) {
    newImages = JSON.parse(localStorage.getItem('gallery'));

    newImages.forEach((item) => {
        createPinterest(item)
    });
}
   
for (let key in images) {
    let gallery = {};
    gallery.name = key;
    gallery.description = images[key]['description'];
    gallery.avatar = images[key]['avatar'];
    gallery.visible = true;
    newImages.push(gallery);
    createPinterest(gallery); 
    localStorage.setItem('gallery', JSON.stringify(newImages));
}

function createPinterest(obj) {
    
    wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.visible = obj.visible;

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

    btnPin.addEventListener('click', () => {
        for (let i = 0; i < newImages.length; i++) {
            newImages = newImages.filter((item) => {
                if(item.name !== obj.name){
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

    img = document.createElement('img');
    img.classList.add('image');
    img.setAttribute('data-key', obj.name);
    img.src = 'images/'+obj.name+'.jpg';
    img.style.cssText = `
    object-fit: cover;
    width:100%;
    height: auto;
    border-radius:20px;
    `;

    avatar = document.createElement('img');
    avatar.setAttribute('data-key',obj.avatar );
    avatar.classList.add('bkgImage');
    avatar.src = 'avatar/'+obj.avatar+'.jpg';
    avatar.style.cssText = `
    margin-right: 10px;
    width: 20%;
    height:20%;
    border-radius: 50%;
    `;
    info = document.createElement('h5');
    info.textContent = obj.description;

    sizer.append(wrapper);
    wrapper.append(imgContainer,about);
    about.append(avatar,info);
    imgContainer.append(img, hoverMenu);
    hoverMenu.append(btnAdd, btnPin, btnComplaine)

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








