<?php

$servername = "localhost";
$dBUsername = "Urbexuser";
$dBPassword = "Pnwurbex1";
$dBName = "urbex"
    
    $conn = mysqli_connect($servername, $dBUsername, dBPassword, dBName,)
    
    if (!$conn) {
        die("Connection Failed: " .mysqli_connect_error());
        }
