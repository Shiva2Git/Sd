<?php
include("database.php");
$date=$_GET["date"];
$event=$_GET['event'];
$dateTime = new DateTime($date);
$newDate = $dateTime->format('Y-m-d');

// $result=mysqli_query($conn,$sql);
// if($result){
//     echo "success";
// }
// else{
//     echo "nope";
// }
$sql="select title from events where day='{$newDate}'";
$result=mysqli_query($conn,$sql);

if($result){
    $row_cnt = mysqli_num_rows($result);
    if($row_cnt>0){
        $sql="DELETE FROM events where day='{$newDate}' AND title = '{$event}' LIMIT 1";
         if( mysqli_query($conn,$sql)){
       echo $mgs="your event details delete ";}
    }
    else{
       echo  $mgs="this {$newDate} dont have events";
    }

   
}
?>