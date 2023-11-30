<!DOCTYPE html>
<html>
<head>
<script src="script.js" type=""></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<script src="jquery.js"></script>
<link rel="stylesheet" href="formcss.css" type="text/css">
<link rel="stylesheet" href="style.css" type="text/css">

</head>
<body>
    <div class="contain">
<div class="m-4">
    <div class="top">
    <h1 id="calendar-heading">November 2023</h1> 
    <button id="prev"><i class="fa-solid fa-backward-step"></i></button><button id="update"><i class="fa-solid fa-notes-medical fa-xl"></i></button>  <button id="insert"><i class="fa-solid fa-plus fa-xl"></i></button> <button id="delete"><i class="fa-solid fa-trash fa-xl"></i></button>   <button id="next"><i class="fa-solid fa-forward-step"></i></button>  
    </div>
    <table>
        <thead>
        <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
        </tr>
        </thead>
        <div class="tbodycontainer">
       <tbody class="centered-table">
        <tr>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        </tr>
        <tr>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        </tr>
        <tr>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        </tr>
        <tr>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        </tr>
        <tr>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        </tr>
        <tr>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        </tr>
        </tbody>
        </table>
        <div class="popup" id="eventPopup">
          <p id="eventNamePop"></p>
          <p id="eventDatePop"></p>
          <p id="eventDetailsPop"></p>
    <!-- Add more details as needed -->
    <!-- <button id="updateButton">Update</button>
    <button id="deleteButton">Delete</button> -->
  </div>
  <div class="updatePopup" id="updatePopupWin">
        <button type="button" class="btn-close" id="cl-btn" data-bs-dismiss="modal"></button>
        <form action="" id="UpdateForm">
            <span id="updateErr" style="color:red;"></span>
            <label for="">Event Name</label>
            <input type="text" id="updateName">
            <label for="">Details</label>
            <input type="text" id="updateDetails">
            <button id="updateButton" type="button">Update</button>
            <button id="deleteButton" type="button">Delete</button>
        </form>    
  </div>
  <div class="deleteComform" id="deleteComformPopup">
    <p>do you want delete this event ?</p>
    <button type="button" id="yes">yes</button>
    <button type="button" id="no">no</button>
  </div>
        <div id="myModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">ADD EVENT</h5>
                    <button type="button" class="btn-close" id="close-btn" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    
          <form id="form"  onsubmit="event.preventDefault();">
            <div>
            <label class="head" for="">Event Name</label>
            <input id="eventName" onblur="name_valid()" type="text" name="formevent"/>
           
            <label class="head" for="">Event Date</label>
            <input id="dates" type="text" onblur="date_valid()" name="formdate"/>
            </div>
            <div>
            <label class="head" id="details"for=""> Details</label>
            <textarea id="textarea" rows="4"></textarea>
            <br>
            <span id="eventErr"></span>
            </div>
                </div>
                <div class="modal-footer">
                    <button type="button"  id="submit-btn" class="btn btn-secondary" data-bs-dismiss="modal">Submit</button>  
                </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="scripts1.js"></script>
</div>
</body> 
</html>
