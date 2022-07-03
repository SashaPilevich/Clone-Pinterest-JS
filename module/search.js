import { helper, imageOut, currentImg } from "./app.js"
import { newImages, setImages } from "./newImagesArray.js";
import { setPinterest, getPinterest } from "./localStorage.js";
import { btnSaveStyle, btnStyle, helperStyle, imageStyle } from "./styleElement.js";
import { modal, openModal, closeModal } from "./modalAdd.js";
import { contents } from "./saveInLocalStorageNewDesk.js";

export let searchId;
searchId = document.getElementById('searchId');

searchId.addEventListener('keyup', (e) => {
const valueSearch = e.target.value.toLowerCase();
if (imageOut.innerHTML && valueSearch) { //проверка на присутствие фото на главной странице и на ввод в поиске
    getPinterest();//берем данные из local storage
    helper.innerHTML = ''; // чтобы картиночки стирались при поиске новых
            newImages.filter((item) => {
                if(valueSearch === (item.hashtag).toLowerCase().replace('#','')) {//сравниваем то что введено в поиск и хештегом каждого объекта
                //и если есть совпадения то рисуем это на UI
                // helper.style.cssText = helperStyle;
                imageOut.classList.remove('activeMain');//скрываем главную страницу
                let searchWrapper = document.createElement('div');//создаем новый контейнер общий для всех найденных фото

                let imageContainer = document.createElement('div');// создаем контейнер в котором будет храниться каждая отдельная картинка
                imageContainer.classList.add('imageContainer');

                let searchHover = document.createElement('div');//меню которое появляется при наведении
                searchHover.classList.add('searchHover');

                let linkSearch = document.createElement('button');//кнопка для скачивания картинки
                linkSearch.classList.add('linkSearch');
                // linkSearch.style.cssText = btnStyle;
                linkSearch.style.marginBottom = '30px'
                linkSearch.innerHTML = 'Сохранить пин'
                searchHover.append(linkSearch);

                let btnAddDesk = document.createElement('button');//кнопка для добавления картинки на доску
                btnAddDesk.classList.add('btnAddDesk')
                btnAddDesk.innerHTML = 'Добавить на доску';
                btnAddDesk.name = item.name;
                // btnAddDesk.style.cssText = btnStyle;

                btnAddDesk.addEventListener('click', (event) => {
                    const imageWrapper = document.querySelector('.imageWrapper');
                    imageWrapper.innerHTML = '';
                    if (event.target.closest('.imageContainer')){ 
                    currentImg.src = event.target.name;
                    currentImg.style.cssText = imageStyle;
                    imageWrapper.append(currentImg);  
                }
                modal();
                openModal();
                })

                let searchImage = document.createElement('img');//создаем картинку с такими же данными что из совпадения по поиску
                searchImage.classList.add('searchImage');
                searchImage.src = item.name;
                // searchImage.style.cssText = imageStyle;
                searchImage.style.marginRight = '30px';

                //скачивание картинки//изучить про объект blob
                function saveImg(blob) {
                let link = document.createElement('a');
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', `${Date.now()}`);
                link.click();
                }
          
                linkSearch.addEventListener('click', () => {
                fetch(searchImage.src)
                .then((response_object) => response_object.blob())
                .then((blob_object) => saveImg(blob_object));
                });
    

                searchWrapper.append(imageContainer);  
                imageContainer.append(searchHover, searchImage);
                searchHover.append(btnAddDesk)
                helper.append(searchWrapper);
                searchId.value = ''
                } 
            });  
} 
});
//для того чтобы при нажатии на главную страницу исчезало то что нашлось по хештегу
export const btnMain = document.getElementById(10);
btnMain.addEventListener('click', () => {
    // imageOut.classList.remove('active')
    imageOut.classList.add('activeMain');
    helper.innerHTML = ''
});
