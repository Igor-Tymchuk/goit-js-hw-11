import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const key = "45921559-66c2b9b15ee0f1bc0f2b1e46c";
const options = {
    key: key,
    q: null,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
}

const form = document.querySelector('.searchImg');
const handleForm = event => {
    event.preventDefault();
    const searchText = event.currentTarget.elements.searchText.value;
    if(!searchText) return iziToast.warning({
        message: "Input is empty!",
        position: "topRight",
    });
    options.q = searchText;
    fetch('https://pixabay.com/api/', options);
    
}
form.addEventListener('submit', handleForm)

