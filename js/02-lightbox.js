import { galleryItems } from "./gallery-items.js";

const galleryContainer =
    document.querySelector(
        ".gallery"
    );
const galleryMarkup =
    itemMarkup(
        galleryItems
    );

galleryContainer.insertAdjacentHTML(
    "afterbegin",
    galleryMarkup
);

function itemMarkup(
    galleryItems
) {
    return galleryItems
        .map(
            ({
                preview,
                original,
                description,
            }) => {
                return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
            }
        )
        .join("");
}

function openImgModal(
    event
) {
    event.preventDefault();
    if (
        !event.target.classList.contains(
            "gallery__image"
        )
    ) {
        return;
    }

    var lightbox =
        new SimpleLightbox(
            ".gallery a",
            {
                captions: true,
                captionData:
                    "alt",
                captionDelay: 250,
                animationSpeed: 250,
                // captionPosition:
                //     "bottom",
            }
        );

    const ImgUrlOriginal =
        event.target
            .dataset
            .source;
    const instance =
        basicLightbox.create(`
  <img src="${ImgUrlOriginal}" width="800" height="600"/>
  `);
    instance.show();
}
galleryContainer.addEventListener(
    "click",
    openImgModal
);
