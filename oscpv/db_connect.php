<?php
/** @noinspection UnusedFunctionResultInspection */
/*подключение к базе данных*/
$host = "localhost";
$username = "eua";
$password = "127115@Igor";
$databasename = "e-polis";
global $db;
$db = mysqli_connect($host,$username,$password,$databasename);
$setname = mysqli_query($db,'SET NAMES utf8');
$setchar = mysqli_query($db,'SET CHARACTER SET utf8');
$setcollation = mysqli_query($db,'SET COLLATION_CONNECTION="utf8_general_ci"');
