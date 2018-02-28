<?php
session_start();
include('../db/connection.php');
include('../stripe/config.php');
if(isset($_REQUEST['username']) && isset($_REQUEST['pass']))
{	
	$username = $_REQUEST['username'];
	$password = $_REQUEST['pass'];
	$id="";$status="";$type='';$sub_end_dt='';
	$active = 1; $flag=0;$enddt='';$status='';$cusid='';$todaydt='';$renewdt='';
	$sql = "SELECT * FROM login_master WHERE `email`='$username' and `password`='$password'";
	foreach ($dbh->query($sql) as $row)
	{		
		$id=$row['user_id'];
		$status=$row['status'];
		$type=$row['user_type'];
		 if($type=='Loanofficer'){
			$sql_loan="select * from loanofficer_master where id='$id'";
			foreach($dbh->query($sql_loan) as $r){
				$enddt=$r['enddate'];
				$status=$r['status'];
				$cusid=$r['stripeid'];
				$todaydt=date('Y-m-d');
				
			}
			//$enddt = $enddt.' 00:00:00';
			//echo $enddt.' '.$todaydt.' '.strtotime($todaydt).' '.strtotime($enddt).' '.($todaydt>$enddt);
			//$enddt=strtotime($enddt);
//			if(strtotime($todaydt)>strtotime($enddt)){
	//echo $enddt.' '.$todaydt;
			if($todaydt>$enddt){
				$active=0;
					$subscription =Stripe_Subscription::all(
					  array('customer'=>$cusid,'limit'=>1000)
					)->__toArray(true);
						

					//var_dump($subscription['data']);
					 //echo count($subscription['data']);
					for($i=0;$i<count($subscription['data']);$i++){
						//echo $subscription['data'][$i]['id'];
						//echo '<br>';
						$sub_end_dt = date('Y-m-d',$subscription['data'][$i]['current_period_end']);
						//echo $sub_end_dt;
						//echo '<br>';
						if($sub_end_dt>$todaydt){
							//code to update subscription end date
							$sql_loanoff_update = "update loanofficer_master set enddate = '$sub_end_dt' where id='$id'";
							//echo "query $sql_loanoff_update ";
							//echo 'match found :'.$sub_end_dt.' '.$todaydt;
							$dbh->query($sql_loanoff_update);
								//echo 'end date update';
							$active = 1;
							break;
						}
					}
					//echo $subscription['data'][0]['id'];
					
			}	
		} 
	}
	if($id=='')
	{
		echo $flag;
	}
	else if($active==0)
	{
		echo 2;
	}
	else
	{
		$_SESSION['id']=$id;
		$_SESSION['usertype']=$type;
		if($status==0)
		{
			$str="update login_master set status='1' where `email`='$username' and `password`='$password'";
			if($dbh->query($str))
			{ 
			$flag=1;
		    echo $flag;
			}
		}else{
			$flag=1;
			echo $flag;
		}
	}
}
if(isset($_REQUEST['email']))
{
	$email=$_REQUEST['email'];
	$usertype='';$status='';$result = array();
	$sql = "SELECT user_type,status FROM login_master WHERE `email`='$email'";
	foreach ($dbh->query($sql) as $row)
	{		
		$usertype=$row['user_type'];
		$status=$row['status'];
	}
	//echo $usertype.'-'.$status;
	array_push($result,$usertype,$status);
	echo json_encode($result);	
}
?>