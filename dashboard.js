let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  // following are the code to change sidebar button(optional)

 let listenbtn=document.querySelector(".listen")
 listenbtn.addEventListener("click",()=>{
  window.location.assign('https://cronometer.podbean.com/e/episode-8-the-mastering-diabetes-episode/?utm_source=email&utm_campaign=email_2022-11-30_diabetes-wrap');
 })
 document.querySelector("#calculate").addEventListener("click",myfun)
 function myfun(){
   let height=document.querySelector("#height").value
   let weight=document.querySelector("#weight").value
  
   let bmi=(weight/(height*height)).toFixed(1)
   document.querySelector("#bmi").textContent=bmi
  

   let status=document.querySelector("#status")
   if(bmi<18.5){
    status.innerText="UnderWeight"
    status.style.color="#00cc00"
   }
   else if(bmi >= 18.5 && bmi <= 24.9){
   status.innerText="Normal Weight"
   
   status.style.color="#3399ff"
 }
 else if(bmi >= 30){
   status.innerText="Obese"
   status.style.color="#ff8000"
 }
}
let logOut=document.querySelector(".Log-Out")
logOut.addEventListener("click",()=>{
  window.location.assign("index.html")
})
 