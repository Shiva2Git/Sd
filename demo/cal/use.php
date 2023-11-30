<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .dot {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
}

.popup {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

  </style>
  
<script>
document.addEventListener('DOMContentLoaded', function () {
  const dot = document.querySelector('.dot');
  const popup = document.getElementById('eventPopup');
  const updateButton = document.getElementById('updateButton');
  const deleteButton = document.getElementById('deleteButton');

  // Sample event details
  const eventDetails = {
    date: 'November 13, 2023',
    time: '6:00 PM'
    // Add more details as needed
  };

  // Function to update the popup content
  function updatePopupContent() {
    document.getElementById('eventDate').textContent = eventDetails.date;
    document.getElementById('eventTime').textContent = eventDetails.time;
    // Update more details as needed
  }

  // Show popup on dot hover
  dot.addEventListener('mouseenter', function () {
    popup.style.display = 'block';
    updatePopupContent();
  });

  // Hide popup on dot leave
  dot.addEventListener('mouseleave', function () {
    // popup.style.display = '';
  });

  // Update button click event
  updateButton.addEventListener('click', function () {
    // Here you can implement logic to update event details
    // For now, let's just update the sample details
    eventDetails.date = 'Updated Date';
    eventDetails.time = 'Updated Time';
    updatePopupContent();
  });

  // Delete button click event
  deleteButton.addEventListener('click', function () {
    // Here you can implement logic to delete the event
    // For now, let's hide the popup (simulate deletion)
    popup.style.display = 'none';
  });
});

</script>


</head>
<body>

  <span class="dot" style="background-color: rgb(253, 232, 30);"></span>
  
  <div class="popup" id="eventPopup">
    <p>Event Details:</p>
    <p>Date: November 13, 2023</p>
    <p>Time: 6:00 PM</p>
    <!-- Add more details as needed -->
    <button id="updateButton">Update</button>
    <button id="deleteButton">Delete</button>
  </div>

</body>
</html>

