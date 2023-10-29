import { formEl, cardListEl } from "./refs";
import { serviceWriteData, getData, deleteData } from "./api";
import { createCard } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onFormInput);
window.addEventListener("load", onLoad);
cardListEl.addEventListener("click", onClickDeleteButton);

function onFormInput(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  e.target.reset();
  data.createdAt = Date.now();
  serviceWriteData(data)
    .then((data) => {
      const markup = createCard([data]);
      addMarkup(markup);
    })
    .catch(console.log);
}

function onLoad() {
  getData()
    .then((data) => {
      const markup = createCard(data);
      addMarkup(markup);
    })
    .catch();
}

function addMarkup(markup) {
  cardListEl.insertAdjacentHTML("beforeend", markup);
}

function onClickDeleteButton(e) {
  if (!e.target.classList.contains("btn-close")) return;
  // todo запитати, наскільки потрібно плодити змінних
  const card = e.target.closest(".js-wrap-card");
  const id = card.dataset.cardid;
  console.log(id);
  deleteData(id)
    .then(() => {
      card.remove();
    })
    .catch(console.log);
}
