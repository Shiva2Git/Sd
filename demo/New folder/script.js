function valid_name() {

    var name = document.getElementById("name").value;
    if (name === '') {
        document.getElementById("valid_name_g").innerHTML = "Please enter a name";
        return false;
    }
    if(containsNumber(name)){
        document.getElementById("valid_name_g").innerHTML = "Please enter alphabets only";
        return false;
    }
    document.getElementById("valid_name_g").innerHTML = "";
    return true;
}
function containsNumber(str) {
    return /[0-9]/.test(str);
  }
function valid_password(){

    var password = document.getElementById("password_new").value;
    if (password === '') {
        document.getElementById("valid_password_new").innerHTML = "Please enter a password";
        return false;
    }
    if(password.length < 8){
        document.getElementById("valid_password_new").innerHTML = "password mudt be 8 latters";
        return false;
    }
    document.getElementById("valid_password_new").innerHTML = "";
    return true
}
 function valid_re_password(){

    var password = document.getElementById("password_new1").value;
    var password1 = document.getElementById("password_new").value;

    if (password === '') {
        document.getElementById("valid_password_new1").innerHTML = "Please enter a password";
        return false;
    }
    if(password !== password1){
        document.getElementById("valid_password_new1").innerHTML = "password not same";
        return false;
    }
    document.getElementById("valid_password_new1").innerHTML = "";
    return true
}

function valid_email(){
    var email=document.getElementById("email").value;
    if(email==''){
        document.getElementById("error_email").innerHTML = "please enter a email id  ";
        return false;
    }
   if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
 
    document.getElementById("error_email").innerHTML = "";
    ajax_valid("email",email);
    return true;

    
  }
  
  document.getElementById("error_email").innerHTML = "email id is invalid";
  return false;
}

function ajax_valid(data_type,datas) {
    // var datas = document.getElementById(datas).value;
    if(data_type=="email"){
        var error_type="error_email"
    }
    else{
        var error_type="error_phone"
    }
     $.ajax({
        url: "valid.php",
        type: "GET",
        data: { id: datas,types:data_type },
        dataType: "text",
        success: function(mgs){
           $(document.getElementById(error_type).innerHTML =mgs);},
        fail: function(mgs){
            $(document.getElementById(error_type).innerHTML =mgs);
         }
    });
    

}

// create function for valid birthday 


function valid_birthday(){
    if(!func_run&&!func_run_month&&!func_run_day){
        document.getElementById("error_birth").innerHTML = "please select birthday";
        return false;
    }

   else if(!func_run){
        document.getElementById("error_birth").innerHTML = "please select birthday year";
        return false;
    }
    else if(!func_run_month){
        document.getElementById("error_birth").innerHTML = "please select birthday month";
        return false;
    }
    else if(!func_run_day){
        document.getElementById("error_birth").innerHTML = "please select birthday day";
        return false;
    }
    else if(document.getElementById("day").value=="Day"){
        document.getElementById("error_birth").innerHTML = "please select birthday day";
        return false;
    }
    else{
        document.getElementById("error_birth").innerHTML = "";
        return true;

    }

}



function valid_phone() {
    var phone = document.getElementById("phone").value;
    if (phone === '') {
        document.getElementById("error_phone").innerHTML = "Please enter a phone number.";
        return false;
    } else if (phone!="" && phone.length>10){
        document.getElementById("error_phone").innerText = "";
        
        // Clear the error message if the phone number is valid.

        ajax_valid("phone number",phone);
        // alert("nope")
        return true;
    } else {
        document.getElementById("error_phone").innerHTML = "Invalid phone number";
        return false;
    }
}

function valid_gender(){
    
    var gender=document.register.gender;
    
    var i = 0;
    for(i=0;i<gender.length;i++) {
        if (gender[i].checked) {
            document.getElementById("error_gender").innerHTML = "";
            return true;
        }        
    }
    document.getElementById("error_gender").innerHTML = "Please select gender";
    return false;
}

function valid_file(){
    var file=document.getElementById("file");
    // alert(file.length)
    var file_path=file.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(file_path==''){
        document.getElementById("error_file").innerHTML = "Please select file ";
        return false;
    }
    if(!allowedExtensions.exec(file_path)){
        document.getElementById("error_file").innerHTML = "Please select \.jpg|\.jpeg|\.png|\.gif files only";
        return false
    } 
    if(document.getElementById('file').files[0].size>1048576){
        document.getElementById("error_file").innerHTML = "Please select with in 1mb file ";
        return false;
    }
    document.getElementById("error_file").innerHTML = "";
    return true;
}

var func_run=false
function select_year(){
    var curr_year=new Date().getFullYear();
    option = '<option value="Year">Year</option>';
    var year=document.getElementById("year").value;
    year=Number(year);

    for (let i = curr_year-60; i <= curr_year+15; i++) {

        let selected =(i===year ? ' selected':"")
        option += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    document.getElementById("year").innerHTML = option;
    func_run=true
    // alert(document.getElementById("year"))
    
 }
var func_run_month=false
var func_run_day=false

 function select_day(){
    if(document.getElementById("month").value=="month"){
        document.getElementById("error_birth").innerHTML = "Please select month fisrt";
        return false;
    }
    var month=document.getElementById("month").value
    document.getElementById("error_birth").innerHTML = "";
    if(func_run_month){
    let option = '';
    var count=0
    var day=Number(document.getElementById("day").value)
    option = '<option value="">Day</option>'; // first option
    var month=document.getElementById("month").value
    var year=Number(document.getElementById("year").value)
    months = ['',"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    count=new Date(year, months.indexOf(month), 0).getDate();
    
    for (let i = 1; i <count+1; i++) {
        let selected = (i === day ? ' selected' : '');
        option += '<option value="' + i + '"' + selected + '>' + i + '</option>';
    }
    document.getElementById("day").innerHTML = option;
    func_run_day=true
}


else{
    document.getElementById("error_birth").innerHTML = "Please select month ";
}
 }
 

function valid_bday(){
    if(document.getElementById("year").value==="year"){
        document.getElementById("error_birth").innerHTML = "Please select birthday  date";
        return false

    }
    else if(document.getElementById("month").value==="Month"){
        document.getElementById("error_birth").innerHTML = "Please select birthday  date";
        return false

    }

   else if(document.getElementById("day").value==="Day"){
        document.getElementById("error_birth").innerHTML = "Please select day ";
        return false
    }
    else{
        document.getElementById("error_birth").innerHTML = "";
        return true
    }
}








 function select_month(){
    if(document.getElementById("year").value=="Year"){
        document.getElementById("error_birth").innerHTML = "Please select year fisrt";
        return false;
    }
    else{
    var year=document.getElementById('year').value
    // alert(year.length)
    document.getElementById("error_birth").innerHTML = "";
    if(func_run){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    option = '<option value="month">month</option>';
    var month=document.getElementById("month").value
    

    for (let i =0; i < months.length; i++) {
        let selected =(months[i]===month?'selected':'')
        option += '<option value="' + months[i] + '"' + selected + '>' + months[i] + '</option>';
    }
    document.getElementById("month").innerHTML = option;
}

else{
    document.getElementById("error_birth").innerHTML = "Please select year fisrt";
    return false;
}
   func_run_month=true
    // alert(document.getElementById("year"))
    
 }
}




function valid_form() {
    var isNameValid = valid_name();
    var isPasswordValid = valid_password();
    var isRePasswordValid = valid_re_password();
    var isEmailValid = valid_email();
    var isPhoneValid = valid_phone();
    var isGenderValid = valid_gender();
    var isFileValid = valid_file();
    var isBirthdayValid = valid_birthday();

    return isNameValid && isPasswordValid && isRePasswordValid && isEmailValid &&
           isPhoneValid && isGenderValid && isFileValid && isBirthdayValid;
}