export {iziWarning, iziError, lightbox, loader};
import { handleForm } from "./js/pixabay-api.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.searchImg');

const iziWarning = () => iziToast.show({
    message: "Input is empty!",
    position: "topRight",
    icon: 'ico-warning',
    backgroundColor: "orangered",
    messageSize: "16",
    messageColor: "#fff",
    theme: "dark",
    maxWidth: "432px",
});
const iziError = () => iziToast.show({
    message: "Sorry, there are no images matching your search query. Please try again!",
    position: "topRight",
    backgroundColor: "#EF4040",
    messageSize: "16",
    messageColor: "#fff",
    theme: "dark",
    maxWidth: "350px",
    iconUrl: "./img/x.svg"
});

form.addEventListener('submit', handleForm);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

const loader = () => document.querySelector("span").classList.toggle("loader");



