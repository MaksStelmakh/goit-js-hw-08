// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';


const onGallery = document.querySelector(`div.gallery`)
const imagesMarkup = createImgCards(galleryItems)
onGallery.insertAdjacentHTML(`beforeend`, imagesMarkup)

function createImgCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>
 </div>
`}).join(``)
}

onGallery.addEventListener(`click`, onOpenGalleryClick)

function onOpenGalleryClick(evt) {
    evt.preventDefault()
    const isGalleryImageEl = evt.target.classList.contains(`gallery__item`)
    if (!isGalleryImageEl) {
        return
    }
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
})