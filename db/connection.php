<?php
//---------------------------mysql db connection ------------//
//include('db/connection.php');
$hostname='us-cdbr-iron-east-05.cleardb.net';
$username='bcd92b81eb6c49';
$password='59d0b157';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=heroku_a7483908002c347",$username,$password);
//    echo 'Connected to Database<br/>';
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
//---------------------------mysql db connection ------------//
/*
if($dbh){
	echo "connection successfully";
}
else{
	echo "connection faile";
}
*/
?>