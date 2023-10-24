var ampm=document.getElementById("ampm")
function add_zero(num){
    return num<10?"0"+num:num
  }
function clock(){
    var now=new Date()
    var hour=now.getHours()
    var min=add_zero(now.getMinutes())
    var sec=add_zero(now.getSeconds())
    if(hour>12){
        hour=hour-12
        ampm.innerHTML="PM"
    }
    else{
        ampm.innerHTML="AM"
    }
    document.getElementById("hours").innerHTML=hour
    document.getElementById("mins").innerHTML=min
    document.getElementById("sec").innerHTML=sec
}

setInterval(clock,100)