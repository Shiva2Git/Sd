<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mouse Pointer Popup</title>
  <style>
    #eventPopup {
      display: none;
      position: absolute;
      padding: 10px;
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
  </style>
</head>
<body>
  <!-- Assuming you have some elements with the "dot" class -->
  <div class="dot">Hover me</div>

  <!-- Popup container -->
  <div id="eventPopup"></div>

  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const popup = document.getElementById("eventPopup");

      // Function to handle mouseover events
      function handleMouseOver(event) {
        const dateString = event.currentTarget.parentElement.firstElementChild.getAttribute("data-date");
        const details = ajax_details(dateString);
        
        // Update popup content and position
        popup.innerHTML = details;
        popup.style.left = event.pageX + 10 + "px";
        popup.style.top = event.pageY + 10 + "px";
        popup.style.display = "block";
      }

      // Function to handle mouseleave events
      function handleMouseLeave() {
        popup.style.display = "none";
      }

      // Attach event listeners to elements with the "dot" class
      document.querySelectorAll(".dot").forEach(function (element) {
        element.addEventListener("mouseover", handleMouseOver);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      // Function to make AJAX request and retrieve details
      function ajax_details(dateString) {
        // Use jQuery for AJAX request
        var details = "";
        $.ajax({
          url: "events.php",
          type: "GET",
          async: false, // Set to false for simplicity, but consider using callbacks/promises for asynchronous operations
          data: { date: dateString },
          success: function (response) {
            try {
              var events = JSON.parse(response);
              events.forEach(function (event) {
                details += `<p>Event Name: ${event.title}</p>`;
              });
            } catch (error) {
              details = "Error parsing response.";
            }
          },
          error: function () {
            details = "Error fetching details.";
          }
        });
        return details;
      }
    });
  </script>
</body>
</html>
