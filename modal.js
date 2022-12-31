const showModalBtn=document.querySelector(".show-modal");
const modal=document.querySelector(".modal");
const backDrope=document.querySelector(".backdrope");
const closeModalBtn=document.querySelector(".close-modal");



showModalBtn.addEventListener("click",()=>{
    modal.style.opacity="1";
    modal.style.transform="translateY(5vh)";
    backDrope.style.display="block";
    
});

  function closeModalFunction(){
    modal.style.opacity="0";
    modal.style.transform="translateY(-100vh)";
    backDrope.style.display="none";
  }
closeModalBtn.addEventListener("click",closeModalFunction);
backDrope.addEventListener("click",closeModalFunction);