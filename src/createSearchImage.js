import { helper, imageOut, currentImg } from "./app.js"
import { imageStyle } from "./styleElement.js";
import { modal, openModal, closeModal } from "./modalAdd.js";
import { imageWrapper } from "./createPinterest.js";

export function createSearchImage(obj) {
    imageOut.classList.remove('activeMain');
    let searchWrapper = document.createElement('div');
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');

    let searchHover = document.createElement('div');
    searchHover.classList.add('searchHover');

    let linkSearch = document.createElement('button');
    linkSearch.classList.add('linkSearch');
    linkSearch.style.marginBottom = '30px'
    linkSearch.innerHTML = 'Сохранить пин'
    searchHover.append(linkSearch);

    let btnAddDesk = document.createElement('button');
    btnAddDesk.classList.add('btnAddDesk')
    btnAddDesk.innerHTML = 'Добавить на доску';
    btnAddDesk.name = obj.name;

    btnAddDesk.addEventListener('click', (event) => {
        imageWrapper.innerHTML = '';
        if (event.target.closest('.imageContainer')){ 
        currentImg.src = event.target.name;
        currentImg.style.cssText = imageStyle;
        imageWrapper.append(currentImg);  
    }
    modal();
    openModal();
    })

    let searchImage = document.createElement('img');
    searchImage.classList.add('searchImage');
    searchImage.src = obj.name;
    searchImage.style.marginRight = '30px';

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
    searchHover.append(btnAddDesk);
    helper.append(searchWrapper);
    searchId.value = '';
                
    } 
