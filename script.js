   // for nav bar js
   const p=document.querySelector(".hambutton");
   const q=document.querySelector(".menubarsec");
   const q1=document.querySelector(".close1");

   p.addEventListener("click",()=>{
     if(q.classList.contains("active")){
       q.classList.remove("active");
       q.style.transition='.7s';

     }else{
       q.classList.add("active");
     }
 
   })
   q1.addEventListener("click",()=>{
   
      q.classList.remove("active");
      q.style.transition='.7s';



  })