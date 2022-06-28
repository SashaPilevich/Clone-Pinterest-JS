//модальное окно пожаловаться
export const popoutComplain = document.querySelector(".popout_complain");
export const popoutContent = document.querySelector(".complain_content");
export const cancelBtn = document.querySelector(".cancelBtn");
export const nextBtn = document.querySelector(".nextBtn");
export const nextModal = document.querySelector(".next_modal");
export const nextModalClose = document.querySelector(".next_modal__close");

cancelBtn.addEventListener('click', function closeComplain(){
    popoutComplain.style.display = "none";
})

document.addEventListener('keydown', (e) => {
   if(e.keyCode === 27){
          popoutComplain.style.display = "none";
          nextModal.style.display = "none";
      }
    });

//    второе модальное

nextBtn.addEventListener('click', function openSecondModal(){
    nextModal.style.display = "block";
    popoutComplain.style.display = "none";

})

nextModalClose.addEventListener('click', function closeSecondModal(){
    nextModal.style.display = "none";
})