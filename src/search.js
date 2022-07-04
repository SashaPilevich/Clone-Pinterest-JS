import { helper, imageOut} from "./app.js"
import { newImages, setImages } from "./newImagesArray.js";
import { setPinterest, getPinterest } from "./localStorage.js";
import { createSearchImage } from "./createSearchImage.js";
export let searchId;
searchId = document.getElementById('searchId');

searchId.addEventListener('keyup', (e) => {
const valueSearch = e.target.value.toLowerCase();
if (imageOut.innerHTML && valueSearch) {
    getPinterest();
    helper.innerHTML = ''; 
            newImages.filter((item) => {
                if(valueSearch === (item.hashtag).toLowerCase().replace('#','')) {
                    createSearchImage(item)
                }
            });  
} 
});

export const btnMain = document.getElementById(10);
btnMain.addEventListener('click', () => {
    imageOut.classList.add('activeMain');
    helper.innerHTML = ''
});
