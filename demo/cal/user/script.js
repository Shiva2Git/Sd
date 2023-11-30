


function getStartDayName(year, month) {
    const startDate = new Date(year, month - 1, 1)
    const dayOfWeek = startDate.getDay()
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const startDayName = daysOfWeek[dayOfWeek]
    return startDayName
  }

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  function formatDateToYYYYMM(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const formattedMonth = month < 10 ? `0${month}` : month.toString();
    return `${year}-${formattedMonth}`;
  }

  function formatDate(dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    
    const formattedDate = `${year}-${month}-${day}`
    
    return formattedDate
  }
  
  

document.addEventListener("DOMContentLoaded", function () {

  var currentDate = new Date();
  currentDate.setDate(1);
  const dayOfWeek = currentDate.getDay();
  const startDayName = daysOfWeek[dayOfWeek];
  currentDate.setMonth(currentDate.getMonth() + 1, 0);
  var prevMonth = new Date();
  prevMonth.setDate(0);
  prevMonthDays = prevMonth.getDate();
  const numberOfDays = currentDate.getDate();
  var count = 1;
  var all = document.querySelectorAll(".date");
  var ele_count = 1;
  var prev_count = prevMonthDays - daysOfWeek.indexOf(startDayName) + 1;
  dom=formatDateToYYYYMM(new Date(prevMonth))
  var dom1=formatDateToYYYYMM(new Date(currentDate))
  var DayString
  var color_cheak=false
  var colors
  all.forEach(function (elements) {

    elements.setAttribute('data-date',DayString=(dom+"-"+prev_count))
    var toDay_color= document.querySelector(`span.date[data-date="${DayString}"]`)
      toDay_color.style.color = colors='#A9A9A9'
     elements.innerHTML = prev_count++
    
    
    if (daysOfWeek.indexOf(startDayName) + 1 <= ele_count) {
      colors=color_cheak==true?"#008000":"#333"
      elements.setAttribute('data-date',DayString=(dom1+"-"+count))
      var toDay_color= document.querySelector(`span.date[data-date="${DayString}"]`)
      toDay_color.style.color = colors
      elements.innerHTML = count
      count += 1
    
      if (numberOfDays < count) {
        count = 1
        currentDate=currentDate.setMonth(currentDate.getMonth()+1)
        dom1=formatDateToYYYYMM(new Date(currentDate))
        color_cheak=true
      }
    }
    ele_count += 1
  })
  ele_count = 1
  
  var clickCount=0
  var prev_count=0


  document.getElementById("prev").addEventListener("click",function(){
    var Datevalue=document.querySelector("h1").textContent
    document.querySelector("h1").innerHTML=getPreviousMonth(Datevalue)
    var Datevalue=document.querySelector("h1").textContent
    month=new Date(Datevalue).getMonth()+1
    year=new Date(Datevalue).getFullYear() 
    fillCanlendar(month,year,Datevalue)  
  })



document.getElementById("next").addEventListener("click",function(){
var Datevalue=document.querySelector("h1").textContent
  
    document.querySelector("h1").innerHTML=getNextMonth(Datevalue)
    var Datevalue=document.querySelector("h1").textContent
    month=new Date(Datevalue).getMonth()+1
    year=new Date(Datevalue).getFullYear()
    // document.getElementById("next").disabled = false;
    fillCanlendar(month,year,Datevalue)
    clickCount++    
  })




  var toDay=formatDate(new Date())
  var toDay_color= document.querySelector(`span.date[data-date="${toDay}"]`)
  if(toDay_color){
    toDay_color.style.color = '#44a6e7'
  }

 var all_elements=document.querySelectorAll(".date") 
 all_elements.forEach(function(element){
  ajax_valid(element.getAttribute('data-date'))
  
 })  
})


function getDateFromUser() {
  var userDate = prompt("Please enter a date (YYYY-MM-DD):");
  
  if (userDate === null) {
    alert("Operation canceled.");
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(userDate)) {
    // alert("You entered the date: " + userDate);
    return userDate
  } 
  else{
    alert("invalid format")
  }
}






function getDaysInMonth(year, month) {
    const currentDate = new Date(year, month - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1, 0)
    const numberOfDays = currentDate.getDate()
    return numberOfDays
  }
  

  function isValidDate(year, month, day) {
    const inputDate = new Date(year, month - 1, day)
    return (
      inputDate.getFullYear() === year &&
      inputDate.getMonth() === month - 1 && 
      inputDate.getDate() === day
    )
  }
  


  



function fillCanlendar(month,year,dateString){
    // document.querySelector(".date").style.backgroundColor='white'
    var delete_span=document.querySelectorAll(".event")
    delete_span.forEach(function(span){
      span.remove()
    })
    var numberOfDays=getDaysInMonth(year,month) 
    var numberOfprev=getDaysInMonth(new Date(dateString).getFullYear(),new Date(dateString).getMonth())
    var startDayName=getStartDayName(year,month)
    var all=document.querySelectorAll(".date")
    var count=1
    var ele_count=1
    var prev_count=numberOfprev-daysOfWeek.indexOf(startDayName)+1
    var prevMonth=getPreviousMonth(dateString)
    var toDay=formatDate(new Date())
    var stringDate
    var colors
    var color_cheak=false
    all.forEach(function(elements){
      if(numberOfprev<prev_count){
        prev_count=numberOfprev-daysOfWeek.indexOf(startDayName)+1
      } 
          elements.setAttribute('data-date',stringDate=(new Date(prevMonth).getFullYear()+"-"+(new Date(prevMonth).getMonth()+1)+"-"+prev_count))
          elements.innerHTML=prev_count++
         

          if(toDay==stringDate){
            var toDay_color= document.querySelector(`span.date[data-date="${toDay}"]`)
            toDay_color.style.color = '#44a6e7'
           }
           else{
            toDay_color= document.querySelector(`span.date[data-date="${stringDate}"]`)
            toDay_color.style.color = colors='#A9A9A9'
           }

          
            if(daysOfWeek.indexOf(startDayName)+1<=ele_count){
              elements.setAttribute('data-date',stringDate=(year+"-"+month+"-"+count))
              colors=color_cheak==true?"#008000":"#333"
              elements.innerHTML=count
                count+=1
              
                 
            if(numberOfDays<count){
               var nextMonth=getNextMonth(dateString)
               month=new Date(nextMonth).getMonth()+1
               year=new Date(nextMonth).getFullYear()
              count=1
              color_cheak=true
            }
            // color_cheak=color_cheak==2?true:false
           
            var toDay=formatDate(new Date())
            var toDay_color= document.querySelector(`span.date[data-date="${toDay}"]`)
            if(toDay_color){
                  toDay_color.style.color = '#44a6e7'
                  }

            
           if(toDay==stringDate){
            var toDay_color= document.querySelector(`span.date[data-date="${toDay}"]`)
            toDay_color.style.color = colors
           }
           else{
            var toDay_color= document.querySelector(`span.date[data-date="${stringDate}"]`)
            toDay_color.style.color = colors
           }
        }
        ele_count+=1
        
       

     }) 
var all_elements=document.querySelectorAll(".date") 
 all_elements.forEach(function(element){
  ajax_valid(element.getAttribute('data-date'))
 })


}




function getPreviousMonth(inputDate) {
  const date = new Date(inputDate)
  date.setMonth(date.getMonth() - 1)
  const previousMonth = date.toLocaleString('default', { month: 'long' })
  const previousYear = date.getFullYear()
  const previousMonthString = previousMonth + ' ' + previousYear

  return previousMonthString
}

function getNextMonth(inputDate) {
  const date = new Date(inputDate)
  date.setMonth(date.getMonth() + 1)
  const previousMonth = date.toLocaleString('default', { month: 'long' })
  const previousYear = date.getFullYear()
  const previousMonthString = previousMonth + ' ' + previousYear

  return previousMonthString
}


function ajax_valid(dateString) {
  var targetElement = document.querySelector(`.date[data-date="${dateString}"]`)
  var parentElement = targetElement.parentElement
  // var childCount=parentElement.childElementCount
  var span = document.createElement("span")
  span.classList.add("event")
  $.ajax({
    url: "events.php",
    type: "GET",
    data: { date: dateString },
    success: function (mgs) {
      // alert(JSON.parse(mgs))
      try {
          mgs = JSON.parse(mgs)
          for(var i=0;i<mgs.length;i++){
            var span = document.createElement("span")
             span.classList.add("event")
            span.innerText = mgs[i].title
            parentElement.appendChild(span)

          }
      } catch (error) {
        mgs
      }
    },
    error: function (mgs) {
     mgs
    }
  })
}