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

 
 