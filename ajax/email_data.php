<?php
session_start();
include('../db/connection.php');
if(isset($_REQUEST['name']) && isset($_REQUEST['email']) && isset($_REQUEST['subject']) && isset($_REQUEST['txtEditor']))
{
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$subject=$_REQUEST['subject'];
	$txtEditor=$_REQUEST['txtEditor'];
	
	$msg="";
	try {
		$sql="INSERT INTO `email_master`(`loanofficer_id`, `sender_name`, `sender_email`, `subject`, `message`) 
		VALUES ('".$_SESSION['id']."','$name','$email','$subject','$txtEditor')";
		
		if($dbh->query($sql))
		{
			$msg="Data Save Successfully";
			echo $msg;
		}
	}catch(Exception $e) {
	  echo 'Message: ' .$e->getMessage();
	}
}
?>