<?php
//---------------------------mysql db connection ------------//
//include('db/connection.php');
$hostname='us-cdbr-iron-east-05.cleardb.net';
$username='b9ff431d15b7e3';
$password='9194064e';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=heroku_859b66fb95bada4",$username,$password);
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