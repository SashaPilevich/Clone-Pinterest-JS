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
    let imgContainer = document.createElement('div');
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
    imgContainer.append(img)
    about.append(avatar, info) 
}


$('.imageOut').masonry({
    itemSelector: '.wrapper',
});









