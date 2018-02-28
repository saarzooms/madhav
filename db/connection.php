<?php
//---------------------------mysql db connection ------------//
//include('db/connection.php');
$hostname='localhost';
$username='i3175962_ally';
$password=')Ee#L9p8zaI-';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=i3175962_loan",$username,$password);
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