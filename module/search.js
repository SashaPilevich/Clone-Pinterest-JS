import { helper } from "./app.js"
import { imageOut } from "./app.js"
import { newImages, setImages } from "./newImagesArray.js";
import { setPinterest, getPinterest } from "./localStorage.js";
import { helperStyle, imageStyle } from "./styleElement.js";
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
                helper.style.cssText = helperStyle;
                imageOut.classList.remove('active');//скрываем главную страницу
                let searchWrapper = document.createElement('div');//создаем новый контейнер
                let searchImage = document.createElement('img');//создаем картинку с такими же данными что из совпадения по поиску
                searchImage.src = item.name;
                searchImage.style.cssText = imageStyle;
                searchImage.style.marginRight = '30px'
                searchWrapper.append(searchImage);  
                helper.append(searchWrapper);
                searchId.value = ''
                } 
            });  
} 
});
//для того чтобы при нажатии на главную страницу исчезало то что нашлось по хештегу
export const btnMain = document.getElementById(10);
btnMain.addEventListener('click', () => {
    imageOut.classList.add('active');
    helper.innerHTML = ''
});
