import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
 const imgMarkUp = renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkUp);

galleryContainer.addEventListener("click", onClick);

function renderGallery(items) {
  return items
    .map(({preview,original,description}) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join(' ');
}


function onClick(event) {
    event.preventDefault()
    const image = event.currentTarget;
  if (event.target === image) {
      return
    }
}
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom' });
