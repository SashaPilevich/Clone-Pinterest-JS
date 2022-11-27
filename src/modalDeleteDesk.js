const modalElementDeleteDesk = document.querySelector(".modalDeleteDesk");
export function modalDeleteDesk() {
  modalElementDeleteDesk.addEventListener("click", (e) => {
    if (
      e.target === modalElementDeleteDesk ||
      e.target.getAttribute("data-close") == ""
    ) {
      closeModalDeleteDesk();
    }
  });
}
export function openModalDeleteDesk() {
  modalElementDeleteDesk.classList.add("show");
  modalElementDeleteDesk.classList.remove("hide");
  document.body.style.overflow = "hidden";
}
export function closeModalDeleteDesk() {
  console.log("i close");
  modalElementDeleteDesk.classList.add("hide");
  modalElementDeleteDesk.classList.remove("show");
  document.body.style.overflow = "";
}
