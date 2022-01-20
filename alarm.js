
const alarmsub=document.getElementById("setalarm")

var audio = new Audio('audio.mp3');
function play() {
    audio.play();
  }


alarmsub.addEventListener("click",alarmset)
function alarmset(e) {
    e.preventDefault();
    console.log("set alarm....")
    const alarm=document.getElementById("alarm")
    alarmdate=new Date(alarm.value)
    newa=new Date()
  console.log(alarmdate-newa)

  settoalarm=alarmdate-newa;
  if(settoalarm>=0){
      setTimeout(() => {
         play(); 
         let html=`riniging... current time is ${newa}`
      document.getElementById("alarm help").innerHTML=html;
      }, settoalarm);
      
  }
    // console.log(`alarm setting time is ${alarmdate}`)
  
   
    
}