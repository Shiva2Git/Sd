var head = document.querySelector("head");
var body = document.querySelector("body");
var div = document.createElement("div");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.js")
loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js")
var stylesheet = document.createElement("link");
stylesheet.setAttribute("rel", "stylesheet");
stylesheet.href = "style.css";
head.appendChild(stylesheet);

var chatbot = `<div id="chatboxid" class="chatbox" style="display: none;">
<div class="chatbox__support">
    <div class="chatbox__header">
        <div class="chatbox__image--header">
            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image">
        </div>
        <div class="chatbox__content--header">
            <h3 class="chatbox__heading--header">User</h3>
        </div>
        <button class="chatbox_close-btn"><img id="close-btn" src="../static/img/close-line-icon.svg" /></button>
    </div>
    <div class="chatbox__messages" >
        <div id="chatbox__messages"></div>
    </div>
    <div class="chatbox__footer">
        <input type="text" id="chat" placeholder="Write a message...">
        <button class="chatbox__send--footer send__button" id="sendbtn">Send</button>
    </div>
</div>
</div>`;
body.innerHTML += chatbot;

var HTML = `<div class="chatbox__button" id="showChatbot">
    <button id="showbtn"><img src="chatbox-icon.svg" /></button>
</div>`;
body.innerHTML += HTML;

function TY() {
    document.querySelector(".chatbox__button").addEventListener("click", function () {
        document.getElementById("showbtn").style.display = "none";
        document.getElementById("chatboxid").style.display = "block";
    });

    document.getElementById("close-btn").addEventListener("click", function () {
        document.getElementById("chatboxid").style.display = "none";
        document.getElementById("showbtn").style.display = "block";
    });

    const input = document.querySelector('input');
    input.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            document.getElementById("sendbtn").click();
        }
    });
}
function loadScript(src) {
    var script = document.createElement("script");
    script.src = src;
    head.appendChild(script);
}
TY()
var socket = io.connect("http://127.0.0.1:5000");
socket.on('connect', function () {
    socket.send("User connected");
});


socket.on('message', function (data) {
    $('#chatbox__messages').append($('<p>').text(data + " yes"));
});

$('#sendbtn').on('click', function () {
    var chat = document.getElementById("chat").value;
    if (chat === "") {
        return false;
    } else {
        var ptag = document.createElement("p");
        var span = document.createElement("span");
        span.className = "send_time";
        span.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
        var chatTime = span.textContent;
        ptag.className = "send_chat";
        ptag.innerHTML = chat;
        document.getElementById("chatbox__messages").appendChild(span);
        document.getElementById("chatbox__messages").appendChild(ptag);
        socket.send($('#chat').val());
        $('#chat').val('');
    }
});



