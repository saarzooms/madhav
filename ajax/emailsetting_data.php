<?php
session_start();
include('../db/connection.php');
if(isset($_REQUEST['host']) && isset($_REQUEST['port']) && isset($_REQUEST['ssl']) && isset($_REQUEST['tls']) && isset($_REQUEST['username']) && isset($_REQUEST['pass']))
{
	$host=$_REQUEST['host'];
	$port=$_REQUEST['port'];
	$ssl=$_REQUEST['ssl'];
	$tls=$_REQUEST['tls'];
	$username=$_REQUEST['username'];
	$pass=$_REQUEST['pass'];
	
	$msg="";
	try {
		$sql="INSERT INTO `email_setting`(`loanofficer_id`, `smtp_host`, `smtp_port`, `ssl_protocol`, `tls_protocol`, `smtp_username`, `smtp_password`) 
		VALUES (".$_SESSION['id'].",'$host','$port','$ssl','$tls','$username','$pass')";
		
		if($dbh->query($sql))
		{
			$msg="Data Save Successfully";
			echo $msg;
		}
	}catch(Exception $e) {
	  echo 'Message: ' .$e->getMessage();
	}
}
else if(isset($_REQUEST['did2']))
{
$id= $_REQUEST['did2'];
if(isset($id)){
	$sql2 = "select * from email_setting where id='$id'";
	$result = array();
		foreach ($dbh->query($sql2) as $row2)
			{
				$smtp_host=$row2['smtp_host'];
				$smtp_port=$row2['smtp_port'];
				$ssl_protocol=$row2['ssl_protocol'];
				$tls_protocol=$row2['tls_protocol'];
				$smtp_username=$row2['smtp_username'];
				$smtp_password=$row2['smtp_password'];
				
		}
    array_push($result,$smtp_host,$smtp_port,$ssl_protocol,$tls_protocol,$smtp_username,$smtp_password);
	echo json_encode($result);			
}

}
else if(isset($_REQUEST['host1']) && isset($_REQUEST['port1'])&& isset($_REQUEST['ssl1'])&& isset($_REQUEST['tls1'])&& isset($_REQUEST['username1'])&& isset($_REQUEST['pass1']) && isset($_REQUEST['typeid']) )
{
	$host=$_REQUEST['host1'];
	$port=$_REQUEST['port1'];
	$ssl=$_REQUEST['ssl1'];
	$tls=$_REQUEST['tls1'];
	$username=$_REQUEST['username1'];
	$pass=$_REQUEST['pass1'];
	$typeid=$_REQUEST['typeid'];
	
	
	$msg="";
	$sql="UPDATE `email_setting` SET `smtp_host`='$host',`smtp_port`='$port',`ssl_protocol`='$ssl',`tls_protocol`='$tls',`smtp_username`='$username',`smtp_password`='$pass' WHERE id='$typeid' and loanofficer_id='".$_SESSION['id']."'";
	if($dbh->query($sql))
	{
		$msg="Data Update Successfully";
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
				<th>SMTP Host</th>  
				<th>SMTP Port</th>  
				<th>SSL Protocol</th>  
				<th>TSL Protocol</th>  
				<th>SMTP Username</th>  
				   
				<th><center>Action</center></th>  
            </tr>
        </thead>
       <tbody>
<?php
		$sql ="select * from `email_setting`";
			foreach ($dbh->query($sql) as $row)
			{				
?>				
		<tr>
		<td><?php echo $row['id']; ?></td>
		<td><?php echo $row['smtp_host']; ?></td>
		<td><?php echo $row['smtp_port']; ?></td>
		<td><?php echo $row['ssl_protocol']; ?></td>
		<td><?php echo $row['tls_protocol']; ?></td>
		<td><?php echo $row['smtp_username']; ?></td>
		
		<td><center><button  class="btn_up btn btn-xs btn-danger"  value="<?php echo $row['id']; ?>" >
			<i class="fa fa-edit"></i></button>
		</center></td>
		</tr>

	<?php
}
?>
</tbody>
			</table>
	<?php
}
?>