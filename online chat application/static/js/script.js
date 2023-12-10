var head=document.querySelector("head")
var body=document.querySelector("body")
var div=document.createElement("div")


function TY(){

    document.getElementById("showChatbot").addEventListener("click", function(){
        document.getElementById("showbtn").style.display = "none";
        document.getElementById("chatboxid").style.display = "block";
    })
    

document.getElementById("close-btn").addEventListener("click",function(){
    document.getElementById("chatboxid").style.display="none"
    document.getElementById("showbtn").style.display="block"
})


const input = document.querySelector('input');
input.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    document.getElementById("sendbtn").click()
  }  
});
}

var temp_chat


document.addEventListener("DOMContentLoaded",function(){
    TY()
    const username="shiva375123"

    $(document).ready(function(){
        var socket = io.connect("http://127.0.0.1:5000"); 
        socket.on('connect', function(){
            socket.send("User connected");
        

            // socket.on('connect', () => {
                // socket.emit('join', {'username': 'shiva35123'});
            });


            // socket.on('my response', data => {
            //     alert("yes")
            //     var ptag = document.createElement("p");
            //     var span = document.createElement("span");
            //     span.className = "recive_time";
            //     span.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
            //     ptag.className = "recive_chat";
            //     ptag.innerHTML = data.message;
            //     document.getElementById("chatbox__messages").appendChild(span);
            //     document.getElementById("chatbox__messages").appendChild(ptag);
            // });
    

        // socket.on('private_message', function (data) {
        //     if(temp_chat!=data.message){
        //         var ptag = document.createElement("p");
        //         var span = document.createElement("span");
        //         span.className = "recive_time";
        //         span.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
        //         ptag.className = "recive_chat";
        //         ptag.innerHTML = data.message;
        //         document.getElementById("chatbox__messages").appendChild(span);
        //         document.getElementById("chatbox__messages").appendChild(ptag);
        //     }
           
        // });
        


        socket.on('message', function(data){
             if(data.resiver==username){
                // if(data.resiver==username){   >
                var ptag = document.createElement("p");
                var span = document.createElement("span");
                span.className = "recive_time";
                span.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
                ptag.className = "recive_chat";
                ptag.innerHTML = data.message;
                document.getElementById("chatbox__messages").appendChild(span);
                document.getElementById("chatbox__messages").appendChild(ptag);
                // }
            }
        });
        
        $('#sendbtn').on('click', function(){
            var chat = document.getElementById("chat").value;
            
            if (chat === "") {
                return false;
            } else {
                var ptag = document.createElement("p");
                var span = document.createElement("span");
                span.className = "send_time";
                span.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
                ptag.className = "send_chat";
                ptag.innerHTML = chat;
                document.getElementById("chatbox__messages").appendChild(span);
                document.getElementById("chatbox__messages").appendChild(ptag);
                // socket.emit('message', { 'message': message });
                // socket.send(chat)
                socket.send({"username":username,"resiver":"naveen123","message":chat});
                // sendPrivateMessage("shiva35123",chat)
                temp_chat=chat
                $('#chat').val(''); 


            }
        });
    });
function sendPrivateMessage(recipient,message) {
    // const recipient = 'kumar';
    socket.emit('message', {'message': message, 'recipient': recipient});
}

});

