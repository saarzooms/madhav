<?php
include('../db/connection.php');
if(isset($_REQUEST['name']) && isset($_REQUEST['email']) && isset($_REQUEST['photo']) && isset($_REQUEST['phone']) && isset($_REQUEST['address']) && isset($_REQUEST['state']) && isset($_REQUEST['zipcode'])  && isset($_REQUEST['password']) && isset($_REQUEST['hear']))
{
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$photo=$_REQUEST['photo'];
	$phone=$_REQUEST['phone'];
	$address=$_REQUEST['address'];
	$state=$_REQUEST['state'];
	$zipcode=$_REQUEST['zipcode'];
	$lender=$_REQUEST['lender'];
	$password=$_REQUEST['password'];
	$hear=$_REQUEST['hear'];
	
	$msg="";
	$sql="INSERT INTO `loanofficer_master`(`name`, `email`, `photo`, `phone`, `address`, `state`, `zipcode`, `lender`, `password`, `knowus`) 
	VALUES ('$name','$email','$photo','$phone','$address','$state','$zipcode','$lender','$password','$hear')";
	if($dbh->query($sql))
	{ 
		$user_id = $dbh->lastInsertId();
		$str="INSERT INTO `login_master`(`user_id`, `email`, `password`, `user_type`) 
		VALUES ('$user_id','$email','$password','Loanofficer')";
		if($dbh->query($str))
		{ 
			$msg="Loan Officer Data Save Successfully";
			echo $msg;
		}
		
	}
}
else if(isset($_REQUEST['id1']))
{	
$id = $_REQUEST['id1']; 
if(isset($id)){
$sql = "DELETE FROM loanofficer_master where id='$id'";		
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
	$sql2 = "SELECT * FROM loanofficer_master where id='$id'";
	$result = array();
		foreach ($dbh->query($sql2) as $row2)
			{
				$name=$row2['name'];
				$email=$row2['email'];
				$photo=$row2['photo'];
				$phone=$row2['phone'];
				$address=$row2['address'];
				$state=$row2['state'];
				$zipcode=$row2['zipcode'];
				$lender=$row2['lender'];
				$password=$row2['password'];
				
				//$dt=date("d-m-Y", strtotime($row2['sch_date']));
		}
    array_push($result,$name,$email,$photo,$phone,$address,$state,$zipcode,$lender,$password);
	echo json_encode($result);			
}

}
else if(isset($_REQUEST['name1']) && isset($_REQUEST['email1']) && isset($_REQUEST['photo1']) && isset($_REQUEST['phone1']) && isset($_REQUEST['address1']) && isset($_REQUEST['state1']) && isset($_REQUEST['zipcode1'])  && isset($_REQUEST['password1']) && isset($_REQUEST['loanid']))
{
	$name=$_REQUEST['name1'];
	$email=$_REQUEST['email1'];
	$photo=$_REQUEST['photo1'];
	$phone=$_REQUEST['phone1'];
	$address=$_REQUEST['address1'];
	$state=$_REQUEST['state1'];
	$zipcode=$_REQUEST['zipcode1'];
	$lender=$_REQUEST['lender1'];
	$password=$_REQUEST['password1'];
	$loanid=$_REQUEST['loanid'];
	
	$msg="";
	$sql="UPDATE `loanofficer_master` SET `name`='$name',`email`='$email',`photo`='$photo',`phone`='$phone',`address`='$address',`state`='$state',`zipcode`='$zipcode',`lender`='$lender',`password`='$password' WHERE id='$loanid'";
	if($dbh->query($sql))
	{
		$msg="Loan Officer Data Update Successfully";
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
				<th>Id</th> 
				<th>Name</th>  			
				<th>Email</th>  
				<th>Photo</th>   
				<th>Phone</th>   
				<th>Address</th>   
				<th>State</th>   
				<th>ZIP code</th>   
				<th>Lender</th>   
				<th><center>Action</center></th>  
            </tr>
        </thead>
       <tbody>
<?php
		//$sql = "select * from loanofficer_master";
		$sql = "select * from loanofficer_master";
			foreach ($dbh->query($sql) as $row)
			{
?>				
		<tr>
		<td><a href='customerlist.php?id=<?php echo $row['id'];?>' ><?php echo $row['id'];?></a></td>
		<!-- <td><?php //echo $row['id']; ?></td> -->
		<td><?php echo $row['name']; ?></td>
		<td><?php echo $row['email']; ?></td>
		<td><img src="<?php echo $row['photo']; ?>" style="wisth:33px;height:33px;"/></td>
		<td><?php echo $row['phone']; ?></td>
		<td><?php echo $row['address']; ?></td>
		<td><?php echo $row['state']; ?></td>
		<td><?php echo $row['zipcode']; ?></td>
		<td><?php echo $row['lender']; ?></td>
		
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
?>