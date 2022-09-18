import { galleryItems } from './gallery-items.js';
// Change code below this line

const markUp = galleryItems.map(({preview, original, description}) => `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('')

const galleryEl = document.querySelector('.gallery')
galleryEl.insertAdjacentHTML('afterbegin', markUp)

galleryEl.addEventListener('click', event => {
    event.preventDefault()

    if (event.target.nodeName !== 'IMG') {
        return;
      } 
       const lightbox = 
       new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
       });  
      // lightbox.open()
})