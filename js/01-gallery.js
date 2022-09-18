import { galleryItems } from './gallery-items.js';
// Change code below this line

const markUp = galleryItems.map(({preview, original, description}) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`).join('')
const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML('afterbegin', markUp)

gallery.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;
      } 
        const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`)
        instance.show()   
})
