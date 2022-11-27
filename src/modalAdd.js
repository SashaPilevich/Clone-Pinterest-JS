import { btnOne, btnTwo, btnThree } from "./eventAddDesk.js";
import { btnCreateDesk } from "./createNewDesk.js";

const modalElement = document.querySelector(".modal");
export function modal() {
  modalElement.addEventListener("click", (e) => {
    if (
      e.target === modalElement ||
      e.target.getAttribute("data-close") == ""
    ) {
      closeModal();
    }
  });
}

export function openModal() {
  modalElement.classList.add("show");
  modalElement.classList.remove("hide");
  document.body.style.overflow = "hidden";
}
export function closeModal() {
  modalElement.classList.add("hide");
  modalElement.classList.remove("show");
  document.body.style.overflow = "";
}
