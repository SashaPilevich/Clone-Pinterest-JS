export const popoutComplain = document.querySelector(".popout_complain");
export const nextBtn = document.querySelector(".nextBtn");

const popoutContent = document.querySelector(".complain_content");
const cancelBtn = document.querySelector(".cancelBtn");
const nextModal = document.querySelector(".next_modal");
const nextModalClose = document.querySelector(".next_modal__close");

cancelBtn.addEventListener('click', function closeComplain(){
    popoutComplain.style.display = "none";
})

document.addEventListener('keydown', (e) => {
   if(e.keyCode === 27){
          popoutComplain.style.display = "none";
          nextModal.style.display = "none";
      }
    });

nextBtn.addEventListener('click', function openSecondModal(){
    nextModal.style.display = "block";
    popoutComplain.style.display = "none";
})

nextModalClose.addEventListener('click', function closeSecondModal(){
    nextModal.style.display = "none";
})