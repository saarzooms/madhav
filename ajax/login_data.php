<?php
session_start();
include('../db/connection.php');
include('../stripe/config.php');
if(isset($_REQUEST['username']) && isset($_REQUEST['pass']))
{	$flag=1;
	echo $flag;
}

?>