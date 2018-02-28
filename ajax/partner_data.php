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
	$username="";
	$sql1 = "SELECT * FROM loanofficer_master WHERE id='".$_SESSION['id']."' ";
	foreach ($dbh->query($sql1) as $row1)
	{		
		$username=$row1['name'];
	}
	if($roll =='Admin'){
		$username='Admin';
	}
if(isset($_REQUEST['photo']) && isset($_REQUEST['email']) && isset($_REQUEST['phone']) && isset($_REQUEST['business']) && isset($_REQUEST['contact']) && isset($_REQUEST['address']) && isset($_REQUEST['facebook'])  && isset($_REQUEST['linked']) && isset($_REQUEST['hours']) && isset($_REQUEST['type']) && isset($_REQUEST['twitter']))
{
	$photo=$_REQUEST['photo'];
	$email=$_REQUEST['email'];
	$phone=$_REQUEST['phone'];
	$business=$_REQUEST['business'];
	$contact=$_REQUEST['contact'];
	$address=$_REQUEST['address'];
	$facebook=$_REQUEST['facebook'];
	$linked=$_REQUEST['linked'];
	$hours=$_REQUEST['hours'];
	$note=$_REQUEST['note'];
	$type=$_REQUEST['type'];
	$twitter=$_REQUEST['twitter'];
	$check=$_REQUEST['check'];
	$date=$_REQUEST['date'];
	if($date=='-')
	{
		$date='';
	}else{
		$date=date("Y-m-d", strtotime($_REQUEST['date']));
	}
	
	//file_put_contents('./log_'.date("j.n.Y").'.txt',$date, FILE_APPEND);
	$msg="";
	$sql="INSERT INTO `trusted_partner`(`photo`, `email`, `phone`, `business_name`, `contact_name`, `address`, `facebook_profile`, `linkedin_profile`, `business_hours`, `note`, `business_type`, `twitter_handle`, `user`, `forcedisplay`, `display_date`) 
	VALUES ('$photo','$email','$phone','$business','$contact','$address','$facebook','$linked','$hours','$note','$type','$twitter','$username','$check','$date')";
	if($dbh->query($sql))
	{
		$msg="Data Save Successfully";
		echo $msg;
	}
}
else if(isset($_REQUEST['id1']))
{	
$id = $_REQUEST['id1']; 
if(isset($id)){
$sql = "DELETE FROM trusted_partner where id='$id'";		
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
	$sql2 = "SELECT * FROM trusted_partner where id='$id'";
	$result = array();
		foreach ($dbh->query($sql2) as $row2)
			{
				$photo=$row2['photo'];
				$email=$row2['email'];
				$phone=$row2['phone'];
				$business_name=$row2['business_name'];
				$contact_name=$row2['contact_name'];
				$address=$row2['address'];
				$facebook_profile=$row2['facebook_profile'];
				$linkedin_profile=$row2['linkedin_profile'];
				$business_hours=$row2['business_hours'];
				$note=$row2['note'];
				$type=$row2['business_type'];
				$twitter=$row2['twitter_handle'];
				$check=$row2['forcedisplay'];
				$date=$row2['display_date'];
				
				//$dt=date("d-m-Y", strtotime($row2['sch_date']));
		}
    array_push($result,$photo,$email,$phone,$business_name,$contact_name,$address,$facebook_profile,$linkedin_profile,$business_hours,$note,$type,$twitter,$check,$date);
	echo json_encode($result);			
}

}
else if(isset($_REQUEST['photo1']) && isset($_REQUEST['email1']) && isset($_REQUEST['phone1']) && isset($_REQUEST['business1']) && isset($_REQUEST['contact1']) && isset($_REQUEST['address1']) && isset($_REQUEST['facebook1'])  && isset($_REQUEST['linked1']) && isset($_REQUEST['hours1']) && isset($_REQUEST['partnerid']) && isset($_REQUEST['type1']) && isset($_REQUEST['twitter1']))
{
	$photo=$_REQUEST['photo1'];
	$email=$_REQUEST['email1'];
	$phone=$_REQUEST['phone1'];
	$business=$_REQUEST['business1'];
	$contact=$_REQUEST['contact1'];
	$address=$_REQUEST['address1'];
	$facebook=$_REQUEST['facebook1'];
	$linked=$_REQUEST['linked1'];
	$hours=$_REQUEST['hours1'];
	$note=$_REQUEST['note1'];
	$id=$_REQUEST['partnerid'];
	$type=$_REQUEST['type1'];
	$twitter=$_REQUEST['twitter1'];
	$check=$_REQUEST['check'];
	$date=$_REQUEST['date'];
	if($check=='No')
	{
		$date='-';
	}else{
		$date=date("Y-m-d", strtotime($_REQUEST['date']));
	}
	
	$msg="";
	$sql="UPDATE `trusted_partner` SET `photo`='$photo',`email`='$email',`phone`='$phone',`business_name`='$business',`contact_name`='$contact',`address`='$address',`facebook_profile`='$facebook',`linkedin_profile`='$linked',`business_hours`='$hours',`note`='$note',`business_type`='$type',`twitter_handle`='$twitter',`forcedisplay`='$check',`display_date`='$date' WHERE id='$id'";
	if($dbh->query($sql))
	{
		$msg="Data Update Successfully";
		echo $msg;
	}
}
else if(isset($_REQUEST['partner_id']))
{
	$partner_id=$_REQUEST['partner_id'];
	
	$sql="INSERT INTO `mypartner_master`(`partner_id`, `loanofficer_id`) VALUES ('$partner_id','".$_SESSION['id']."')";
	if($dbh->query($sql))
	{
		
	}
}
else if(isset($_REQUEST['partner_id1']))
{	
$partner_id = $_REQUEST['partner_id1']; 
if(isset($partner_id)){
$sql = "DELETE FROM mypartner_master where partner_id='$partner_id' and loanofficer_id='".$_SESSION['id']."'";		
			if($dbh->query($sql))
			{
				
			}
			else{
				
			}							
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
				<th>Id</th> 
				<?php
				if($roll=='Admin'){
				?>
				<th>User</th> 
				<?php
				}
				?>
				<th>Business Type</th> 
				<th>Photo</th>  			
				<th>Email</th>  
				<th>Phone</th>   
				<th>Business Name</th>   
				<th>Contact Name</th>   
				<th>Address</th>   
				<th>Business Hours</th>   
				<th>Note</th>   
				<th><center>Action</center></th>
				<?php
				if($roll=='Loanofficer'){
					?>
					<th><center>My Partner</center></th> 
          <?php					
				}
				
				?> 
				<?php
				if($roll=='Admin'){
					?>
					<th>Force Display?</th> 
					<th>Force display till</th> 
          <?php					
				}
				
				?> 
				
            </tr>
        </thead>
       <tbody>
<?php
		$sql = "select * from trusted_partner";
			foreach ($dbh->query($sql) as $row)
			{
				$type="";
				$s="select businesstype_name from businesstype_master where id='".$row['business_type']."'";
				foreach ($dbh->query($s) as $r)
			   {
				   $type=$r['businesstype_name'];
			   }
?>				
		<tr>
		<td><?php echo $row['id']; ?></td>
		<?php
				if($roll=='Admin'){
				?>
				<td><?php echo $row['user']; ?></td>
				<?php
				}
				?>
		<td><?php echo $type; ?></td>
		<td><img src="<?php echo $row['photo']; ?>" style="wisth:33px;height:33px;"/></td>
		<td><?php echo $row['email']; ?></td>
		<td><?php echo $row['phone']; ?></td>
		<td><?php echo $row['business_name']; ?></td>
		<td><?php echo $row['contact_name']; ?></td>
		<td><?php echo $row['address']; ?></td>
		<td><?php echo $row['business_hours']; ?></td>
		<td><?php echo $row['note']; ?></td>
		<?php
		if($roll=='Admin'){
			?>
				<td><?php echo $row['forcedisplay']; ?></td>
				<td><?php if($row['display_date']=='0000-00-00'){echo '0000-00-00';}else{echo date("d-m-Y", strtotime($row['display_date']));}?></td>
			<?php
		}
		?>
		<td><center><button  class="btn_up btn btn-xs btn-danger"  value="<?php echo $row['id']; ?>" >
			<i class="fa fa-edit"></i></button>
			<button  class="btn_del btn btn-xs btn-danger" value="<?php echo $row['id']; ?>">
			<i class="fa fa-trash"></i></button></center></td>
		<?php
		if($roll=='Loanofficer'){
				if($row['forcedisplay']=='Yes' && $row['display_date']>=date('Y-m-d')){
					?>
					<td><center><button  class="btn_follow btn btn-xs btn-success"  value="<?php echo $row['id']; ?>" >
			<i class="icon-user-following" style="color:#000;font-weight:bold;font-size:20px;" disabled></i></button></center></td>
					<?php
				}else{
				$cnt="";
				$s1="select count(*) as cnt from mypartner_master where partner_id='".$row['id']."' and loanofficer_id='".$_SESSION['id']."'";
				foreach ($dbh->query($s1) as $r1)
			   {
				   $cnt=$r1['cnt'];
			   }
			   if($cnt==1){
			?>
			<td><center><button  class="btn_follow btn btn-xs btn-success"  value="<?php echo $row['id']; ?>" >
			<i class="icon-user-following" style="color:#000;font-weight:bold;font-size:20px;"></i></button></center></td>
		<!--	<i class="icon-user-unfollow" style="fontsize:20px;"></i></button></center></td>  -->
			<?php
			   }else{
				   ?>
				   <td><center><button  class="btn_unfollow btn btn-xs btn-danger"  value="<?php echo $row['id']; ?>" >
			     <i class="icon-user-unfollow" style="color:#000;font-weight:bold;font-size:20px;"></i></button></center></td>
				  <?php
			   }
				}
		}
		
		?>
		</tr>

	<?php
}
?>
</tbody>
			</table>
	<?php
}
?>