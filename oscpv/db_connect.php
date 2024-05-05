<?php
/*подключение к базе данных*/
$host = "localhost";
$username = "eua";
$password = "127115@Igor";
$databasename = "e-polis";
global $db;
$db = mysqli_connect($host,$username,$password,$databasename);
mysqli_query($db,'SET NAMES utf8');
mysqli_query($db,'SET CHARACTER SET utf8');
mysqli_query($db,'SET COLLATION_CONNECTION="utf8_general_ci"'); 
