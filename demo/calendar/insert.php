<?php
include("database.php");
$date=$_GET["date"];
$event=$_GET['event'];
$dateTime = new DateTime($date);
$newDate = $dateTime->format('Y-m-d');



$sql="INSERT INTO events (title,day) VALUES ('$event','$newDate');";
$result=mysqli_query($conn,$sql);
if($result){
    echo "success";
}
else{
    echo "nope";
}
// if ($stmt = $conn->prepare($sql)) {
//     $stmt->bind_param("s", $event, $date); 
//     if ($stmt->execute()) {
//         echo "Record inserted successfully.";
//     } else {
//         echo "Error: " . $sql . "<br>" . $conn->error;
//     }
//     $stmt->close();
// }
?>