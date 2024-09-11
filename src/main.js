import * as api from "./js/pixabay-api.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

api.form.addEventListener('submit', api.handleForm);

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
gallery.on('show.simplelightbox');
