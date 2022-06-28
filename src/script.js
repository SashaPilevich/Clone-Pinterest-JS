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
//Элементы из модального окна "добавить на доску"
const modalElement = document.querySelector('.modal');
const imageWrapper = document.querySelector('.imageWrapper');

//Кнопки из модального окна "добавить на доску"
const btnOne = document.querySelector('.tab-btn-one');
const btnTwo = document.querySelector('.tab-btn-two');
const btnThree = document.querySelector('.tab-btn-three');

//Функция модального окна "добавить на доску"
function modal() {
    modalElement.addEventListener('click', (e) => {
    if (
    e.target === modalElement ||
    e.target.getAttribute('data-close') == ''
    ) {
    closeModal();
    }
    });
    }
    
    function openModal() {
    modalElement.classList.add('show');
    modalElement.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    }
    function closeModal() {
    modalElement.classList.add('hide');
    modalElement.classList.remove('show');
    document.body.style.overflow = '';
    }

//Контейнеры которые появляются при переключении досок
const deskOne = document.getElementById(1);
const deskTwo = document.getElementById(2);
const deskThree = document.getElementById(3);

//Массив и local storage для доски 1
let arrDeskOne = [];
if (localStorage.getItem('deskOne')) {
    arrDeskOne = JSON.parse(localStorage.getItem('deskOne'));
    arrDeskOne.forEach((item) => {
        createDeskOne(item)
    });
}
//Массив и local storage для доски 2
let arrDeskTwo = [];
if (localStorage.getItem('deskTwo')) {
    arrDeskTwo = JSON.parse(localStorage.getItem('deskTwo'));
    arrDeskTwo.forEach((item) => {
        createDeskTwo(item)
    });
} 
//Массив и local storage для доски 3
let arrDeskThree = [];
if (localStorage.getItem('deskThree')) {
    arrDeskThree = JSON.parse(localStorage.getItem('deskThree'));
    arrDeskThree.forEach((item) => {
        createDeskThree(item)
    });
}

//Функция для отображения элементов добавленных на доску 1
function createDeskOne(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = `
    object-fit: cover;
    width:100%;
    height: auto;
    border-radius:20px;
    `;
    deskOne.append(imageOnDesk)
}

//Функция для отображения элементов добавленных на доску 2
function createDeskTwo(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = `
    object-fit: cover;
    width:100%;
    height: auto;
    border-radius:20px;
    `;
    deskTwo.append(imageOnDesk)
}

//Функция для отображения элементов добавленных на доску 3
function createDeskThree(obj) {
    let imageOnDesk = document.createElement('img');
    imageOnDesk.src = obj.src;
    imageOnDesk.style.cssText = `
    object-fit: cover;
    width:100%;
    height: auto;
    border-radius:20px;
    `;
    deskThree.append(imageOnDesk)
}
//Добавление фото на доску 1
btnOne.addEventListener('click', () => {
    let imgDeskOne = {};
    imgDeskOne.src = currentImg.src;
    arrDeskOne.push(imgDeskOne);
    createDeskOne(imgDeskOne)
    localStorage.setItem('deskOne', JSON.stringify(arrDeskOne));
    closeModal()
})
//Добавление фото на доску 2
btnTwo.addEventListener('click', () => {
    let imgDeskTwo = {};
    imgDeskTwo.src = currentImg.src;
    arrDeskTwo.push(imgDeskTwo);
    createDeskTwo(imgDeskTwo)
    localStorage.setItem('deskTwo', JSON.stringify(arrDeskTwo));
    closeModal()
})
//Добавление фото на доску 3
btnThree.addEventListener('click', () => {
    let imgDeskThree = {};
    imgDeskThree.src = currentImg.src;
    arrDeskThree.push(imgDeskThree);
    createDeskThree(imgDeskThree)
    localStorage.setItem('deskThree', JSON.stringify(arrDeskThree));
    closeModal()
})

//Массив и сохранение в local storage главной страницы
let newImages = [];
if (localStorage.getItem('gallery')) {
    newImages = JSON.parse(localStorage.getItem('gallery'));
    newImages.forEach((item) => {
        createPinterest(item)
    });
} else {
    createElement();
}

//Функция получения всех данных с Mockapi

async function getPinterest() {
    const response = await fetch(`${URL_API}/pinterest`);
    const pinterest = await response.json();
    return pinterest;
}
function createElement() {
    getPinterest().then((pinterest) => {
        pinterest.forEach(({id, name, avatar, description, hashtag}) => {
            let gallery = {};
            gallery.id = id;
            gallery.name = name;
            gallery.description = description;
            gallery.avatar = avatar;
            gallery.hashtag = hashtag;
            newImages.push(gallery);
            createPinterest(gallery); 
            localStorage.setItem('gallery', JSON.stringify(newImages));
            });
    })
}



//Функция создания всех элементов на главной странице
function createPinterest(obj) {
    wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.setAttribute('data-key', obj.name);
    wrapper.name = obj.name;

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
    img.src = obj.name;
    img.id = obj.id;
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

    $(document).ready(function() {
        let container = $(".imageOut");
        container.imagesLoaded(function() {
            container.masonry({
                itemSelector: ".wrapper",
                columnWidth: ".sizer",
            });
        });
    });

    hoverMenu = document.createElement('div');
    hoverMenu.classList.add('hoverMenu');

    const btnStyle = `
    width:60%;
    height:15%;
    border-radius: 20px;
    color: white;
    font-family: Open sans, 'sans-serif';
    font-size: 10px;
    background-color:brown;
    cursor:pointer;
    border: none;
    text-align:center;
    padding: 15px;
    `;

    //чтобы можно было скачать картинку
    let link = document.createElement('a');
    link.classList.add('link');
    link.style.cssText = btnStyle;
    link.download = obj.name;
    link.href = obj.name;
    link.innerHTML = 'Сохранить пин'
    hoverMenu.append(link)


    btnAdd = document.createElement('button');
    btnAdd.classList.add('btnAdd');
    btnAdd.name = obj.name;
    btnAdd.textContent = 'Добавить на доску';
    btnAdd.style.cssText = btnStyle;

    btnAdd.addEventListener('click', (event) => {
        imageWrapper.innerHTML = '';//для того чтобы при повторном открытии модального окна не тянулась картинка с прошлого открытия
        
        if (event.target.closest('.wrapper')){
                currentImg = document.createElement('img');
                currentImg.src = event.target.name;
                currentImg.style.cssText = `
                object-fit: cover;
                width:100%;
                height: auto;
                border-radius:20px;`;
                imageWrapper.append(currentImg);  
        }
                modal();
                openModal();    
        })
    

    //Подключение "скрыть пин"
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
    
    //Подключение модального окна "пожаловаться"
    btnComplaine = document.createElement('button');
    btnComplaine.classList.add('btnComplaine');
    btnComplaine.textContent = 'Пожаловаться';
    btnComplaine.style.cssText = btnStyle;

    const popoutComplain = document.querySelector(".popout_complain");
    const popoutContent = document.querySelector(".complain_content");
    const cancelBtn = document.querySelector(".cancelBtn");
    const nextBtn = document.querySelector(".nextBtn");
    const nextModal = document.querySelector(".next_modal");
    const nextModalClose = document.querySelector(".next_modal__close");


    btnComplaine.addEventListener('click', function modalComplain(){
        popoutComplain.style.display = "block";
        nextBtn.addEventListener('click', () => {
            newImages = newImages.filter((item) => {
                if(item.name !== obj.name){//тут по условию мы сравниваем наш объект из localStorage(item) с объектом который на UI(obj),и если они не равны,то возвращаем в localStorage все item которые не такие как картинка по которой произошел click
                    return item;
                }
            })
        localStorage.setItem('gallery', JSON.stringify(newImages));
        })
    })

    cancelBtn.addEventListener('click', function closeComplain(){
        popoutComplain.style.display = "none";
    })

    document.addEventListener('keydown', (e) => {
       if(e.keyCode === 27){
              popoutComplain.style.display = "none";
              nextModal.style.display = "none";
          }
        });

    //    второе модальное

    nextBtn.addEventListener('click', function openSecondModal(){
        nextModal.style.display = "block";
        popoutComplain.style.display = "none";

    })
    
    nextModalClose.addEventListener('click', function closeSecondModal(){
        nextModal.style.display = "none";

    })

    sizer.append(wrapper);
    wrapper.append(imgContainer, about);
    imgContainer.append(hoverMenu,img);
    about.append(avatar, info);
    hoverMenu.append(btnAdd, btnPin, btnComplaine); 

    
}

    
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
        helper.innerHTML = '';
    }
});

//search
let searchImage;
let searchWrapper;
const helper = document.querySelector('.helper')//контейнер в который складываются фото выбранные по хештегу
const searchId = document.getElementById('searchId');

searchId.addEventListener('keyup', (e) => {
const valueSearch = e.target.value.toLowerCase();
if (imageOut.innerHTML && valueSearch) { //проверка на присутствие фото на главной странице и на ввод в поиске
    newImages = JSON.parse(localStorage.getItem('gallery'));//берем данные из local storage
    helper.innerHTML = ''; // чтобы картиночки стирались при поиске новых
            newImages.filter((item) => {
                if(valueSearch === (item.hashtag).toLowerCase().replace('#','')) {//сравниваем то что введено в поиск и хештегом каждого объекта
                //и если есть совпадения то рисуем это на UI
                helper.style.cssText = `
                display: grid;
                grid-template-columns:repeat(5, 1fr);
                column-gap: 30px;
                `
                imageOut.classList.remove('active');//скрываем главную страницу
                searchWrapper = document.createElement('div');//создаем новый контейнер
                searchImage = document.createElement('img');//создаем картинку с такими же данными что из совпадения по поиску
                searchImage.src = item.name;
                searchImage.style.cssText = `
                object-fit: cover;
                width:100%;
                height: auto;
                border-radius:20px;
                margin-right:30px;
                `
                searchWrapper.append(searchImage);  
                helper.append(searchWrapper);
                searchId.value = ''
                } 
            });  
} 
});
//для того чтобы при нажатии на главную страницу исчезало то что нашлось по хештегу
const btnMain = document.getElementById(10);
btnMain.addEventListener('click', () => {
    imageOut.classList.add('active');
    helper.innerHTML = ''
});


//подключение masonry
// $(document).ready(function() {
//     let container = $(".imageOut");
//     container.imagesLoaded(function() {
//         container.masonry({
//             itemSelector: ".wrapper",
//             columnWidth: ".sizer",
//         });
//     });
// });