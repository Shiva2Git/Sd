<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css" type="text/css">
  <script src="script.js" type=""></script>
 
  <script src="jquery.js"></script>
</head>
<body>
    <div class="top">
    <h1 id="calendar-heading">November 2023</h1> 
   <button id="insert">insert</button>   <button id="update">Update</button>  <button id="delete">Delete</button>   <button id="next">next</button>  
    </div>
    
     
    <div id="modalOne" class="modal" sty>
      <div class="modal-content">
        <div class="contact-form">
          <a class="close">&times;</a>
          <form action="#">
            <h2>events</h2>
            <div>
              <input id="event" type="text" name="name" placeholder="event Name" />
              <input type="date" name="date" id="date" placeholder="Date" />
            </div>
            <span>Details</span>
            <div>
              <textarea rows="4"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
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
        <td><span class="date"><br></td>
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
        <td><span class="date"><br></td>
        <td><span class="date"> <br></td>
        </tr>
        <tr>
        <td><span class="date"><br></td>
        <td><span class="date"> <br></td>
        <td><span class="date">     </td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        </tr>
        <tr>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"> <br></td>
        <td><span class="date"><br></td>
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
        </div>
</table>
<script>document.getElementById("modalOne").style.display = "none";</script>
<script src="scripts1.js"></script>
</body>
</html>
