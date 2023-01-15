import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const picturesAll = document.querySelector('.gallery')

const createNewGallery = (elements) => {
    return elements.map(({preview, original, description}) => {
        const newDiv = 
        `<div>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`;
        picturesAll.insertAdjacentHTML(`afterbegin`, newDiv);
    })
}
createNewGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay:250})