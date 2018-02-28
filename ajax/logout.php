<?php
session_start();
include('../db/connection.php');
if(isset($_GET['logout']))
{

		session_destroy();
		unset($_SESSION['id']);
		header("Location: ../index.php");

}
?>