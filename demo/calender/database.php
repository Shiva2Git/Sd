<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo";
$table="events";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


// $sql = "CREATE TABLE `events` (
//   `id` INT AUTO_INCREMENT PRIMARY KEY,
//   `title` VARCHAR(255) NOT NULL,
//   `day` DATE NOT NULL,
//   `start_date` DATETIME NOT NULL,
//   `end_date` DATETIME NOT NULL,
//   `details` VARCHAR(255)
// )";


// if (mysqli_query($conn, $sql)) {
//     echo "<h1>Register is Done </h1>";
//     // $next=TRUE;
//   }
//   else{
//     echo "no";
//   }
  
?>