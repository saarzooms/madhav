<?php
//---------------------------mysql db connection ------------//
//include('db/connection.php');
$hostname='localhost';
$username='root';
$password='';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=loan",$username,$password);
    //$dbh1 = new PDO("mysql:host=$hostname;dbname=xcartade_loandb",$username,$password);
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