<?php
$externalurl="https://dog.ceo/api/breeds/image/random";
$data=file_get_contents($externalurl);
header("Control-Type:application/json");
echo  $data;


?>
