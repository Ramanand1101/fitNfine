

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
 let calculate=document.querySelector("#calculate")
 calculate.addEventListener("click",()=>{

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
 })
   
let logOut=document.querySelector(".Log-Out")
logOut.addEventListener("click",()=>{
  window.location.assign("index.html")
})


function Calo(){
  var h=document.getElementById("hi").value
  var w=document.getElementById("we").value
  var age=document.getElementById("age").value

  var calo=(10*w/1 +6.25 * h/1-5 * age/1 + 5);
  var calom=calo * 1.4;

  document.getElementById("resultcal").innerHTML="Your Daily Calories intake: "+calom;
  

  const proteins=calom*0.12;
  const carbs=calom*0.60;
  const fats=calom*0.27;
 
let data2=[proteins,carbs,fats];
const ctx=document.getElementById('myChart').getContext("2d");
let mychart=new Chart(ctx,{
  type:'doughnut',
  data:{
    labels:['Proteins','Carbs','Fats'],
    datasets:[
      {
        label:'# of Votes',
        data:data2,
        backgroundColor:['#3399ff','#ff5050','#009900'],
        borderwidth:1
      }
    ]
     
  }
});
}
let clear =document.querySelector(".btn-danger")
clear.addEventListener("click",myfun)
function myfun(){
  document.getElementById("resultcal").innerHTML=""

}

  