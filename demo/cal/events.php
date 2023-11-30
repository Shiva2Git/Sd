<?php
include("database.php");
$date=$_GET["date"];
$dateTime = new DateTime($date);
$newDate = $dateTime->format('Y-m-d');



$sql="select title,day,details from events where day='{$newDate}'";
if($result=mysqli_query($conn, $sql)){
    $event=array();
    while($row=mysqli_fetch_assoc($result)){
        //$event[]=$row;
        array_push($event, $row);
    }
    echo json_encode($event);
}
else{
    echo "none";
}
?>