import { galleryItems } from './gallery-items.js';

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

galleryContainer.addEventListener('click', (event) => {
  
  const ImgUrlOriginal = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${ImgUrlOriginal}" width="800" height="600">
`)
   instance.show();
}

 