var pop = document.getElementById("popup");
var Insert = document.querySelectorAll(".date");

Insert.forEach(function (element) {
  element.onclick = function () {
    $(document).ready(function () {
      document.getElementById('close-btn').click()
      $("#myModal").modal('show')
      document.getElementById("dates").value = element.getAttribute("data-date");
      eventErr.innerHTML = "";
      document.getElementById('submit-btn').style.display='none'


      function setTime(){
      if(name_valid()&&date_valid()){
        document.getElementById('submit-btn').style.display='block'
      }
      else{
        document.getElementById('submit-btn').style.display='none'
      }
    }
    setInterval(setTime,200)


    $("#submit-btn").click(function (event) {
      if (name_valid() && date_valid()) {
        var eventName=document.getElementById("eventName").value
        var dateValid=document.getElementById("dates").value
        var eventDetails=document.getElementById("textarea").value
        ajex_insert(dateValid,eventName,eventDetails)
        $("#myModal").modal('hide');
        window.location.reload()
        
    //   } else {
    //     // Prevent the form from being submitted
    //     $('#myModal').modal({ show: true });
    //     // $('#myModel').model('stop')
    //       // event.preventDefault();
    //       // window.location.
    //          // Remove the line below to stop the popup effect
    //     // $("#myModal").modal('');
    //     // alert("one value was missing so this event calceled");
        
    //     // window.location.reload()
      }
    });
     
    });
  };
});


document.getElementById('close-btn').addEventListener('click',function(){
  document.getElementById("eventName").value=""
  document.getElementById("dates").value=""

})


var eventErr=document.getElementById("eventErr")

function name_valid(){
  var eventName=document.getElementById("eventName").value
  // alert(eventName)
  if(eventName==''){
    eventErr.innerHTML="pleace add event name"
    return false
  }
 else{
    eventErr.innerHTML=""
    return true
  }
}


function date_valid(){
  var dateValid=document.getElementById("dates").value
  if(dateValid==""){
    eventErr.innerHTML="pleace add eventDate"
    return false
  }
  else{
    var str = dateValid;
    var parts = str.split("-");
    var year = Number(parts[0]);
    var month = Number(parts[1]);
    var day = Number(parts[2]);
    if(isValidDate(year,month,day)){
      eventErr.innerHTML=""
      return true
    }
    else{
      eventErr.innerHTML="invalid format"
      return false
    }
   
  }
}



function valid_form(){
  if(name_valid() && date_valid()){
    return true
  }
}


var popup=document.getElementById("eventPopup")
var updatepopup=document.getElementById("updatePopupWin")
var closeBtn=document.getElementById("cl-btn")
var UpdateForm=document.getElementById("UpdateForm")

var updateButton=document.getElementById("updateButton")

var deleteButton=document.getElementById("deleteButton")


function trys(){

var dotelement=document.querySelectorAll(".dot")
dotelement.forEach(function(element){
  var parentElement=element.parentElement


  element.addEventListener("click",function(){
    updatepopup.style.left = event.pageX + 10 + "px";
    updatepopup.style.top = event.pageY + 10 + "px";
    // document.getElementById("OldEventname").innerHTML=element.getAttribute("id")
    updatepopup.style.display="block"
    document.getElementById("updateName").value=element.getAttribute("id")
    // document.getElementById("updateDetails").value=document.getElementById("eventDetailsPop")

    updateButton.addEventListener('click',function(event){
      // var inputValue=document.getAttribute("id")
     
      
      // document.getElementById("updateDetails").innerHTML=document.getElementById("eventDetailsPop").textContent
      
      var updateName=document.getElementById("updateName").value
      var updateDetails=document.getElementById("updateDetails").value
      var updateEventName=element.getAttribute("id")

      if(updateName===""){
        document.getElementById("updateErr").innerHTML="plzz fill event name"
        

      }
      else{
        ajex_update(parentElement.firstElementChild.getAttribute("data-date"),updateName,updateDetails,updateEventName)
        window.location.reload()
      }
      // alert(updateEventName)
      
    })
    deleteButton.addEventListener('click',function(){
      var deleteEventName=element.getAttribute("id")
      var deleteComformPopup=document.getElementById("deleteComformPopup")
      updatepopup.style.display="none"
      deleteComformPopup.style.left = event.pageX + 5 + "px";
      deleteComformPopup.style.top = event.pageY + 5 + "px";
      deleteComformPopup.style.display="block"
      
      document.getElementById("yes").addEventListener('click',function(){
        ajex_delete(parentElement.firstElementChild.getAttribute("data-date"),deleteEventName)
        // 
        window.location.reload()
      })
      document.getElementById("no").addEventListener('click',function(){
        
       document.getElementById("deleteComformPopup").style.display="none"
      })
      
    })



  })
  closeBtn.addEventListener("click",function(){
    updatepopup.style.display="none"
  })

  
  element.addEventListener("mouseenter",function(){
    popup.style.left = event.pageX + 10 + "px";
    popup.style.top = event.pageY + 10 + "px";
    ajax_details(parentElement.firstElementChild.getAttribute("data-date"),element)
    popup.style.display="block"
  })
  element.addEventListener('mouseleave', function () {
    popup.style.display = 'none';
  });

})
}
setInterval(trys,2000)

function ajax_details(dateString,element){

  var eventNamePop=document.getElementById("eventNamePop")
  var eventDatePop=document.getElementById("eventDatePop")
  var eventDetailsPop=document.getElementById("eventDetailsPop")
  

  
  $.ajax({
    url: "events.php",
    type: "GET",
    data: { date: dateString },
    success: function (mgs) {
      
      try {
          mgs = JSON.parse(mgs)
          for(var i=0;i<mgs.length;i++){
           
            if(mgs[i].title===element.getAttribute("id")){
            eventNamePop.innerHTML=`EventName : ${mgs[i].title}`
            // document.getElementById('pdate')
            eventDatePop.innerHTML=`Date : ${mgs[i].day}`
            eventDetailsPop.innerHTML=`details :${mgs[i].details}`}
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


