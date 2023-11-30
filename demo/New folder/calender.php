<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  

<link href= 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/ui-lightness/jquery-ui.css' rel='stylesheet'>
<script src= "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" ></script>
<script src= "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" > </script>

<!-- <link href= "cal/cal.css" rel="stylesheet">
<script src= "cal/cal1.js" ></script>
<script src= "cal/cal2.js" > </script> -->
</head>
<body>
    date : <input type="text" id="calender">
    <!-- <div class="calender"  id="calender" ></div> -->
    <!-- <a href="#" onclick="Date_picker()">Date</a> -->
    <script>
        var dayEvents = [
        { date: '02-11-2023', Event: 'ALL SAINTS DAY' },
        { date: '9-11-2023', Event: 'LEGAL SERVICES DAY' },
        { date: '12-11-2023', Event: 'Diwali'.toUpperCase() },
        { date: '16-11-2023', Event: 'INTERNATIONAL DAY FOR TOLERANCE AND PEACE' },
        { date: '26-11-2023', Event: 'CONSTITUTION DAY' },
    ];
        var today=new Date()
        today=String(today)
        today=today.split(" ")
        today=Number(today[2])
        var curr_year=new Date().getFullYear()
        var next_year=new Date().getFullYear()+1
        var curr_month=new Date().getMonth()
        var past_month=curr_month-1
        var day_count=next_year%4==0?366:365
        day_count+=today
        count=new Date(curr_year,past_month, 0).getDate();
        
        day_count+=count
        day_count-=today
      
        $(document).ready(function() { 
            
            $(function() { 
                $( "#calender" ).datepicker({
                    dateFormat:'dd-mm-yy',
                    minDate:0,
                    maxDate:day_count-today,
                    beforeShowDay: function(date) {
                    var formattedDate = $.datepicker.formatDate('dd-mm-yy', date);
                    for (var i = 0; i < dayEvents.length; i++) {
                        if (formattedDate === dayEvents[i].date) {
                            return [true, 'event-day', dayEvents[i].Event];
                        }
                    }
                    return [true, ''];
                }      
                    
                }); 
                
            }); 
        })
    
        
  
   </script>
    
</body>
</html>