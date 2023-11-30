$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today insert',
      center: 'title',
      right: 'month'
    },
    defaultView: 'month',
    minDate: 0,
    editable: false,
    // events:function(start,day, end, timezone, callback) {
    //   // alert(day)
    //   $.ajax({
    //     url: "load.php",
    //     type: "GET",
    //     data: { date:String(start)},
    //     success: function(data) {
    //       document.querySelector("p").innerHTML=data
    //       callback(JSON.parse(data));
          
    //     },
    //     error: function() {
    //       alert('Error loading events');
    //     }
    //   });
      
      
    // },
  
    
  });

  // Create an "insert" button
  var insert = document.querySelector('.fc-left');
  var create_but = document.createElement("button");
  create_but.innerText = "insert";
  create_but.className = 'fc-insert-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled';
  insert.appendChild(create_but);
  alert(day)
//   function events(start){
//       const inputDateStr = String(start)
//       const date = new Date(inputDateStr);
//       const  year = date.getFullYear();
//       const month = String(date.getMonth() + 1).padStart(2, '0');
//       const day = String(date.getDate()).padStart(2, '0');
//       const formattedDate = `${year}-${month}-${day}`;
//       $.ajax({
//           url: "load.php",
//           type: "GET",
//           data: { date:formattedDate},
//           success: function(data) {
//            document.querySelector("p").innerHTML=data
//     },
//     error: function() {
//       alert('Error loading events');
//     }
//   });
// }
});
