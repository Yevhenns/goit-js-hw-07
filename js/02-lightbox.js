import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(
    galleryItems
);

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
        <div class="gallery__item">
          <a class="gallery__item" href="large-image.jpg">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </div>`;
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
