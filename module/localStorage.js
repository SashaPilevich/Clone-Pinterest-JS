export function getPinterest() {
    return localStorage.getItem('gallery');
}
export function setPinterest(array) {
    return localStorage.setItem('gallery', JSON.stringify(array));
}