import { render } from "./render-functions.js";
import { iziWarning, iziError, lightbox, loader} from "../main.js";

const API_KEY = "45921559-66c2b9b15ee0f1bc0f2b1e46c";
const Url = "https://pixabay.com/api/";

export function handleForm(event) {

    event.preventDefault();
    const searchText = event.currentTarget.elements.searchText.value;
    if (!searchText) return iziWarning();
    const options = new URLSearchParams({
        key: API_KEY,
        q: searchText,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    loader();
    fetch(`${Url}?${options}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.hits);
            if (!json.hits.length) return iziError();
            render(json.hits);
            lightbox.refresh();
        }).catch(e => console.log(e)).finally(() => loader());
    event.currentTarget.reset();
}