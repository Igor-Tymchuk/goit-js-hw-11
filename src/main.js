import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.searchImg');
const handleForm = event => {
    event.preventDefault();
    const searchText = event.currentTarget.elements.searchText.value;
    if(!searchText) return iziToast.warning({
        message: "Input is empty!",
        position: "topRight",
    })
}
form.addEventListener('submit', handleForm)

