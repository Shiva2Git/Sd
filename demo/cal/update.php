<?php
include("database.php");
$date=$_GET["date"];
$event=$_GET['event'];
$details=$_GET['details'];
$current=$_GET['current'];
$dateTime = new DateTime($date);
$newDate = $dateTime->format('Y-m-d');


$sql="select title from events where day='{$newDate}'";
$result=mysqli_query($conn,$sql);

if($result){
    $row_cnt = mysqli_num_rows($result);
    if($row_cnt>0){
        $sql="UPDATE events SET title = '{$event}', details = '{$details}' WHERE day = '{$newDate}' AND title = '{$current}' LIMIT 1;";
         if( mysqli_query($conn,$sql)){
       echo $mgs="your event details added ";}
    }
    else{
       echo  $mgs="this {$newDate} dont have events plzz use insert button for insert new event";
    }

   
}

?>