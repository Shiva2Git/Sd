<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Chatbot</title>
</head>
<body>
   
<div id="chatboxid" class="chatbox" style="display: none;">
<div class="chatbox__support">
    <div class="chatbox__header">
        <div class="chatbox__image--header">
            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image">
        </div>
        <div class="chatbox__content--header">
            <h3 class="chatbox__heading--header">Admin</h3>
        </div>
        <button class="chatbox_close-btn"><img id="close-btn" src="close-line-icon.svg" /></button>
    </div>
    <div class="chatbox__messages" >
        <div id="chatbox__messages"></div>
    </div>
    <div class="chatbox__footer">
        <input type="text" id="chat" placeholder="Write a message...">
        <button class="chatbox__send--footer send__button" id="sendbtn">Send</button>
    </div>
</div>
</div>
<div class="chatbox__button  id="showChatbot">
        <button id="showbtn"><img src="chatbox-icon.svg" /></button>
    </div>
</div>

    <script>
        document.querySelector(".chatbox__button").addEventListener("click", function() {
            document.getElementById("showbtn").style.display = "none";
            document.getElementById("chatboxid").style.display = "block";
        });

        document.getElementById("close-btn").addEventListener("click", function() {
            document.getElementById("chatboxid").style.display = "none";
            document.getElementById("showbtn").style.display = "block";
        });

        const input = document.querySelector('input');
        input.addEventListener('keyup', function(e) {
            if (e.keyCode === 13) {
                document.getElementById("sendbtn").click();
            }
        });

        document.getElementById("sendbtn").addEventListener("click", function() {
            var chat = document.getElementById("chat").value;
            if (chat.trim() === "") {
                return false;
            } else {
                var ptag = document.createElement("p");
                var span = document.createElement("span");
                span.className = "send_time";
                span.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
                ptag.className = "Admin_chat";
                ptag.innerHTML = chat;
                document.getElementById("chatbox__messages").appendChild(span);
                document.getElementById("chatbox__messages").appendChild(ptag);

                // Assuming you're using Axios for sending messages
                SendMessage(chat);

                document.getElementById("chat").value = "";
            }
        });

        function SendMessage(message) {
            axios.post('http://127.0.0.1:5000/chats', {
                message: message
            })
            .then(response => {
                console.log(response.data); // Handle the response as needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    </script>
</body>
</html>
