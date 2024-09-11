import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import * as render from "./render-functions.js";

export const API_KEY = "45921559-66c2b9b15ee0f1bc0f2b1e46c";
export const form = document.querySelector('.searchImg');
export const handleForm = event => {
    event.preventDefault();
    const searchText = event.currentTarget.elements.searchText.value;
    if(!searchText) return iziToast.warning({
        message: "Input is empty!",
        position: "topRight",
    });
    const options = new URLSearchParams({
    key: API_KEY,
    q: searchText,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
})
    fetch(`https://pixabay.com/api/?${options}`)
    .then(response => response.json())
    .then(json => {console.log(json.hits);
        if (!json.hits.length) return iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight",
        });
        const markup = render.markup(json.hits).join("");
        render.gallery.innerHTML = "";
        render.gallery.insertAdjacentHTML("beforeend", markup);
    });
    form.reset();
}