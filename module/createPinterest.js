import { modal, openModal, closeModal } from "./modalAdd.js";
import { popoutComplain, nextBtn} from "./modalComplaine.js";
import { currentImg } from "./app.js";
import { newImages, setImages } from "./newImagesArray.js";
import { imageOut } from "./app.js";
import { sizer } from "./app.js";
import { setPinterest, getPinterest } from "./localStorage.js";
import { aboutStyle, avatarStyle, btnStyle, imageStyle } from "./styleElement.js";

export function createPinterest(obj) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.setAttribute('data-key', obj.name);
    wrapper.id = obj.id;

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');

    let about = document.createElement('div');
    about.classList.add('about')
    about.style.cssText = aboutStyle;
    
    let img = document.createElement('img');
    img.classList.add('image');
    img.setAttribute('data-key', obj.name);
    img.src = obj.name;
    img.id = obj.id;
    img.style.cssText = imageStyle;

    let avatar = document.createElement('img');
    avatar.setAttribute('data-key',obj.avatar );
    avatar.classList.add('bkgImage');
    avatar.src = obj.avatar;
    avatar.style.cssText = avatarStyle;

    let info = document.createElement('h5');
    info.textContent = obj.description;

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

    let hoverMenu = document.createElement('div');
    hoverMenu.classList.add('hoverMenu');

    let linkSave = document.createElement('button');
    linkSave.classList.add('link');
    linkSave.style.cssText = btnStyle;
    linkSave.innerHTML = 'Сохранить пин';
    hoverMenu.append(linkSave)

    //скачивание картинки//изучить про объект blob
    function saveImg(blob) {
        let link = document.createElement('a');
        link.setAttribute('href', URL.createObjectURL(blob));
        link.setAttribute('download', `${Date.now()}`);
        link.click();
    }
      
    linkSave.addEventListener('click', () => {
        fetch(img.src)
          .then((response_object) => response_object.blob())
          .then((blob_object) => saveImg(blob_object));
    });
    

    let btnAdd = document.createElement('button');
    btnAdd.classList.add('btnAdd');
    btnAdd.id = obj.id;
    btnAdd.name = obj.name;
    btnAdd.textContent = 'Добавить на доску';
    btnAdd.style.cssText = btnStyle;

    btnAdd.addEventListener('click', (event) => {
        const imageWrapper = document.querySelector('.imageWrapper');
        imageWrapper.innerHTML = '';//для того чтобы при повторном открытии модального окна не тянулась картинка с прошлого открытия
        
        if (event.target.closest('.wrapper')){ 
                currentImg.src = event.target.name;
                currentImg.style.cssText = imageStyle;
                imageWrapper.append(currentImg);  
        }
                modal();
                openModal();    
    })
    
    //Подключение "скрыть пин"
    let btnPin = document.createElement('button');
    btnPin.classList.add('btnPin');
    btnPin.textContent = 'Скрыть пин';
    btnPin.style.cssText = btnStyle;

    btnPin.addEventListener('click', () => {
        for (let i = 0; i < newImages.length; i++) {
            setImages(newImages.filter((item) => {
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
            }))
        }
        setPinterest(newImages);
    });
    
    //Подключение модального окна "пожаловаться"
    let btnComplaine = document.createElement('button');
    btnComplaine.classList.add('btnComplaine');
    btnComplaine.textContent = 'Пожаловаться';
    btnComplaine.style.cssText = btnStyle;

    btnComplaine.addEventListener('click', function modalComplain(){
        popoutComplain.style.display = "block";
        nextBtn.addEventListener('click', () => {
            setImages(newImages.filter((item) => {
                if(item.name !== obj.name){//тут по условию мы сравниваем наш объект из localStorage(item) с объектом который на UI(obj),и если они не равны,то возвращаем в localStorage все item которые не такие как картинка по которой произошел click
                    return item;
                }
            }))
        setPinterest(newImages);
        })
    })

    sizer.append(wrapper);
    wrapper.append(imgContainer, about);
    imgContainer.append(hoverMenu, img);
    about.append(avatar, info);
    hoverMenu.append(btnAdd, btnPin, btnComplaine);
}