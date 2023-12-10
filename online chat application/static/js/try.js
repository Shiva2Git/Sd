$(document).ready(function(){
	$('#action_menu_btn').click(function(){
		$('.action_menu').toggle();
	});
});




var Reciver
var ProfilePic
var database=[{"naveen123":[],"Chaymae Naim":[],"karthi123":[]}]

function ClickEvent(){
var ClickEvnt=document.querySelectorAll(".contacts li")
ClickEvnt.forEach(function(event){
    event.addEventListener("click",function(){


        ClearChat()
        try{
            document.getElementById("username").removeAttribute('id');
        }
        catch{
            
        }
        var card=document.getElementById("card")
        card.style.display="block"
        var ActiveWindow=document.querySelector(".active")
        ActiveWindow.classList.remove("active")
        event.className="active"
        var img=event.querySelector("img").src
        var onlineIcon=event.querySelector("span").className
        var element=event.querySelector(".user_info")
        var name=element.querySelector("span").textContent
        element.querySelector("span").setAttribute("id","username")
        var online_ofline_tme=element.querySelector("p").textContent  
        var cardHeaderElement = document.querySelector('.card-header.msg_head')
        var imgElement = cardHeaderElement.querySelector('img')
        cardHeaderElement.querySelector("span").className=onlineIcon
        imgElement.src=img
        ProfilePic=imgElement.src
        var tamp=cardHeaderElement.querySelector(".user_info")
        tamp.querySelector("span").textContent=name
        Reciver=name
        Get_Chat(name,ProfilePic)
    
        
    })
})
}


function ClearChat(){
    try{
        var elements = document.querySelectorAll('.d-flex.justify-content-end.mb-4');
        elements.forEach(function(ele){
            ele.remove()
        })
        
    }
    catch{
        
    }
    try{
        var elements = document.querySelectorAll('.d-flex.justify-content-start.mb-4');
        elements.forEach(function(ele){
            ele.remove()
        })
        
    }
    catch{
        
    }

}


function Get_Chat(name,DP){
    database[0][name].forEach(function(ele){
        recive_chat(ele[0],ele[1],DP)
    })
   
}









function recive_chat(mgs,time,Dp){
    var element=document.querySelector("#chatbox")
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("d-flex", "justify-content-start", "mb-4");
    const imgContainerDiv = document.createElement("div");
    imgContainerDiv.classList.add("img_cont_msg");
    const imgElement = document.createElement("img");
    imgElement.src = Dp;
    imgElement.classList.add("rounded-circle", "user_img_msg");
    imgContainerDiv.appendChild(imgElement);
    const msgContainerDiv = document.createElement("div");
    msgContainerDiv.classList.add("msg_cotainer");
    const textNode = document.createTextNode(`${mgs}`);
    const timeSpan = document.createElement("span");
    timeSpan.classList.add("msg_time");
    timeSpan.textContent = `${time}`;
    msgContainerDiv.appendChild(textNode);
    msgContainerDiv.appendChild(timeSpan);
    parentDiv.appendChild(imgContainerDiv);
    parentDiv.appendChild(msgContainerDiv);
    element.appendChild(parentDiv);
}



var Time


function send_chat(mgs){
    var sendTime=new Date().getHours()
    sendTime=sendTime>12?sendTime-12:sendTime
    var AMPM=sendTime>12?"PM":"AM"
    var min=new Date().getMinutes()<10?+"0"+new Date().getMinutes():new Date().getMinutes()
    sendTime+=":"+min+" "
    var element=document.querySelector("#chatbox")
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("d-flex", "justify-content-end", "mb-4");
    const imgContainerDiv = document.createElement("div");
    imgContainerDiv.classList.add("img_cont_msg");
    const imgElement = document.createElement("img");
    imgElement.src = "https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256";
    imgElement.classList.add("rounded-circle", "user_img_msg");
    imgContainerDiv.appendChild(imgElement);
    const msgContainerDiv = document.createElement("div");
    msgContainerDiv.classList.add("msg_cotainer_send");
    const textNode = document.createTextNode(`${mgs}`);
    const timeSpan = document.createElement("span");
    timeSpan.classList.add("msg_time_send");
    timeSpan.textContent = sendTime +AMPM;
    Time=sendTime +AMPM
    msgContainerDiv.appendChild(textNode);
    msgContainerDiv.appendChild(timeSpan);
    parentDiv.appendChild(imgContainerDiv);
    parentDiv.appendChild(msgContainerDiv);
    element.appendChild(parentDiv);
    
}

const input = document.getElementById("chat")
input.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    document.getElementById("sendbtn").click()
  }  
});



document.getElementById("sendbtn").addEventListener("click",function(){
    var chat=document.getElementById("chat").value
    if(chat==="")return
    send_chat(chat)
})



function addChatperson(name){
const liElement = document.createElement("li");
const divFlex = document.createElement("div");
divFlex.className = "d-flex bd-highlight";
const divImgCont = document.createElement("div");
divImgCont.className = "img_cont";
const imgElement = document.createElement("img");
imgElement.src = "https://imgs.search.brave.com/wui4x3aO_mGbh0h1rXlY7NiIxnU8C-dC4lDHQtv0tiE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvNTQvNTQzYTc4/NDQxN2Q0OWRmZjRi/NDBhNjg0NjgxZjNj/ZDEuanBlZw";
imgElement.className = "rounded-circle user_img";
const spanIcon = document.createElement("span");
spanIcon.className = "online_icon";
divImgCont.appendChild(imgElement);
divImgCont.appendChild(spanIcon);
const divUserInfo = document.createElement("div");
divUserInfo.className = "user_info";
const spanChatPerson = document.createElement("span");
spanChatPerson.textContent = name;
const pElement = document.createElement("p");
pElement.textContent = "online";
divUserInfo.appendChild(spanChatPerson);
divUserInfo.appendChild(pElement);
divFlex.appendChild(divImgCont);
divFlex.appendChild(divUserInfo);
liElement.appendChild(divFlex);
const parentContainer = document.querySelector(".contacts");
parentContainer.appendChild(liElement);


}







function FirstChat(name){
var index=Chatperson.indexOf(name)
const contactsList = document.querySelector('.contacts');
const secondPerson = document.querySelectorAll('.contacts li')[index];
contactsList.insertBefore(secondPerson, contactsList.firstElementChild);
if (index !== -1) {
    Chatperson.splice(0, 0, Chatperson.splice(index, 1)[0]);
}
ClickEvent()
}

var Chatperson=[]





document.addEventListener("DOMContentLoaded",function(){
    const username="admin123"
    ClickEvent()
    
    $(document).ready(function(){

        var chats=document.querySelectorAll(".chatPerson")
        chats.forEach(function(ele){
            Chatperson.push(ele.textContent)
        })

        var socket = io.connect("http://127.0.0.1:5000"); 
        socket.on('connect', function(){
            socket.send("User connected");
            });  

        socket.on('message', function(data){
             if(data.resiver==username){
                if(!Chatperson.includes(data.sender)){
                     database[0][data.sender]=[]
                     Chatperson.push(data.sender)
                      addChatperson(data.sender)
                    }
               database[0][data.sender].push([data.message,data.time])
               FirstChat(data.sender)
                
               if(Reciver==data.sender && data.resiver==username){
                recive_chat(data.message,data.time,ProfilePic)
               }
             }
        });

        $('#sendbtn').on('click', function(){
            var chat = document.getElementById("chat").value;
            socket.send({"sender":username,"resiver":Reciver,"message":chat ,"time":Time});
            $('#chat').val(''); 
            
        });

        
    });
});



