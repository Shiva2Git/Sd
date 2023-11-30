<?php
include("connect.php");
//  jquery validation ---------------------------------------------------------------------

$type_data=$_GET['types'];
$datas=$_GET['id'];
if($type_data=='email'){
    $sql="select email from register where email='$datas'";
    $type_data=$type_data." id";
}
else{
    $sql="select phoneno from register where phoneno='$datas'";
    $type_data="phone number";
}

if ($result=mysqli_query($conn, $sql)) {
    $row_cnt = mysqli_num_rows($result);
    if($row_cnt>0){
        $mgs="this {$type_data} was used try other {$type_data}";
    }
    else{
        $mgs='';
    }
}
 else{
    $mgs="";
}
echo $mgs;
// return $mgs;
exit();
?>
<!-- valid.php?id=shiva33@gmail.com -->

<!--