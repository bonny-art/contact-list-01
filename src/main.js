import { formEl } from "./refs";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onFormInput);

function onFormInput(e) {
  e.preventDefault();
  //   const { name, number, email } = e.curentTarget.elements;
  //   console.log(name);
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  e.target.reset();
}
