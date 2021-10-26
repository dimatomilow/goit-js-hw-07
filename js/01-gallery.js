import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
 const imgMarkUp = renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkUp);

galleryContainer.addEventListener("click", onClickModal);




function renderGallery(items) {
  return items
    .map(({preview,original,description}) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href=" ">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
             </a>
        </div>`;
    })
    .join(' ');
}


  function onClickModal(event) {
    event.preventDefault()


    const image = event.target.dataset.source;

    if (!image) {
      return
    }


    const instance = basicLightbox.create(`
      <img src="${image}" width="800" height="600">
  `
    )
  instance.show()

    console.log(event.target)

}


