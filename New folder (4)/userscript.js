var head=document.querySelector("head")
var body=document.querySelector("body")
var div=document.createElement("div")
var script1=document.createElement("script")
script1.src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.js"
head.append(script1)
var script2=document.createElement("script")
script2.src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
head.append(script2)
var stylesheet=document.createElement("link")
stylesheet.setAttribute("rel","stylesheet")
stylesheet.href="style.css"
head.appendChild(stylesheet)


var chatbot=
`<div id="chatboxid" class="chatbox" style="display: none;">
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
</div>`

body.innerHTML+=chatbot

var HTML=
`<div class="chatbox__button  id="showChatbot">
        <button id="showbtn"><img src="chatbox-icon.svg" /></button>
    </div>`
body.innerHTML+=HTML

function TY(){
document.querySelector(".chatbox__button").addEventListener("click",function(){
    document.getElementById("showbtn").style.display="none"
    document.getElementById("chatboxid").style.display="block"
    // document.getElementById("chatboxid").classList.toggle("show")

})

document.getElementById("close-btn").addEventListener("click",function(){
    document.getElementById("chatboxid").style.display="none"
    document.getElementById("showbtn").style.display="block"
})
}
// setInterval(TY,200)
TY()

const input = document.querySelector('input');
input.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    document.getElementById("sendbtn").click()
  }  
});




document.getElementById("sendbtn").addEventListener("click",function(){
    var chat= document.getElementById("chat").value
   if(chat===""){
    return false
   }
   else{
   var ptag=document.createElement("p")
   var span=document.createElement("span")
   span.className="send_time"
   span.innerHTML=new Date().getHours()+":"+new Date().getMinutes()
   var chatTime=span.textContent
   ptag.className="send_chat"
   ptag.innerHTML=chat
//    SendMessage(chat)
   document.getElementById("chatbox__messages").appendChild(span)
   document.getElementById("chatbox__messages").appendChild(ptag)
   SendMessage(chat,chatTime)
//    ReciveMassage()
   }
})


function SendMessage(chat,time){

$(document).ready(function(){
    var socket = io.connect("http://192.168.1.8:5000");
    if (chat !== '') {
        socket.send({'user':{"chat":chat,"time":time}});
        $('#chat').val('');
    }
})
}


var count=0


setInterval(function(){
    fetch('http://192.168.1.8:5000/chats')
    .then(response => response.json())
    .then(mgs => {
       if(mgs.length>count){
        const ms = mgs[mgs.length - 1]['admin']['chat']
        var ptag=document.createElement("p")
        var span=document.createElement("span")
        span.className="recive_time"
        span.innerHTML=mgs[mgs.length-1]['admin']['time']
        var chatTime=span.textContent
        ptag.className="recive_chat"
        ptag.innerHTML=ms
        document.getElementById("chatbox__messages").appendChild(span)
        document.getElementById("chatbox__messages").appendChild(ptag)
        console.log(count)
        ++count
       }
        
    })
    
},1000)

