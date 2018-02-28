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
if(isset($_REQUEST['officer']) && isset($_REQUEST['salutation']) && isset($_REQUEST['name']) && isset($_REQUEST['Marital']) && isset($_REQUEST['Spouse']) && isset($_REQUEST['email']) && isset($_REQUEST['phone']) && isset($_REQUEST['credit']) && isset($_REQUEST['address']) && isset($_REQUEST['facebook']) && isset($_REQUEST['state']) && isset($_REQUEST['zipcode']))
{
	$officer=$_REQUEST['officer'];
	$salutation=$_REQUEST['salutation'];
	$name=$_REQUEST['name'];
	$Marital=$_REQUEST['Marital'];
	$Spouse=$_REQUEST['Spouse'];
	$email=$_REQUEST['email'];
	$phone=$_REQUEST['phone'];
	$credit=$_REQUEST['credit'];
	$address=$_REQUEST['address'];
	$facebook=$_REQUEST['facebook'];
	$state=$_REQUEST['state'];
	$zipcode=$_REQUEST['zipcode'];
	//file_put_contents('./log_'.date("j.n.Y").'.txt', $state.$zipcode, FILE_APPEND);
	$msg="";
	try {
		$sql="INSERT INTO `customer_master`(`loanofficer_id`, `salutation`, `name`, `marital_status`, `spouse_name`, `email`, `phone`, `credit_score`, `address`, `facebookid`, `state`, `zipcode`) 
		VALUES ('$officer','$salutation','$name','$Marital','$Spouse','$email','$phone','$credit','$address','$facebook','$state','$zipcode')";
		
		if($dbh->query($sql))
		{
			/* $id = $dbh->lastInsertId();
			$password=random_otp($length = 4);
			$str="INSERT INTO `login_master`(`user_id`, `email`, `password`, `user_type`) 
			VALUES ('$id','$email','$password','Customer')";
			if($dbh->query($str))
			{  */
				/* $email_from = 'arzoo.rkcet@gmail.com';
	            $subject='Your Registration Complete';
				
 
				 $headers  = 'MIME-Version: 1.0' . "\r\n";
				 $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
				 $headers .= "From: ".$email_from."\r\n";
				 $message="	  
					   
						 Username:
						 $email 	   
						 <br>
						 Password:
						 $password 	   
						 
						<br>
						 Please used below link to access portal <br>
						 <a href='http://bansariflourmill.com/material/login.php'>Click Here To Llogin</a>
					  
				   ";
				if(mail($email,$subject,$message,$headers)){ */	
				$id = $dbh->lastInsertId();
			//$password=random_otp($length = 4);
			
					$msg="Customer Data Save Successfully";
				    echo $msg;
			
			/* 	}
				else{
				
				} */
				
			}
		}catch(Exception $e) {
	  echo 'Message: ' .$e->getMessage();
	}
}
else if(isset($_REQUEST['id1']))
{	
$id = $_REQUEST['id1']; 
if(isset($id)){
$sql = "DELETE FROM customer_master where id='$id'";		
			if($dbh->query($sql))
			{
				$msg1 = "<script>alert('Deleted Successfully');</script>";
			}
			else{
				$msg1 = "<script>alert('Error To Delete Data!!!');</script>";
			}							
}
}
else if(isset($_REQUEST['did2']))
{
$id= $_REQUEST['did2'];
if(isset($id)){
	$sql2 = "SELECT * FROM customer_master where id='$id'";
	$result = array();
		foreach ($dbh->query($sql2) as $row2)
			{
				$officer=$row2['loanofficer_id'];
				$salutation=$row2['salutation'];
				$name=$row2['name'];
				$Marital=$row2['marital_status'];
				$Spouse=$row2['spouse_name'];
				$email=$row2['email'];
				$phone=$row2['phone'];
				$credit=$row2['credit_score'];
				$address=$row2['address'];
				$facebook=$row2['facebookid'];
				$state=$row2['state'];
				$zipcode=$row2['zipcode'];
				
				//$dt=date("d-m-Y", strtotime($row2['sch_date']));
		}
    array_push($result,$officer,$salutation,$name,$Marital,$Spouse,$email,$phone,$credit,$address,$facebook,$state,$zipcode);
	echo json_encode($result);			
}

}
else if(isset($_REQUEST['officer1']) && isset($_REQUEST['salutation1']) && isset($_REQUEST['name1']) && isset($_REQUEST['Marital1']) && isset($_REQUEST['Spouse1']) && isset($_REQUEST['email1']) && isset($_REQUEST['phone1']) && isset($_REQUEST['credit1']) && isset($_REQUEST['address1']) && isset($_REQUEST['facebook1']) && isset($_REQUEST['state1']) && isset($_REQUEST['zipcode1']) && isset($_REQUEST['custid']))
{
	$officer=$_REQUEST['officer1'];
	$salutation=$_REQUEST['salutation1'];
	$name=$_REQUEST['name1'];
	$Marital=$_REQUEST['Marital1'];
	$Spouse=$_REQUEST['Spouse1'];
	$email=$_REQUEST['email1'];
	$phone=$_REQUEST['phone1'];
	$credit=$_REQUEST['credit1'];
	$address=$_REQUEST['address1'];
	$facebook=$_REQUEST['facebook1'];
	$state=$_REQUEST['state1'];
	$zipcode=$_REQUEST['zipcode1'];
	$custid=$_REQUEST['custid'];
	
	$msg="";
	$sql="UPDATE `customer_master` SET `loanofficer_id`='$officer',`salutation`='$salutation',`name`='$name',`marital_status`='$Marital',`spouse_name`='$Spouse',`email`='$email',`phone`='$phone',`credit_score`='$credit',`address`='$address',`facebookid`='$facebook',`state`='$state',`zipcode`='$zipcode' WHERE id='$custid'";
	if($dbh->query($sql))
	{
		$msg="Customer Data Update Successfully";
		echo $msg;
	}
}
else if(isset($_REQUEST['id']))
{
	?>
	<script>
 var table = $('#example').DataTable( {
	scrollX: true,
	pageLength: 10,
	 fixedHeader: true,
        lengthChange: false,
		order: [[ 0, "asc" ]],
        buttons: [ 'copy', 'excel', 'pdf', 'colvis' ]
    } );
    table.buttons().container()
        .appendTo( '#example_wrapper .col-sm-6:eq(0)' );
	
 /*  $('#example thead th').each( function () {
        var title = $(this).text();
        $(this).html( '<label>'+title+'</label><br><input type="text" placeholder="Search '+title+'" />' );
    } );  */
 
    // DataTable
    var table = $('#example').DataTable();
 
    // Apply the search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.header() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
	
</script>
	<table id="example" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead>
            <tr>
			<?php
			if($roll=='Admin'){
				?>
				<th>Loan Id</th>
				<?php
			}
				?>
				<th>Officer Name</th>  			
				<th>Salutation</th>  
				<th>Name</th>   
				<th>Marital Status</th>   
				<th>Spouse Name</th>   
				<th>Email</th>   
				<th>Phone</th>   
				<th>Credit Score</th>   
				<th>Address</th>     
				<th><center>Action</center></th>  
            </tr>
        </thead>
       <tbody>
<?php
		if($roll=='Admin'){
			$sql = "select customer_master.*,borrowers.loanId from customer_master inner join borrowers on borrowers.id=customer_master.id where borrowers.borrowerId='B'";
		}else{
			$sql = "select * from customer_master where loanofficer_id='".$_SESSION['id']."'";
		}
		
		$officername="";
			foreach ($dbh->query($sql) as $row)
			{
				$s="select name from loanofficer_master where id='".$row['loanofficer_id']."'";
				foreach ($dbh->query($s) as $r)
				{
					$officername=$r['name'];
				}
?>				
		<tr>
		<?php
			if($roll=='Admin'){
				?>
				<td><a href='calculator.html#/loan-calculator/<?php echo $row['loanId'];?>' target='_blank'><?php echo $row['loanId'];?></a></td>
				<?php
			}
			?>
		
		<td><?php echo $officername; ?></td>
		<td><?php echo $row['salutation']; ?></td>
		<td><?php echo $row['name']; ?></td>
		<td><?php echo $row['marital_status']; ?></td>
		<td><?php echo $row['spouse_name']; ?></td>
		<td><?php echo $row['email']; ?></td>
		<td><?php echo $row['phone']; ?></td>
		<td><?php echo $row['credit_score']; ?></td>
		<td><?php echo $row['address']; ?></td>
		
		<td><center><button  class="btn_up btn btn-xs btn-danger"  value="<?php echo $row['id']; ?>" >
			<i class="fa fa-edit"></i></button>
			<button  class="btn_del btn btn-xs btn-danger" value="<?php echo $row['id']; ?>">
			<i class="fa fa-trash"></i></button></center></td>
		</tr>

	<?php
}
?>
</tbody>
			</table>
	<?php
}
function random_otp( $length = 4 ) 
{
    $chars = "0123456789";
    $password = substr( str_shuffle( $chars ), 0, $length );
    return $password;
}	
?>