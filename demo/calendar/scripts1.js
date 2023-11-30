// var Insert=document.querySelectorAll("span")
// Insert.forEach(function(element){
//     element.addEventListener("click",function(){
//         document.querySelector("h1").innerHTML=element.textContent
//     })
// })



var Insert=document.querySelectorAll(".date")
Insert.forEach(function(element){
    element.onclick = function () {
        let modal = element.getAttribute("data-modal");
        document.getElementById("modalOne").style.display = "block";
      };
    let closeBtns = [...document.querySelectorAll(".close")];
    closeBtns.forEach(function (btn) {
      btn.onclick = function () {
        let modal = btn.closest(".modal");
        modal.style.display = "none";
      };
    });
    window.onclick = function (event) {
      if (event.target.className === "modal") {
        event.target.style.display = "none"
      };
    }
});



