import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = itemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup)

function itemMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    }).join("")
}


const instance = basicLightbox.create(`
    <div class="modal"></div>
`)
const instanceDiv = document.querySelector('modal')


galleryContainer.addEventListener('click', (event) => {
    event.preventDefault()
    
    const currentUrl = event.target.dataset.source;
    console.log(currentUrl)
    instance.show();
    
    function lightboxImage(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    }).join("")
}
})



