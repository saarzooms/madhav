<?php
session_start();
include('../db/connection.php');
    $user_id=isset($_SESSION['id']);
	$roll="";
	$sql = "SELECT * FROM login_master WHERE user_id='".$_SESSION['id']."' ";
	foreach ($dbh->query($sql) as $row)
	{		
		$roll=$row['user_type'];
	}
if(isset($_REQUEST['id']))
{
	$loancnt='';
	$custcnt='';
	$partnercnt='';
	$businesscnt='';
	$result = array();
	if($roll=='Admin')
	{
		$s="select count(*) as cnt from loanofficer_master";
		foreach ($dbh->query($s) as $r)
		{		
			$loancnt=$r['cnt'];
		}
		$s1="select count(*) as cnt1 from customer_master";
		foreach ($dbh->query($s1) as $r1)
		{		
			$custcnt=$r1['cnt1'];
		}
		$s2="select count(*) as cnt2 from trusted_partner";
		foreach ($dbh->query($s2) as $r2)
		{		
			$partnercnt=$r2['cnt2'];
		}
		$s3="select count(*) as cnt3 from businesstype_master";
		foreach ($dbh->query($s3) as $r3)
		{		
			$businesscnt=$r3['cnt3'];
		}
		array_push($result,'Admin',$loancnt,$custcnt,$partnercnt,$businesscnt);
	    echo json_encode($result);
	}else if($roll=='Loanofficer'){
		
		$s1="select count(*) as cnt1 from customer_master where loanofficer_id='".$_SESSION['id']."'";
		foreach ($dbh->query($s1) as $r1)
		{		
			$custcnt=$r1['cnt1'];
		}
		$s2="select count(*) as cnt2 from mypartner_master where loanofficer_id='".$_SESSION['id']."'";
		foreach ($dbh->query($s2) as $r2)
		{		
			$partnercnt=$r2['cnt2'];
		}
		
		array_push($result,'Loanofficer',$custcnt,$partnercnt);
	    echo json_encode($result);
	}else{
		
	}
	
}
?>