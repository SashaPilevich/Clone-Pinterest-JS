const root = document.querySelector('#root');
const imageOut = document.querySelector('.imageOut');

for (let key in images) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.style.cssText = `
    width:17%;
    height: auto;
    margin:1.5%;
    `;

    let hoverMenu = document.createElement('div');
    hoverMenu.classList.add('hoverMenu');

    const btnStyle = `
    width:150px;
    height:50px;
    border-radius: 40px;
    color: white;
    font-family: Open sans, 'sans-serif';
    font-size: 14px;
    background-color:brown;
    cursor:pointer;
    border: none;`;

    let btnAdd = document.createElement('button');
    btnAdd.innerHTML = 'Добавить на доску';
    btnAdd.style.cssText = btnStyle;
    

    let btnPin = document.createElement('button');
    btnPin.innerHTML = 'Скрыть пин со страницы';
    btnPin.style.cssText = btnStyle;

    let btnComplaine = document.createElement('button');
    btnComplaine.innerHTML = 'Пожаловаться';
    btnComplaine.style.cssText = btnStyle;

    hoverMenu.append(btnAdd, btnPin, btnComplaine) 

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    let img = document.createElement('img');
    img.classList.add('image');
    img.setAttribute('data-key', key);
    img.src = 'images/'+key+'.jpg';
    img.style.cssText = `
    object-fit: cover;
    width:100%;
    height: auto;
    border-radius:20px;
    `;
    
    let about = document.createElement('div');
    about.classList.add('about')
    about.style.cssText = `
    display: flex;
    align-items:center;
    color: black;
    font-family: 'Raleway', 'sans-serif';
    font-weight: normal;
    font-size:16px;
    `;

    let avatar = document.createElement('img');
    avatar.setAttribute('data-key',images[key]['avatar'] );
    avatar.src = 'avatar/'+images[key]['avatar']+'.jpg';
    avatar.style.cssText = `
    margin-right: 10px;
    width: 50px;
    height:50px;
    border-radius: 50%;
    `;

    let info = document.createElement('h5');
    info.textContent = images[key]['description'];
    
    imageOut.append(wrapper);
    wrapper.append(imgContainer, about);
    imgContainer.append(img,hoverMenu);
    about.append(avatar, info) 
}

$(document).ready(function() {
    let container = $(".imageOut");
    container.imagesLoaded(function() {
        container.masonry({
            columnWidth: ".wrapper",
            itemSelector: ".wrapper"
        });
    });
});









