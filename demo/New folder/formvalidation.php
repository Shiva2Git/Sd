<!DOCTYPE html>  
<html>  
<head>  
<link href= 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/ui-lightness/jquery-ui.css' rel='stylesheet'>
<script src= "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" ></script>
<script src= "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" > </script>
<script src="script.js"></script>
<style>  
.error {color: #FF0001;}  
</style>  
<?php 
// ----------------- this for import connect.php file in this file ---------------------------
include("connect.php");
function Done(){
    header("Location: http://localhost/demo/try.php");
    exit();
}
//  ---------------------------------------------------------------------------------------
?> 
<script src="jquery.js"></script>
</head> 

<body>  
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


?>  
  
<?php   
//  ---------- avoid some default error in php --------------------
error_reporting(E_ERROR | E_PARSE);
//  ------------------------------------------------------

$nameErr = $emailErr = $mobilenoErr = $genderErr = $passwordErr=$passwordErr1 =$fileErr=$birthErr="";  
$name = $email = $mobileno = $gender = $password=$Re_password=$file="";  
$count=0;
// ---------------for valid email and phone number details use jquery ---------------------

function valid_details($details, $details1, $conn) {
    $type_data = $details;
    $datas = $details1;
    
    if ($type_data == 'email') {
        $sql = "select email from register where email = '$datas'";
        $type_data = $type_data . " id";
    } else {
        $sql = "select phoneno from register where phoneno = '$datas'";
        $type_data = "phone number";
    }
    
    $result = mysqli_query($conn, $sql);
    $row_cnt = mysqli_num_rows($result);
    
    if ($row_cnt > 0) {
        $msg = "This {$type_data} is already in use. Please choose a different {$type_data}.";
    } else {
        $msg = '';
    }
    
    return $msg;
}



    
    

// -----------------------------------------------


 
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
      
 
    // ---------------------name validation in php ---------------------
    if (empty($_POST["name"])) {  
         $nameErr = "Name is required"; 
         $count++; 
    } else {  
        $name = input_data($_POST["name"]);  
            if (preg_match("~[0-9]+~",$name)) {  
                $nameErr = "Only alphabets are allowed";  
                $count++;
            }
            else{
                $count--;
            }
    }
    // -----------------------------------------------------------------

     // ---------------------password validation in php ---------------------
    if(empty($_POST['password'])){
        $passwordErr="Error ! users didn't enter a password";
        $count++;
    }
    else{
        $password=input_data($_POST['password']);
        $count--;
    if(strlen($password)<8){
        $passwordErr="password mudt be 8 latters";
        $count++;
    }
    if(!preg_match('~[0-9]+~',$password)){
        $passwordErr="please add 0-9 in yours password"; $count++;}
        

    if(!preg_match('`[a-z]`',$password)){
        $passwordErr="please add lowercase in yours password";
        $count++;
        }
    if(!preg_match('`[A-Z]`',$password)){
        $passwordErr="please add uppercase in yours password";
        $count++;
        }
    if(!preg_match('`[\$\*\.,+\-=@]`',$password)){
        $passwordErr="please add spciel symbols in yours password";
        
        $count++;
        }
    }
    if(empty($_POST['Re_password'])){
        $passwordErr1="! users didn't enter a re_password";
        $count++;
    }
    else{
        $Re_password=$_POST["Re_password"];
        $count--;
        if($password!=$Re_password){
            $passwordErr1="Error ! password and re_password is not same";
            $count++;
        }
    }
     // --------------------- ---------------------

    // ---------------------Email Validation  in php ---------------------  
    if (empty($_POST["email"])) {  
            $emailErr = "Email is required";  $count++;
    } else {  
            $email = input_data($_POST["email"]);
            $count--;  
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {  
                $emailErr = "Invalid email format";  
                $count++;
            }
            $emailErr=valid_details("email",$email,$conn);
             
     }  
       // --------------------- ---------------------
     
    
        // ---------------------MOBILE NO Validation  in php ---------------------
    if (empty($_POST["mobileno"])) {  
            $mobilenoErr = "Mobile no is required";  $count++;
    } else {  
            $mobileno = input_data($_POST["mobileno"]); $count--;  
            
            if (!preg_match ("/^[0-9]*$/", $mobileno) ) {  
            $mobilenoErr = "Only numeric value is allowed.";  $count++;
            }  
          
        if (strlen($mobileno) <10) {  
            $mobilenoErr = "Mobile no must contain 10 digits.";  
            $count++;
            }  
        $mobilenoErr=valid_details("phone No",$mobileno,$conn);
    } 
  // ------------------------------------------



  // ---------------------File Validation  in php ---------------------
if (!isset($_FILES['file']) || empty($_FILES['file']['name'])) {
    $fileErr = "Please upload a file.";
} else {
    $file = $_FILES['file']['name'];
    $allowed = array("jpg", "jpeg", "png", "gif");
    $ext = pathinfo($file, PATHINFO_EXTENSION);

    if (!in_array($ext, $allowed)) {
        $fileErr = "Please upload a file with a jpg, jpeg, png, or gif extension only.";
    } else {
        if($_FILES['file']['size']>1048576){
          $fileErr = "Please upload a file within 1mb size file";
        }
        else{
            $fileErr="";
        }
    }
}
        // ----------------------------------------------

if($_POST['year']=='Year'&&$_POST['month']=="month" && $_POST['day']=="day"){
    $birthErr="enter a birthday date";
}
if($_POST['year']=='Year'){
    $birthErr="enter a birthday year";
}
else if($_POST['month']=="month"){
    $birthErr="enter a birthday month";
}
else if($_POST['day']=="day"){
    $birthErr="enter a birthday DAY";
}
else{
    $birthErr='';
}





// ---------------------gender Validation  in php ---------------------
      
    if (empty($_POST["gender"])) {  
            $genderErr = "Gender is required";  
            $count++;
    } else {  
            $gender = input_data($_POST["gender"]);  $count--;
            
    }  
    
}

$curr_path=getcwd();
$file_name=$_FILES['file']['name'];
$file_size=$_FILES['file']['size'];
$file_tmpname=$_FILES['file']['tmp_name'];

if (!is_dir('path')) {
    mkdir('path', 0777, true);
}

if(move_uploaded_file($file_tmpname,'path/'.$file_name)){
    echo "";
}
else{
    echo " ";
}
  // --------------------- ---------------------
  
function input_data($data) {  
  $data = trim($data);  
  $data = stripslashes($data);  
  $data = htmlspecialchars($data);  
  return $data;  
}
if($_POST['name']=='') $_POST['name']='';
if($_POST['email']=='') $_POST['email']='';

?>  
  <!-- " -->
<h2>Registration Form</h2>  
<br><br>  
<form method="post" name="register"  action="#" enctype="multipart/form-data"  onsubmit="return valid_form()">    
    Name:   
    <input type="text" name="name" id="name" onblur="valid_name()" value="<?php echo $_POST['name'];?>">  
    <span class="error" id="valid_name_g"> <?php echo $nameErr; ?> </span> 
    <br>
    <br>
    <!-- <p class="error" ></p> -->
    Password:
    <input type="password" id="password_new" onblur="valid_password()" name="password">  
    <span class="error" id="valid_password_new"><?php echo $passwordErr; ?> </span>
    <br>
    <br>
    <!-- <p class="error" ></p>   -->
    Re_password:
    <input type="password" name="Re_password" id="password_new1" onblur="valid_re_password()">  
    <span class="error" id="valid_password_new1"> <?php echo $passwordErr1; ?> </span>
    <br>  
    <br>
    <!-- <p class="error" ></p> -->
    E-mail:
    <input type="text" name="email" id="email" value="<?php echo $_POST['email'];?>" onblur="valid_email()">  
    <span class="error" id="error_email"> <?php echo $emailErr; ?> </span>
    <br>
    <br>
    <!-- <p class="error" ></p> -->
     
    Mobile No:   
    <input type="text" name="mobileno" id="phone"  value="<?php echo $_POST['mobileno'];?>" onblur="valid_phone()">  
    <span class="error" id="error_phone"> <?php echo $mobilenoErr; ?> </span>  <br>
    <!-- <p class="error" ></p>    -->
    <br>
    Gender: 
    <input type="radio" onblur="valid_gender()" name="gender" id="male" value="male" <?php if(isset($_POST['gender']) && $_POST['gender'] == 'male') echo 'male'; ?>> Male  
    <input type="radio" name="gender" id="female" value="female" <?php if(isset($_POST['gender']) && $_POST['gender'] == 'female') echo 'female'; ?>> Female  
    <input type="radio" name="gender" id="other" value="other"<?php if(isset($_POST['gender']) && $_POST['gender'] == 'other') echo 'other'; ?>> Other  
    <span class="error" id="error_gender"> <?php echo $genderErr; ?> </span> <br>
    <br>
    <!-- <p class="error" ></p> -->
    <br>
    Birthday:
    <select onfocus onblur="valid_birthday()" name="year" onclick="select_year()" id="year" ><option >year</option></select> <select onclick="select_month()" name="month" id="month" ><option>Month</option></select> <select onclick="select_day()" onfocus onblur="valid_bday()" name="day" id="day"> <option>Day</option></select>
    <span class="error" id="error_birth"><?php echo $birthErr; ?> </span> <br>
    <br>
    <!-- <p class="error" ></p>  -->
    <br>
    File:
    <input type="file" name="file" id="file" onblur="valid_file()" ><div name="file_position"><?php  $_FILES['file'];?></div>
    <span class="error" id="error_file"> <?php echo $fileErr; ?> </span> <br>
    <!-- <p class="error" ></p> -->
     <br>
     <!-- date : <input type="text" id="calender"> -->
     <br>
     <br>
     <br>
    <!-- <input type="submit" name="submit"  >   shiva143@S -->
    <br><br> 
    <!-- date : <input type="text" id="calender"> -->
   

</form>  
  
<?php  
    if(isset($_POST['submit'])) { 
        
    if($nameErr == "" && $emailErr == "" && $mobilenoErr == "" && $genderErr == "" && $passwordErr=="" && $passwordErr1=="" && $fileErr=="" && $birthErr=="") {  
        
        


// find the file count ---------------------------------------------------------------------------
// if(is_dir('path/')){
//     $file_count=count(scandir('path/'))-2;
//     echo "<h1>$file_count</h1>";
// }
// else{
//     echo "<h1>not</h1>";
// }


// $file_count=$_FILES['file_count'];

$next=FALSE;
  // ---------------------upload data into database  ---------------------
$upload_path=$curr_path.$upload_dir.basename($file_name);
$did_upload=move_uploaded_file($file_tmpname,$upload_path);
        $sql="INSERT INTO register(name,password,email,phoneno,gender) VALUES ('$name','$password','$email','$mobileno','$gender')";
        if (mysqli_query($conn, $sql)==TRUE) {
            echo "<h1>Register is Done </h1>";
            $next=TRUE;
          }
          else{
            echo "<h1>Register is not completed</h1>";
          }
        }
      
    }
// if($next){
//     // sleep(5);
//     Done();
// }


    
?>  
<script src="scripts.js"></script>
</body>  
</html>  
 <!-- hiva143@S -->