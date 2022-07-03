export function getPinterest() {
    return localStorage.getItem('gallery');
}
export function setPinterest(array) {
    return localStorage.setItem('gallery', JSON.stringify(array));
}

export function getDeskOne() {
    return localStorage.getItem('deskOne');
}
export function setDeskOne(array) {
    return localStorage.setItem('deskOne', JSON.stringify(array));
}

export function getDeskTwo() {
    return localStorage.getItem('deskTwo');
}
export function setDeskTwo(array) {
    return localStorage.setItem('deskTwo', JSON.stringify(array));
}

export function getDeskThree() {
    return localStorage.getItem('deskThree');
}
export function setDeskThree(array) {
    return localStorage.setItem('deskThree', JSON.stringify(array));
}